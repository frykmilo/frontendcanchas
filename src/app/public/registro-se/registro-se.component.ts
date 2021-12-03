import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro-se',
  templateUrl: './registro-se.component.html',
  styleUrls: ['./registro-se.component.css']
})
export class RegistroSeComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }



  ReservaForm = new FormGroup({
    nombre: new FormControl(''),
    celular: new FormControl(''),
    email: new FormControl(''),
    fechaReserva: new FormControl(''),
    horaReserva: new FormControl(''),

  });

  onSubmit() {
    this.createRegister(this.ReservaForm.value)
  }

  createRegister(formData: any) {
    const body = {
      ...formData
    };
    //to do reemplazar url por url desplegada// 
    this.http.post<any>("http://localhost:3000/reserva/create", body)
      .subscribe((data) => {
        //por hacer acciones formulario// 
        console.log('data enviada', data);

      })

  }

}
