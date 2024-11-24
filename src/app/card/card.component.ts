import { Component, Input, SimpleChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck, faCircleExclamation, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FontAwesomeModule],
  template: `
    <div class="bg-gray-200 p-2 rounded">
      <div class="flex justify-between pb-3">
        <b>{{ Title }}</b>
        <div>
          @for (icon of icons; track icon) {
            @if(icon.show){
              <fa-icon [icon]="icon.name" [class]="icon.color" class="p-1"></fa-icon>
            }
          }
        </div>
      </div>
      <p class="text-4xl">
        {{ Count }}
      </p>
      <p class="text-base text-gray-500 min-h-[1.5rem] min-w-[12rem]">
        @if (SubMessage > 0) {
          {{ SubMessage }} sem chave associada
        }
      </p>
    </div>
  `,
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({ required: true }) Title!: string;
  @Input() WarningStatus!: boolean;
  @Input() WarningRedStatus!: boolean;
  @Input() CheckStatus!: boolean;
  @Input() CheckInfoStatus!: boolean;
  @Input() InfoStatus!: boolean;
  @Input({ required: true }) Count!: number;
  @Input() SubMessage!: number;

  faCircleCheck = faCircleCheck
  faCircleExclamation = faCircleExclamation
  faCircleInfo = faCircleInfo

  icons: Array<{ show: boolean, name: any, color: string }> = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.icons = [
      { show: this.WarningStatus, name: this.faCircleExclamation, color: 'text-yellow-500' },
      { show: this.WarningRedStatus, name: this.faCircleExclamation, color: 'text-red-500' },
      { show: this.CheckStatus, name: this.faCircleCheck, color: 'text-green-500' },
      { show: this.CheckInfoStatus, name: this.faCircleCheck, color: 'text-blue-500' },
      { show: this.InfoStatus, name: this.faCircleInfo, color: 'text-blue-500' }
    ];
  }
}
