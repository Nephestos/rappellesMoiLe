import { Component, TemplateRef, inject } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from 'src/app/card/card.component';

@Component({
  selector: 'app-pop-up-card',
  standalone: true,
  imports: [],
  templateUrl: './pop-up-card.component.html',
  styleUrl: './pop-up-card.component.scss'
})
export class PopUpCardComponent {
    private container!: <CardComponent>() => {};

    private createCard(): void {
      //this.container.createComponent(CardComponent)
    }
    private modalService = inject(NgbModal);
	  closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content
		);
	}
}
