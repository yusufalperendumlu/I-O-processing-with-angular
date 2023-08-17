import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

export interface IUser {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: IUser | null = null;

  constructor() {
    this.loadUserFromStorage();
   }

   private loadUserFromStorage() {
    const token = localStorage.getItem('token');
    if (token) {
      this.user = {name: 'Alperen Dumlu', email: 'admin@gmail.com'}
   }
  }

  setUser(user: IUser | null): void {
    this.user = user;
    if (user) {
      localStorage.setItem('token', 'abcdefghijklmnopqrstuvwxyz');
    } else {
      localStorage.removeItem('token');
    }
  }

  getUser(): IUser | null {
    return this.user;
  }

  isLoggedIn(): boolean {
    return !!this.user;
  }

  login({email, password}: any): Observable<IUser> {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      const user: IUser = { name: 'Alperen Dumlu', email: 'admin@gmail.com' };
      this.setUser(user);
      return of(user);
    }
    return throwError('Failed to login');
  }

  logout(): void {
    this.setUser(null);
  }
  }

