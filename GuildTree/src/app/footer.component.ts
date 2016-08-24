import { Component , Inject, HostListener  } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'footer-root',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.css'],
  })
  
export class FooterComponent {
    
    public pxShow:any;
    public _window:Window;
    public attribute:string;

    constructor( @Inject('Window') window: Window){
        this.pxShow = 300;
        this._window=window;
    }
    
    @HostListener('window:scroll', ['$event'])
    track(event) {
        
        if(this._window.pageYOffset >this.pxShow){
            this.attribute="block";
        }
        else {
            this.attribute="none";
        }
    }
    
}