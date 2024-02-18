import { CUSTOM_ELEMENTS_SCHEMA, Component, NgModule, ViewChild, ViewContainerRef } from '@angular/core';
import { CardComponent } from './card/card.component';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('container', {read: ViewContainerRef} ) 
  container!: ViewContainerRef;
  title = 'angular';
  

  addCard(): void {
    console.log("ok")
    this.container.createComponent(CardComponent)
  }
}
