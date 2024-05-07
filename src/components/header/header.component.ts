import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  public isChecked: boolean = false;

  constructor(
    private router: Router,
    private commonService: CommonService
  ) {
  }

  ngOnInit(): void {
  }
  changeBackground() {
    
    this.commonService.setChangeColor(this.isChecked);
  }

  toggleButton: boolean = false;
}
