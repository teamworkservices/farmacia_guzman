import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Dosificacion } from 'src/app/shared/models/dosificacion';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CrearDosificacionComponent } from './crear-dosificacion/crear-dosificacion.component';

@Component({
  selector: 'app-dosificacion',
  templateUrl: './dosificacion.component.html',
  styleUrls: ['./dosificacion.component.css']
})
export class DosificacionComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'codigo'];

  dosificacionData: Dosificacion[] = [
    {id: 1, nombre: 'Hydrogen', descripcion: 'Descripcion', codigo: 'H'},
    {id: 2, nombre: 'Hydro', descripcion: 'Descripcion', codigo: 'H'},
    {id: 3, nombre: 'Hogen', descripcion: 'Descripcion', codigo: 'H'},
  ];

  dataSource!: MatTableDataSource<Dosificacion>

  constructor(public dialog: MatDialog) {
    
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Dosificacion>([]);
    //this.dataSource.filter= 'hydro';
    this.dataSource.data = this.dosificacionData;
  }

  openCreateDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "50%";
    //dialogConfig.panelClass = 'dialog-custom'
    const dialogRef = this.dialog.open(CrearDosificacionComponent, dialogConfig);
  }

}
