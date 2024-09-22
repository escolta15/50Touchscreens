import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { Box } from '../models/box.model';
import { Sensor } from '../models/sensor.enum';
import { Sound } from '../models/sound.enum';
import { PageComponent } from './page/page.component';

@Component({
  selector: 'app-room45',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatTabsModule,
    MatIconModule,
    PageComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  readonly SENSORS_TYPES = Sensor;
  readonly SOUNDS = Sound;

  public title: string = 'room45';
  public lcd: boolean = false;
  public totalBox: number = 6;
  public totalPage: number = 7;
  public pages: { [id: number]: any } = {};
  public boxes: Box[] = [
    { id: 1, name: "Lights", type: "boolean" },
  
    { id: 2, name: "Counter", type: "number" },
  
    { id: 3, name: "Welcome", type: "string" },
  ];
  public sensors: any[] = ["Proximity", "Light", "Temperature", "Humidity"];
  public thermostats: number = 2;
  
  public inputs: number = 4;
  
  
  public sound: any[] = [];
  
  public time: string = '';
  public programming: boolean = true;
  public programmingLed: boolean = false;
  public ports: any[] = ["KNX"];
  
  public licenses: string[] = [];
  
  
  public magnet: boolean = false;
  
  
  public battery: boolean = false;
  
  
  public externalPowerSupply: boolean = true;
  

  private clock: boolean = true;

  constructor(private router: Router) {
    this.initializePages();
    this.addBoxes();
    this.setTime();
  }

  public getPages(): Box[] {
    return Object.values(this.pages);
  }

  public reset(): void {
    this.programmingLed = true;
    setTimeout(() => (this.programmingLed = false), 3000);
    this.router.navigate(['']);
  }

  
  public turnOn(): void {
    console.log('Do something');
  }
  
  
  private initializePages(): void {
    for (let currentPage = 0; currentPage < this.totalPage; currentPage++) {
      this.pages[currentPage] = [];
    }
  }

  private addBoxes(): void {
    this.boxes.forEach((box: Box, index: number) => {
      const indexPage = Math.trunc(index / this.totalBox);
      this.pages[indexPage].push(box);
    });
  }

  private setTime(): void {
    if (this.clock) {
      setInterval(() => {
        this.time = new Date().toLocaleTimeString();
      }, 1000);
    }
  }

}
