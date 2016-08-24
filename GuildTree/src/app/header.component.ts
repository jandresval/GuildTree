import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'header-root',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css'],
  })
  
export class HeaderComponent {
    public attribute:string;
    private _display:boolean;

    contructor(){ 
        this._display=false;
        this.attribute="'display: none'";
    }
    
    toggleMenu(){
        this._display = !this._display;
        this.attribute = this._display ? "block" : "none";
    }

}