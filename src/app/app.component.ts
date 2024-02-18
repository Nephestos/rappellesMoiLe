import { CUSTOM_ELEMENTS_SCHEMA, Component, NgModule, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CardComponent } from './card/card.component';
import { AppModule } from './app.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopUpCardComponent } from './popUp/pop-up-card/pop-up-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('container', {read: ViewContainerRef} ) 
  container!: ViewContainerRef;
  title = 'angular';
  
  constructor(private modalService: NgbModal) {}

  addCard(): void {
    console.log("ok")
    //const modalRef = this.modalService.open(component)
    //this.container.createComponent(CardComponent)

  }

  open(content: TemplateRef<any>) {
		this.modalService.open(content
		);
	}
}
