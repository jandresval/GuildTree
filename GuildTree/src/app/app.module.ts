import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';


import { AppComponent }     from './app.component';
import { HeaderComponent }  from './header.component';
import { BodyComponent }    from './body.component';
import { BodyInfoComponent }from './bodyinfo.component';
import { FooterComponent }  from './footer.component';



@NgModule({
  imports: [ BrowserModule],
  declarations: [ AppComponent ,
                  HeaderComponent,
                  BodyComponent,
                  BodyInfoComponent,
                  FooterComponent],
  bootstrap:    [ AppComponent ],
  providers: [
              { provide: 'Window',  useValue: window }
            ]
})
export class AppModule { }