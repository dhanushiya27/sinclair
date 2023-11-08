import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';
import { DialogService } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-front-contact',
  standalone: true,
  providers: [DialogService],
  imports: [CommonModule,PopupComponent],
  templateUrl: './front-contact.component.html',
  styleUrls: ['./front-contact.component.scss']
})
export class FrontContactComponent {
  isPopupVisible: boolean =false;
  constructor(private dialogService: DialogService) {}

  openPopupDialog() {
    const ref = this.dialogService.open(PopupComponent, {
      header: 'Contact Us', // Dialog header
      width: '70%', // Adjust the width as needed
    });
  }
  fcontact=[
      {title:"Enroll for our various online courses Anywhere from the World",us:"CONTACT US"}
    ]
    openPopup() {
      this.isPopupVisible = true;
    }
}
