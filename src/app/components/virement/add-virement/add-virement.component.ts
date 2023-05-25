import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TransactionService} from "../../../services/transaction.service";
import {CustomerService} from "../../../services/customer.service";
import { Customer } from 'src/app/modals/Customer';
import {VirementSendDTO} from "../../../modals/VirementSendDTO";

@Component({
  selector: 'app-add-virement',
  templateUrl: './add-virement.component.html',
  styleUrls: ['./add-virement.component.css']
})
export class AddVirementComponent implements OnInit {
  virementForm: FormGroup;
  customers: Customer[];
  destinataireCustomer: Customer;
  emmeteurCustomer: Customer;
  constructor(private formBuilder: FormBuilder,
              private transactionService: TransactionService,
              private customerService: CustomerService) { }

  ngOnInit(): void {
    this.virementForm = this.formBuilder.group({
      montant: new FormControl("", [Validators.required]),
      destinataire: new FormControl("", [Validators.required]),
      question: new FormControl("", [Validators.required]),
      reponse: new FormControl("", [Validators.required]),
    });

    this.customerService.findAllCustomers(true).subscribe(customers => {
      this.customerService.connectedUser.subscribe(customer => {
        if (customer !== undefined){
          console.log(customer)
          this.emmeteurCustomer = customer;
          this.customers = customers.filter(customer => customer.id !== this.emmeteurCustomer.id);
        }
      })
    });

    this.virementForm.controls["destinataire"].valueChanges.subscribe((value) => {
      this.destinataireCustomer = value;
      console.log(this.destinataireCustomer);
    });

  }

  onSubmit($event: MouseEvent) {
    const virementDTO = {
      montant : parseFloat(this.virementForm.get('montant').value),
      question: this.virementForm.get('question').value,
      reponse: this.virementForm.get('reponse').value,
      numCompteRecepteur: this.destinataireCustomer.account.numero,
      numCompteEmetteur: this.emmeteurCustomer.account.numero
    } as VirementSendDTO;

    console.log(virementDTO);

    if (virementDTO.montant <= parseInt(this.emmeteurCustomer.account.solde)){
      this.transactionService.sendMoney(virementDTO).subscribe({
        next: (message: {message: string}) => {
          alert(message.message);
          this.virementForm.reset();
        },
        error: err => {
          alert("Une erreur s'est produite")
          console.log(err)
        }
      });
    } else
      alert("Solde insuffisant pour effectuer le virement")

  }
}
