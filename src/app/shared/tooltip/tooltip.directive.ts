import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { TooltipService } from "./tooltip.service";

@Directive({ 
  standalone:true,
  selector: "[title]"
 })
export class TooltipDirective {

    @Input("title") title !: string;
    @Input("viewAsHtml") viewAsHtml: boolean = false;
    @Input("reverseDirection") reverseDirection: boolean = false;

    constructor(public el: ElementRef, public srv: TooltipService) { }

    @HostListener('mouseover') onMouseOver() {
        this.el.nativeElement.title="";
        this.srv.view(this.el.nativeElement, this.title, this.viewAsHtml,this.reverseDirection);
    }

    @HostListener('mouseout') onMouseOut() {
        this.srv.hide();
    }
    
    @HostListener("click") onClick() {
        this.srv.hide();
    }
}

