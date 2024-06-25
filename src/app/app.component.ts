import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
  heroArrowLeft,
  heroArrowRight,
  heroCheck,
  heroCog6Tooth,
} from '@ng-icons/heroicons/outline';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [
    provideIcons({ heroCheck, heroArrowLeft, heroArrowRight, heroCog6Tooth }),
  ],
  imports: [RouterModule],
})
export class AppComponent {
  title = 'employee';
}
