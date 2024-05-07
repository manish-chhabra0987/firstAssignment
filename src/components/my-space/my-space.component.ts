import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-my-space',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-space.component.html',
  styleUrl: './my-space.component.scss'
})
export class MySpaceComponent {
  public changeColor: boolean = false;
  constructor(
    private commonService: CommonService
  ) {}
  ngOnInit(): void {
    this.commonService.getChangeColor.subscribe((response)=> {
      this.changeColor = response;
      
    })
    
  }
}
