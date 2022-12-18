import "../../Sylesheets/TransactionButtonSwitch.css"

function TransactionButtonSwitch(props){
    const text= props.text;
    return(
        <div className={"transaction-button-switch"}>
            <button className={"tbs-button"}>
                {text ?? "sample text"}
            </button>

        </div>
    );
}

export default TransactionButtonSwitch;