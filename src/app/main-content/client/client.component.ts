import { Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent { 
 
  @ViewChild('open') openBtn!: ElementRef;
  @ViewChild('container') container!: ElementRef;
  @ViewChild('close') closeBtn!: ElementRef;
  @ViewChild('modal') modal!: ElementRef;
  @ViewChild('cancel') cancel!: ElementRef;
  @ViewChild('update') update!: ElementRef;

  isNew: boolean = true;
  isNewBtn: boolean = true;

  openModal(isNew: boolean, isNewBtn: boolean) {
    this.isNew = isNew;
    this.isNewBtn = isNewBtn;
    this.container.nativeElement.classList.add('active-filter');
    this.modal.nativeElement.classList.add('active-modal');
  }

  closeModal() {
    this.container.nativeElement.classList.remove('active-filter');
    this.modal.nativeElement.classList.remove('active-modal');
    this.cancel.nativeElement.classList.remove('active-modal');
  }
  // ----------------------para que aparsca solo crear o actualizar-.---------------------
  
}
