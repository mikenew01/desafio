import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  storage(key: 'TOKEN', value: string): void {
    localStorage.setItem(key, value);
  }

  getItem(key: 'TOKEN'): string {
    return localStorage.getItem(key);
  }

  removeItem(key: 'TOKEN'): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
