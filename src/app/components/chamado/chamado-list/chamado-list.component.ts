import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Chamado } from 'src/app/models/chamado';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css']
})
export class ChamadoListComponent implements OnInit {


  ELEMENT_DATA: Chamado[] = [{
    id: 1,
    titulo: "Chamado 1",
    cliente: "1",
    dataAbertura: "18/12/2022",
    prioridade: "ALTA",
    status: "ANDAMENTO",
    dataFechamento: "18/12/2022",

    descricao: "Teste Chamado",
    tecnico: "6",
    nomeCliente: "Kleber Santos",
    nomeTecnico: "Albert Einstein"
  }];

  displayedColumns: string[] = ['id', 'titulo', 'cliente','tecnico', 'dataAbertura', 'prioridade', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  findAll() {
   /* this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    })
    */
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
