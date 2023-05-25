import {Component, Input} from "@angular/core";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {ModalDismissReasons, NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Virement} from "../../modals/Virement";
import {TransactionService} from "../../services/transaction.service";

@Component({
  selector: 'my-modal',
  templateUrl: './receive-wire.modal.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    NgForOf,
    NgIf
  ]
})
export class ReceiveWireModal{
  @Input() virement: Virement;
  response: FormControl = new FormControl();

  closeResult = '';

  constructor(private modalService: NgbModal,
              public activeModal: NgbActiveModal,
              private transactionService: TransactionService) {}

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  accept(){
    if (this.response.value !== this.virement.reponse)
      alert("Reponse incorrect")
    else {
      this.transactionService.acceptWireTransfer(this.virement.id, {response: this.response.value,
        idCompte: this.virement.idCompteRecepteur}).subscribe( {
        next: (message) => {
          alert("Virement reçu avec succès !")
          window.location.reload();
        },
        error: (err) => {
          alert("Un problème est survenu")
          console.log(err);
        }
        }
        )
    }

    this.activeModal.close();
  }

  refuser() {
    this.activeModal.close();
  }
}
