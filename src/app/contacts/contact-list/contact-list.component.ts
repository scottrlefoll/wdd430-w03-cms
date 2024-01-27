import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactItemComponent } from '../contact-item/contact-item.component';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  contacts: Contact[] = [
    new Contact("1", "R. Kent Jackson", "jackson@byui.edu", "208-496-3771", "../../../assets/images/jacksonk.jpg", null),
    new Contact("2", "Rex Barzee", "barzeer@byui.edu", "208-496-3768", "../../../assets/images/barzeer.jpg", null)
  ];

  @Output() selectedContactEvent = new EventEmitter<Contact>;

  onSelected(contact: Contact) {
    this.selectedContactEvent.emit(contact);
  }
}

