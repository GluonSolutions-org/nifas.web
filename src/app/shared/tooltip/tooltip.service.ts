import { Injectable } from "@angular/core";


const IGNORE = ["berry-popup"];

const GAP = 5;

@Injectable({
    providedIn: 'root'
})
export class TooltipService {
    private tooltip: any;

    public get isRtl(): boolean {
        return true // LocalStorage.get('lang') == 'ar';
    }

    public view(el: any, title: string, viewMode: boolean, reverseDirection: boolean): void {
        if (IGNORE.includes(el.nodeName.toLowerCase()) || !title?.trim()) return;

        if (viewMode) {
            this.tooltip.innerHTML = title;
        } else {
            this.tooltip.textContent = title;
        }

        this.tooltip.show();
        this.relocate(el, reverseDirection);

    }
    public hide(): void {
        this.tooltip?.hide();
    }

    private relocate(elmnt: any, reverseDirection: boolean): void {
        const el = elmnt.getBoundingClientRect();
        const { style } = this.tooltip;
        const windowInnerWidth = window.innerWidth;
        const windowInnerHeight = window.innerHeight;
        const tltip = this.tooltip.getBoundingClientRect();

        // reset position
        style.bottom = 'unset';
        style.right = "unset";
        style.left = "unset";
        style.top = el.bottom + GAP + 'px';

        // if tooltip viewed out of screen from bottom
        if (windowInnerHeight - (el.height + tltip.height + GAP) <= el.bottom) {
            style.top = "unset";
            style.bottom = el.height + (windowInnerHeight - el.bottom) + 'px';
        }

        if ((this.isRtl && !reverseDirection) || !this.isRtl && reverseDirection) {
            if ((windowInnerWidth - el.right) + GAP + tltip.width < windowInnerWidth) {
                style.right = (windowInnerWidth - el.right) + GAP + 'px';
            } else {
                // if tooltip viewed out of screen from left
                style.right = "unset";
                style.left = GAP + 'px';
            }

        } else {
            if (el.x + tltip.width < window.innerWidth + GAP) {
                style.left = el.left + GAP + 'px';
            } else {
                // if tooltip viewed out of screen from right
                style.left = "unset";
                style.right = GAP + 'px';
            }

        }
    }

    public loadTooltip(): void {
        this.tooltip = document.createElement('div');
        this.tooltip.classList.add("tippy");
        document.body.appendChild(this.tooltip);
        this.tooltip.show = function () {
            this.style.visibility = 'visible';
        }
        this.tooltip.hide = function () {
            this.style.visibility = 'hidden';
        }
        this.hide();
        
        document.addEventListener('scroll',  ({ target }: any) =>{
            this.hide();
          }, true);
    }

}
