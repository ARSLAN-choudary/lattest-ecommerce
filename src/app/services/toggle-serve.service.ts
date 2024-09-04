import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleServeService {
issidebaropen=true
togglefunc(){
  this.issidebaropen=!this.issidebaropen
}
getSidebarStatus() {
  return this.issidebaropen;
}
  constructor() { }
}
