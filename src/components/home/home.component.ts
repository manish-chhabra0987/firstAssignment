import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss' , './mq-home.component.scss'] 
})
export class HomeComponent implements OnInit {
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
