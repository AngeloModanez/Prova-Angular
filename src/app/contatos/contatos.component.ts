import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContatoService } from '../contato.service';
import { Contato } from '../contato';
import { Tipo } from '../tipo';
import { TipoService } from '../tipo.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent implements OnInit {
  arrayContato: Contato[] = [];
  arrayTipo: Tipo[] = [];
  contatoFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contatoService: ContatoService,
    private tipoService: TipoService
  ) {
    this.contatoFormGroup = formBuilder.group({
      id: [''],
      nome: [''],
      email: [''],
      telefone: [''],
      tipoId: [''],
      favorito: [false]
    })
  }

  ngOnInit(): void {
    this.loadContato();
    this.loadTipo();
  }

  loadContato() {
    this.contatoService.load().subscribe({
      next: data => {
        this.arrayContato = data;
      }
    });
  }

  loadTipo() {
    this.tipoService.load().subscribe({
      next: data => {
        this.arrayTipo = data;
      }
    });
  }

  save() {
    this.contatoService.save(this.contatoFormGroup.value).subscribe({
      next: data => {
        this.arrayContato.push(data);
        this.contatoFormGroup.reset();
      },
    });
  }

  compareTipos(tipo1: Tipo, tipo2: Tipo): boolean {
    return tipo1 && tipo2 ? tipo1.id === tipo2.id : tipo1 === tipo2;
  }

  getTipo(tipoId: number): Tipo | undefined {
    return this.arrayTipo.find(t => t.id == tipoId)
  }
}
