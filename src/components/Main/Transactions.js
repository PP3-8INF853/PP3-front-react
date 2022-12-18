import "../../Sylesheets/Transactions.css"
import TransactionButtonSwitch from "./TransactionButtonSwitch";

function Transactions(){
    return(
        <div className={"transactions-menu"}>
            <div className={"hist-text"}>Historique des transactions</div>
            <div className={"hist-buttons"}>
                <TransactionButtonSwitch text={"Virements"}/>
                <TransactionButtonSwitch text={"Factures"}/>
            </div>
        </div>
    );
}

export default Transactions;