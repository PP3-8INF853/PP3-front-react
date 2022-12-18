import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'my-dropdown[name]',
  standalone: true,
  imports: [NgbDropdownModule, NgForOf, NgClass, NgIf],
  templateUrl: './my-dropdown.html',
})
export class MyDropdown implements OnInit {

  native: ElementRef;
  @Output() action: EventEmitter<{ event: MouseEvent, route: string }> = new EventEmitter();
  @Input() name: string;
  buttonNames: string[] = [];
  isTypeOfDropdown: boolean = true;

  constructor(public elementRef: ElementRef) {
    this.native = elementRef;
  }
  ngOnInit(): void {
    this.buttonNames = this.native.nativeElement.getAttributeNames()
      .map(attribute => this.native.nativeElement.getAttribute(attribute))
      .filter(attribute => !attribute.includes("_ngcontent") && !attribute.includes(this.name));

    if (this.buttonNames.length === 1) {
      this.isTypeOfDropdown = !this.isTypeOfDropdown;
    }
  }

  emitClickedEvent(event: MouseEvent, dropdownItemName: string): void {
    let route = ""

    if (dropdownItemName.includes("Effectuer") && dropdownItemName.includes("virement"))
      route = "virements/add";
    else if (dropdownItemName.includes("liste") && dropdownItemName.includes("virement"))
      route = "virements/list";

    switch (this.name) {
      case "Accueil":
        route = ""
        break;
    }

    this.action.emit({event, route});
  }
}
