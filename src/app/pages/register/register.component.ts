// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { msg } from 'src/app/shared/utils/msg';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.fb.group({
    role:['', [Validators.required]],
    fullName:['', [Validators.required]],
    birthDate:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  });

  msg = msg;
  constructor(private fb: FormBuilder) { }

  

  ngOnInit(): void {
  }

   checkIfAnyRoleIsChecked(){
    let list = document.getElementsByName("role");
    let counter = 0;
    

    for(let radioButton of list){
        if(radioButton.checked === false){
            counter++;
        }
    }

    return counter !== list.length; //false or true ===()
  }

  cadastrar(){

    if(this.registerForm.valid){
      //(payload)
      console.log(this.registerForm.value);
    }else{
      this.registerForm.markAllAsTouched();
    }
    
    // //Se entrou aqui, é porque o form esta valido!

    // //checa se alguma role foi checada
    // if(this.checkIfAnyRoleIsChecked() === false){
    //   //alert('Você precisa marcar uma role!')
    //     Swal.fire(
    //         'Erro!',
    //         'Você precisa marcar uma role!',
    //         'error'
    //       )
    //     return; //quebra a função
    // }

    // //pegar dados do form - inicia a massa de dados
    // let payLoad = {
    //     role:document.getElementsByName("role")[0].checked === true ? 'dev' : 'cliente',
    //     fullName: document.querySelector("#fullName").value,
    //     birthDate: document.querySelector("#birthDate").value,
    //     email: document.querySelector("#email").value,
    //     password: document.querySelector("#password").value
    // };

    // //Enviar para a API

    // fetch("https://63177ac4ece2736550b47a15.mockapi.io/api/users", {
    //     method: 'POST',
    //     body: JSON.stringify(payLoad),
    //     headers:{
    //         'Content-Type': 'application/json'
    //     }
    // }).then(response => response.json())
    //   .then(response =>{

    //     //alert('Cadastrado com Sucesso!')
    //     Swal.fire(
    //         'Sucesso!',
    //         'Cadastrado com Sucesso!',
    //         'success'
    //       );
        
    //     localStorage.setItem("userName", response.fullName);
    //     localStorage.setItem("role", response.role === "dev"?"Desenvolvedor":"Cliente");
    //     localStorage.setItem("idClient",response.id)

    //     //redirect para Listagem
    //     window.location.href = "list.html";
    //   })
    //   .catch(error =>{
    //     alert('Erro no servidor!');
    //   });

  }

  togleRole(role: 'dev' | 'cliente'){
    this.registerForm.get('role')?.setValue(role);
  }

  isInvalid(inputName:string, validatorName:string):boolean{
    const formControl:any = this.registerForm.get(inputName);

    if(formControl.errors !== null){
      return formControl.errors[validatorName] && formControl.touched;
    }
  }

  

}
