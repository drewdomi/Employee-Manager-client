import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowLeft,
  heroArrowRight,
  heroCheck,
} from '@ng-icons/heroicons/outline';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [provideIcons({ heroCheck, heroArrowLeft, heroArrowRight })],
  imports: [RouterModule, NgIconComponent],
})
export class AppComponent {
  title = 'employee';
}
