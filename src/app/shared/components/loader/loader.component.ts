import { Component, Input } from '@angular/core';


@Component({
  selector: 'nifas-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  standalone: true
})
export class LoaderComponent  {
 
  @Input() isShadow : boolean = false
  constructor() { }
 
}
