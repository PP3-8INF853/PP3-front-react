import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AsyncPipe, DatePipe, DecimalPipe, NgFor, NgForOf, NgIf} from '@angular/common';
import { Router } from '@angular/router';
import {Virement} from "../../modals/Virement";
import {DataPageGenericType} from "../../modals/DataPageGenericType";
import {VirementSendDAO} from "../../modals/VirementSendDAO";
import { CustomerService } from 'src/app/services/customer.service';
import {Customer} from "../../modals/Customer";

@Component({
  selector: 'my-table',
  standalone: true,
  imports: [NgFor, DecimalPipe, NgIf, NgForOf, AsyncPipe, DatePipe],
  templateUrl: './my-table.html',
})
export class MyTable<T extends Virement | VirementSendDAO> implements OnChanges, OnInit {
  @Input() data: DataPageGenericType<T>[];
  type: string;
  customerSet: Customer[] = [];

  constructor(private router: Router, public customerService: CustomerService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.currentValue as T[] && this.data.length > 0) {
      if ((this.data[0] as VirementSendDAO).destinataireCustomer !== undefined) {
        this.type = 'VirementSendDAO';
        this.getCustomerInfos();
      }
      else if ((this.data[0] as Virement).dateEnvoi !== undefined) {
        this.type = 'Virement';
      }
      console.log(this.type);
      console.log(this.data)
    }
  }

  convertIntoDateString(date: number[] | undefined): string{
    if (date !== undefined || date)
      return date[0] + '-' + date[1] + '-' + date[2] + ' ' + date[3] + ':' + date[4] + ':' +date[5]
    return "";
  }

  getCustomerInfos(){
    (this.data as VirementSendDAO[]).forEach( async donnee => {
      this.customerService.findById((donnee.destinataireCustomer as string)).subscribe((value) => {
        this.customerSet.push(value);
        console.log(value)
      });
    })
  }
}
