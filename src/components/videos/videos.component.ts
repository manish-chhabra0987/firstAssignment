import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent implements OnInit {
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
