import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
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
