import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  @Input()
  page: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public onClick(box: any): void {
    if (this.router.config[0] && this.router.config[0].path == '') {
      this.router.navigate(['internal/box', { id: box.id }], {
        state: box,
      });
    } else {
      this.router.navigate(['room26/touchscreen/box', { id: box.id }], {
        state: box,
      });
    }
  }
}