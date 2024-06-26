import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
  heroArrowLeft,
  heroArrowRight,
  heroArrowRightEndOnRectangle,
  heroBars3,
  heroCheck,
  heroCog6Tooth,
  heroUser,
} from '@ng-icons/heroicons/outline';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [
    provideIcons({
      heroCheck,
      heroArrowLeft,
      heroArrowRight,
      heroCog6Tooth,
      heroBars3,
      heroArrowRightEndOnRectangle,
      heroUser,
    }),
  ],
  imports: [RouterModule],
})
export class AppComponent {
  title = 'employee';
}
