import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  login(username: string, password: string): boolean {
    // Simulated check (replace this with real API call later)
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('token', 'userLoggedIn');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
