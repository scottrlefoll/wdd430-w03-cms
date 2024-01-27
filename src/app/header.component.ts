import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cms-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //  navigation toggles
  isUserDropdownOpen: boolean = false;
  isNavbarCollapsed: boolean = true;

  toggleUserDropdown() {
    this.isUserDropdownOpen = !this.isUserDropdownOpen;
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  // selected tab feature

  //  create a new event emitter
  @Output() selectedFeatureEvent = new EventEmitter<string>();

  //  create method reponsible for emittingor firing the selectedFeatureEvent.
  onSelected(selectedEvent: string) {
    this.selectedFeatureEvent.emit(selectedEvent);
  }
}
