import { Component, OnInit } from '@angular/core';
import { Tipo } from '../tipo';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TipoService } from '../tipo.service';

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.component.html',
  styleUrl: './tipos.component.css'
})
export class TiposComponent implements OnInit {
  arrayTipo: Tipo[] = [];
  tipoFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private tipoService: TipoService
  ) {
    this.tipoFormGroup = formBuilder.group({
      id: [''],
      tipo: [''],
      descricao: ['']
    })
  }

  ngOnInit(): void {
    this.loadTipo();
  }

  loadTipo() {
    this.tipoService.load().subscribe({
      next: data => {
        this.arrayTipo = data;
      }
    });
  }

  save() {
    this.tipoService.save(this.tipoFormGroup.value).subscribe({
      next: data => {
        this.arrayTipo.push(data);
        this.tipoFormGroup.reset();
      },
    });
  }
}
