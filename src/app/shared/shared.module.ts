import {NgModule} from '@angular/core';
import {MyTable} from "./table/my-table";
import {MyDropdown} from "./dropdown/my-dropdown";
import {ReceiveWireModal} from "./modal/receive-wire.modal";

@NgModule({
  imports: [
    MyDropdown,
    MyTable,
    ReceiveWireModal
  ],
  declarations: [],
  exports: [
    MyDropdown,
    MyTable,
    ReceiveWireModal
  ]
})
export class SharedModule {
}
