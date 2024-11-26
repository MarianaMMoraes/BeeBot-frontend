import { Component, inject } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { TableComponent } from "./table/table.component";
import { CardComponent } from "./card/card.component";
import { RequestsService } from './requests.service';

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

  ofsData: any = [];

  constructor(private requestService: RequestsService) {
    this.requestService.getQuantiadeOfs().subscribe({
      next: (data) => {
        console.log('Data received:', data);
        this.ofsData = data;
      },
      error: (err) => {
        console.error('Error occurred:', err);
      }
    });
  }
}

interface ofs {
  id_geral: number,
  nome_colaborador: string,
  chave_C: string,
  id_ibm: number,
  gecap: string,
  sigla: string,
  email_ibm: string,
  email_RT: string,
  chave_RT: string,
  nome_RT: string
}
