import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public user : User;
  private isUserLogin;
  
  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  login(login: string, password: string) {
      return this.http.post<any>(`${environment.apiUrl}/auth/signin`, { login, password })
          .pipe(map(user => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
              this.user=user;
              return user;
          }))
  }

  setUserId(id: any,type_id:any) {
      this.isUserLogin = id;
      console.log("this.isUserLogin ************1er" + this.isUserLogin);
     // this.newCribSubect.next(this.userIdActuel);
    }
  
     
  getUser(){
      // return this.isUserLogin;
     
      console.log(localStorage.getItem('currentUser') )
      return this.currentUserSubject.getValue();
     }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }
}
