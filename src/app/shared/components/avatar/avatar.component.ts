import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'nifas-avatar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
 
  image: any;
  size: number =  35
  @Input('size') set _size(val: number) {

    this.size = val;
    if (this.size <= 20 || this.size > 120) {
      throw (new Error("The size avatar should be more than 20 and less 120"))
    }
  }

  constructor() {}

}
