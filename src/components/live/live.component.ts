import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live.component.html',
  styleUrl: './live.component.scss'
})
export class LiveComponent {
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
