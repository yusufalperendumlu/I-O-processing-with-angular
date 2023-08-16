import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email,password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({name: 'Alperen Dumlu', email: 'admin@gmail.com'})
    }

    //state at -> okunacak

    return throwError(new Error('Failed to login'));
  }

  getUser() {
    return {name: 'Alperen Dumlu', email: 'admin@gmail.<EMAIL>'};
    } 
  }

