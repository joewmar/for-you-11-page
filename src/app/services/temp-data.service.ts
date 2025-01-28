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
//To encrypt input data
  encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data, this.encryptKey).toString();
  }

  //To decrypt input data
  decrypt(data: string) {
    return CryptoJS.AES.decrypt(data, this.encryptKey).toString(CryptoJS.enc.Utf8);
  }
}
