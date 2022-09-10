import { FormBuilder, FormGroup } from "@angular/forms";
import { SignupPageForm } from"./signup.page.form";
describe('SignupPageForm', () => {
    let signupPageForm: SignupPageForm; let form: FormGroup;

beforeEach(() => {
    signupPageForm = new SignupPageForm(new FormBuilder()); 
 form = signupPageForm.createForm();
})
it('should create login form empty', () =>
{
    const signupPageForm = new SignupPageForm(new FormBuilder()); 
    const form = signupPageForm.createForm();
    expect(form).not.toBeNull(); 
    expect(form.get('email')).not.toBeNull();
    expect(form.get('email').value).toEqual('');
    expect(form.get('email').valid).toBeFalsy();
    expect(form.get('password')).not.toBeNull();
    expect(form.get('password').value).toEqual('');
    expect(form.get('password').valid).toBeFalsy();
})

it('should create login form empty', () =>
{
    const signupPageForm = new SignupPageForm(new FormBuilder()); 
    const form = signupPageForm.createForm();
    expect(form).not.toBeNull(); 
    expect(form.get('email')).not.toBeNull();
    expect(form.get('email').value).toEqual('');
    expect(form.get('email').valid).toBeFalsy();
    expect(form.get('password')).not.toBeNull();
    expect(form.get('password').value).toEqual('');
    expect(form.get('password').valid).toBeFalsy();
})
it('should have email invalid if email is not valid', () => {
    form.get('email').setValue('invalid email');
    expect(form.get('email').valid).toBeFalsy();})

    it('should have email valid if email is valid', () =>{
    form.get('email').setValue('valid@email.com');
    expect(form.get('email').valid).toBeTruthy();
})


    it('should have valid form', () =>{
    form.get('email').setValue('valid@email.com');
    form.get('password').setValue('anyPassword');

    expect(form.valid).toBeTruthy();
})
})