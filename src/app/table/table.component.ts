import {SelectionModel} from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDownload, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FontAwesomeModule, MatTableModule, MatPaginatorModule, MatCheckboxModule],
  templateUrl: './table.component.html'
})
export class TableComponent {
  displayedColumns: string[] = ['select', 'of', 'chave', 'usti', 'acionamento', 'colaborador', 'gecap', 'valor', 'status'];
  dataSource = new MatTableDataSource<DataTable>(ELEMENT_DATA);
  selection = new SelectionModel<DataTable>(true, []);
  
  expandedElement: DataTable | null = null;

  toggleRow(row: DataTable): void {
    this.expandedElement = this.expandedElement === row ? null : row;
  }

  faMagnifyingGlass = faMagnifyingGlass;
  faDownload = faDownload;

  buttons = Object.entries({
    Tudo: { name: 'Tudo', selected: true },
    Incluída: { name: 'Incluída', selected: false },
    Vinculada: { name: 'Vinculada', selected: false },
    Iniciada: { name: 'Iniciada', selected: false },
    Validada: { name: 'Validada', selected: false },
    Conflito: { name: 'Conflito de informações', selected: false }
  }).map(([key, value]) => ({ key, ...value }));

  toggleSelection(button: any): void {
    this.buttons.forEach(b => (b.selected = b === button));
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: DataTable): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.of}`;
  }
}

type StatusType = 'Vinculada' | 'Incluída' | 'Validada' | 'Efetivada' | 'Iniciada';

export interface DataTable {
  of: number;
  chave: string|null;
  usti: string;
  acionamento: number;
  colaborador: string;
  gecap: string;
  valor: number;
  status: StatusType;
}

const ELEMENT_DATA: DataTable[] = [
  {of: 191091, chave: 'C1928371', usti: '0 de 100', acionamento: 56, colaborador: 'Fernanda Farias', gecap: 'gecap 1', valor: 1000.00, status: 'Efetivada'},
  {of: 191092, chave: 'C2847561', usti: '0 de 100', acionamento: 56, colaborador: 'Carlos Mendes', gecap: 'gecap 1', valor: 1000.00, status: 'Efetivada'},
  {of: 191093, chave: 'C3758491', usti: '0 de 100', acionamento: 56, colaborador: 'Amanda Fonseca', gecap: 'gecap 1', valor: 1000.00, status: 'Vinculada'},
  {of: 191094, chave: 'C4682951', usti: '0 de 100', acionamento: 56, colaborador: 'Marcelo Ramos', gecap: 'gecap 1', valor: 1000.00, status: 'Validada'},
  {of: 191095, chave: 'C5926471', usti: '0 de 100', acionamento: 56, colaborador: 'Daniela Duarte', gecap: 'gecap 1', valor: 1000.00, status: 'Validada'},
  {of: 191096, chave: 'C6738291', usti: '0 de 100', acionamento: 42, colaborador: 'Igor Moraes', gecap: 'gecap 1', valor: 1000.00, status: 'Validada'},
  {of: 191097, chave: 'C7849161', usti: '0 de 100', acionamento: 42, colaborador: 'Luiza Vasconcelos', gecap: 'gecap 1', valor: 1000.00, status: 'Validada'},
  {of: 191098, chave: 'C8950231', usti: '0 de 100', acionamento: 42, colaborador: 'Matheus Batista', gecap: 'gecap 1', valor: 1000.00, status: 'Incluída'},
  {of: 191099, chave: 'C9103841', usti: '0 de 100', acionamento: 42, colaborador: 'Victória Barreto', gecap: 'gecap 1', valor: 1000.00, status: 'Incluída'},
  {of: 191100, chave: 'C0293841', usti: '0 de 100', acionamento: 42, colaborador: 'Henrique Xavier', gecap: 'gecap 1', valor: 1000.00, status: 'Incluída'},
]
