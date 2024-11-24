import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { TableComponent } from "./table/table.component";
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
      <header>
        <app-header></app-header>
      </header>
      <section class="p-6">
        <div class="grid grid-flow-col justify-stretch gap-4 pb-5">
          <app-card Title="Total de OF's" [WarningStatus]="true" [WarningRedStatus]="true" [Count]="253" [SubMessage]="24">
          </app-card>
          <app-card Title="OF Validada" [CheckStatus]="true" [Count]="2">
          </app-card>
          <app-card Title="OF Efetivada" [CheckInfoStatus]="true" [Count]="2">
          </app-card>
          <app-card Title="OF Iniciada" [InfoStatus]="true" [Count]="2">
          </app-card>
        </div>
        <div class="">
          <app-table></app-table>
        </div>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, CardComponent, TableComponent]
})
export class AppComponent {
  title = 'BeeBotFront';
}
