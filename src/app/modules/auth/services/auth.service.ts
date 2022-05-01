import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public sendCredentials(email: string, password: string): void {
    console.log('💥', email, password);
  }
}
