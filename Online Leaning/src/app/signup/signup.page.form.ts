import { FormBuilder, FormGroup, Validators} from "@angular/forms";
export class SignupPageForm {
private formBuilder: FormBuilder;
constructor (formBuilder: FormBuilder){
this.formBuilder = formBuilder;}
createForm(): FormGroup {
return this.formBuilder.group({
     email:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.email])],
     username:['',Validators.compose([Validators.required,Validators.minLength(3)])],
     password: ['', [
        Validators.required, 
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
    ]] ,
    tel:['',Validators.compose([Validators.required,Validators.minLength(8)])],
    age:['',Validators.compose([Validators.required,Validators.minLength(2)])],
    repassword: ['', [
        Validators.required, 
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
    ]] ,

});}
}