import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleQuestion, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  template: `
    <div class="border-b-2 border-gray-400 flex justify-between p-2">
      <div class="">
        IBM <b>BeeBot BB</b>
      </div>
      <div>
        <fa-icon [icon]="faQuestion" class="p-2"></fa-icon>
        <fa-icon [icon]="faUser" class="p-2"></fa-icon>
      </div>
    </div>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faUser = faUserCircle;
  faQuestion = faCircleQuestion;
}
