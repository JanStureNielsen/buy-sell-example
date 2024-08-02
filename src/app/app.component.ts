import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from "@angular/common";
import { FormsModule} from "@angular/forms";

import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";
import { MatSliderModule} from "@angular/material/slider";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    RouterOutlet,
    NgClass,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatRadioModule,
    MatSliderModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'buy-sell-example';

  isSell: boolean = false;

  units = 1;
  unitsMin = 1;
  unitsMax = 10;
  unitsStep = 1;

  price = 500;
  priceMin = 0;
  priceMax = 1000;
  priceStep = 25;

  buyColor() {
    return this.isSell ? '' : 'buy';
  }

  sellColor() {
    return this.isSell ? 'sell' : '';
  }

  color() {
    return this.isSell ? 'sell' : 'buy';
  }

  colorSlider() {
    return this.isSell ? 'sell-slider' : 'buy-slider';
  }

}
