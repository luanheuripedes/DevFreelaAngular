import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-create-edit',
  templateUrl: './project-create-edit.component.html',
  styleUrls: ['./project-create-edit.component.scss'],
})
export class ProjectCreateEditComponent implements OnInit {
  //pega o query param apartir do da interrogação e transforma em
  urlSearchParams: any = new URLSearchParams(window.location.search);
  //retorna em formato de objeto a query param que foram recebidas
  params: any = Object.fromEntries(this.urlSearchParams.entries());

  //Type: 'create' || 'edit'
  screenType = this.params.id ? 'edit' : 'create';
  constructor() {}

  ngOnInit(): void {
    this.setScreenTypeTexts();
    this.fillInputs();
  }

  createOrEdit() {
    //Se entrou aqui, é porque o form esta valido!

    //pegar dados do form - inicia a massa de dados
    let payLoad = {
      title: (document.querySelector('#title') as any).value,
      totalCoast: (document.querySelector('#totalCoast') as any).value,
      description: (document.querySelector('#description') as any).value,
      idClient: localStorage.getItem('idClient'),
    };

    //Enviar para a API
    fetch(
      `https://63177ac4ece2736550b47a15.mockapi.io/api/projects${
        this.screenType === 'edit' ? '/' + this.params.id : ''
      }`,
      {
        method: this.screenType === 'edit' ? 'PUT' : 'POST',
        body: JSON.stringify(payLoad),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        if (this.screenType === 'edit') {
          alert('Editado com sucesso!');
        } else {
          alert('Cadastrado com sucesso!');
        }

        window.location.href = 'list.html';
      })
      .catch((error) => {
        alert('Erro no servidor!' + error);
      });
  }

  fillInputs() {
    if (this.screenType === 'edit') {
      fetch(
        `https://63177ac4ece2736550b47a15.mockapi.io/api/projects/${this.params.id}`
      )
        .then((response) => response.json())
        .then((project) => {
          (document.querySelector('#title') as any).value = project.title;
          (document.querySelector('#totalCoast') as any).value =
            project.totalCoast;
          (document.querySelector('#description') as any).value =
            project.description;
        });
    }
  }

  setScreenTypeTexts() {
    //Modo criar
    if (this.screenType == 'create') {
      //DOM é o nosso body (nossas tags) acessamos ele para acessar as nossas tags
      (document.querySelector('#main-title') as any).innerText =
        'Vamos cadastrar seu novo projeto!';
      (document.querySelector('#action-button') as any).innerText = 'Cadastrar';
    }

    //Modo editar
    if (this.screenType == 'edit') {
      //DOM é o nosso body (nossas tags) acessamos ele para acessar as nossas tags
      (document.querySelector('#main-title') as any).innerText =
        'Editar projeto';
      (document.querySelector('#action-button') as any).innerText = 'Salvar';
    }
  }
}
