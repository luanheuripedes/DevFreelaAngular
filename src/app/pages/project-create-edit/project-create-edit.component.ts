import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProject } from 'src/app/shared/interfaces/IProject';
import { msg } from 'src/app/shared/utils/msg';
import { ProjectCreateEditService } from './services/project-create-edit.service';

@Component({
  selector: 'app-project-create-edit',
  templateUrl: './project-create-edit.component.html',
  styleUrls: ['./project-create-edit.component.scss'],
})
export class ProjectCreateEditComponent implements OnInit {
  //pega o query param apartir do da interrogação e transforma em
  id: string;
  //Type: 'create' || 'edit'
  screenType: 'edit' | 'create';

  title: string = '';
  actionButtonText: string = '';

  msg = msg;

  projectCreateEditForm: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    totalCost: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  constructor(
    private router: Router,
    private projectCreateEditService: ProjectCreateEditService,
    private fb: FormBuilder
  ) {
    this.id = history.state.id;
    this.screenType = this.id ? 'edit' : 'create';
  }

  ngOnInit(): void {
    this.setScreenTypeTexts();
    this.fillInputs();
  }

  createOrEdit() {
    //Se entrou aqui, é porque o conseguiu entrar no metodo!
    if (this.projectCreateEditForm.valid) {
      //pegar dados do form - inicia a massa de dados
      let payload:IProject = this.projectCreateEditForm.value;
      payload.idClient = localStorage.getItem("idClient");
      

      if (this.screenType === 'create') {
        this.projectCreateEditService
          .postProject(payload)
          .subscribe((response) => {
            alert('Cadastrado com sucesso!');
            this.router.navigateByUrl('list');
          });
      }

      if (this.screenType === 'edit') {
        this.projectCreateEditService
          .putProject(payload, this.id)
          .subscribe((response) => {
            alert('Editado com sucesso!');
            this.router.navigateByUrl('list');
          });
      }
    }else{
      this.projectCreateEditForm.markAllAsTouched();
    }

    
  }

  fillInputs() {
    if (this.screenType === 'edit') {
      fetch(
        `https://63177ac4ece2736550b47a15.mockapi.io/api/projects/${this.id}`
      )
        .then((response) => response.json())
        .then((project:IProject) => {
          this.projectCreateEditForm.patchValue({
            title: project.title,
            totalCost: project.totalCost,
            scription: project.description
          })
        });
    }
  }

  setScreenTypeTexts() {
    //Modo criar
    if (this.screenType == 'create') {
      this.title = 'Vamos cadastrar seu novo projeto!';
      this.actionButtonText = 'Cadastrar';
    }

    //Modo editar
    if (this.screenType == 'edit') {
      this.title = 'Editar projeto!';
      this.actionButtonText = 'Salvar';
    }
  }

  isInvalid(inputName: string, validatorName: string) {
    const formControl: any = this.projectCreateEditForm.get(inputName);

    if (formControl.errors !== null) {
      return formControl.errors[validatorName] && formControl.touched;
    }
  }
}
