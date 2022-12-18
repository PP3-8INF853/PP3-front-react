import "../../Sylesheets/History.css"
import TransactionDisplay from "./TransactionDisplay";

function History(props){
    const date = props.date;
    return(
        <div className={"history"}>
            <TransactionDisplay date={date}/>
        </div>
    );
}

export default History;