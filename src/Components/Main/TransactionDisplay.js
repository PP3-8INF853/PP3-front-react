import "../../Sylesheets/TransactionDisplay.css"

function TransactionDisplay(props){
    const date = props.date;
    return(
      <div className={"transaction-display"}>
            <div className={"td-banner"}>
                {date ?? "date"}
            </div>
          <div className={"td-list"}>
              <ul>

              </ul>
          </div>
      </div>
    );
}

export default TransactionDisplay;