import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-dosificacion',
  templateUrl: './crear-dosificacion.component.html',
  styleUrls: ['./crear-dosificacion.component.css']
})
export class CrearDosificacionComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      codDosificacion: ['', [Validators.required, Validators.maxLength(3)]],
    })
   }

  ngOnInit(): void {
  }

  agregarDosificacion(){

  }

}
