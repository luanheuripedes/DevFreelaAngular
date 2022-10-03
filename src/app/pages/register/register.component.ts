// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { msg } from 'src/app/shared/utils/msg';
import { RegisterService } from './services/register.service';
import { IUser } from './interfaces/IUser';
import { Router } from '@angular/router';

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
  constructor(private fb: FormBuilder, private registerService: RegisterService, private router:Router) { }

  

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
      let payload: IUser = this.registerForm.value;

      this.registerService.postUser(payload).subscribe(
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

                      this.router.navigateByUrl('list');
                    }
                  }),(error) =>{
                    //   //400
                    //   //403
                    //   //500
                    //   //posso criar uma classe so pra tratar os errors
                    console.log(error.status);
                  }
                }
               )
      }else{
        this.registerForm.markAllAsTouched();
      }
    
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
