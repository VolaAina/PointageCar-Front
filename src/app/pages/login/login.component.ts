import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'app/services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
    public router: Router;
    public form: FormGroup;
    public login: AbstractControl;
    public password: AbstractControl;
    returnUrl: string;
    error: '';
    loading = false;

    constructor(router: Router, fb: FormBuilder, private authenticationService: AuthenticationService) {
        this.router = router;
        this.form = fb.group({
            'login': ['', Validators.compose([Validators.required, CustomValidators.login])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });

        this.login = this.form.controls['login'];
        this.password = this.form.controls['password'];
    }

    public onSubmit(values: Object): void {
        if (this.form.valid) {
            //    this.router.navigate(['pages/dashboard']);
            this.authenticationService.login(this.login.value, this.password.value)
                .pipe(first())
                .subscribe(
                    data => {
                        this.authenticationService.setUserId(this.login.value, this.password.value);
                        //this.router.navigate([this.returnUrl]);
                        this.router.navigate(['pages/dashboard']);
                    },
                    error => {
                        this.error = error;
                        this.loading = false;
                    });
        }
    }

    ngAfterViewInit() {
        document.getElementById('preloader').classList.add('hide');
    }

}