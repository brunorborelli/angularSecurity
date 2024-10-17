import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private role: string = ''; // 'admin', 'gerente', 'usuario'

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    // Simulação de login com base em credenciais
    if (username === 'admin' && password === 'admin') {
      this.role = 'admin';
      return true;
    } else if (username === 'gerente' && password === 'gerente') {
      this.role = 'gerente';
      return true;
    } else if (username === 'usuario' && password === 'usuario') {
      this.role = 'usuario';
      return true;
    }
    return false;
  }

  getRole(): string {
    return this.role;
  }

  isLoggedIn(): boolean {
    return this.role !== '';
  }

  logout() {
    this.role = '';
    this.router.navigate(['/login']);
  }
}
