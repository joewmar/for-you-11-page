import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {

  private data: any = {};
  private encryptKey: string = "P@ssw0rd252525";
  private fixedData: any = {
    password: '252525'
  };
  constructor() { }

  set(data: any) {
    this.data = data;
  }

  get() {
    return this.data;
  }
  
  checkPassword(password: string) {
    return password === this.fixedData.password;
  }
}
