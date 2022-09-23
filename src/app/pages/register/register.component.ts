// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { msg } from 'src/app/shared/utils/msg';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
  constructor(private fb: FormBuilder, private http:HttpClient) { }

  

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
      let payload = this.registerForm.value;

      this.http.post(environment.apiUrl + 'users', payload)
               .subscribe(
                (response) => {
                  Swal.fire({
                    title:'Bom Trabalho!',
                    text: "Cadastrado com sucesso !",
                    icon: "success",
                    confirmButtonText: 'Ok!'
                  }).then((result) => {
                    if(result.isConfirmed){
                      localStorage.setItem("userName", response.fullName);
                      localStorage.setItem("role", response.role === "dev"?"Desenvolvedor":"Cliente");
                      localStorage.setItem("idClient",response.id)
                    }
                  }),(error) =>{
                    console.log(error);
                  }
                }
               )
                
              

      }else{
        this.registerForm.markAllAsTouched();
      }
    

        //  ,(error) => {
                  //   //400
                  //   //403
                  //   //500
                  //   //posso criar uma classe so pra tratar os errors
                  //   cosnole.log(error.status);

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
            // Swal.fire(
            //     'Sucesso!',
            //     'Cadastrado com Sucesso!',
            //     'success'
            //   );
            
            // localStorage.setItem("userName", response.fullName);
            // localStorage.setItem("role", response.role === "dev"?"Desenvolvedor":"Cliente");
            // localStorage.setItem("idClient",response.id)

            // //redirect para Listagem
            // window.location.href = "list.html";
          // })
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
