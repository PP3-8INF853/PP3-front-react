import "../../Sylesheets/NavButton.css"

function NavButton(props){
    const selected = props.selected;
    const target = props.target;
    const text = props.text;
    const src = props.src;
    return(
        <div className={selected ? "nav-button-selected" : "nav-button"}>
                <img src={src} alt={"icon"} className={"icon-left"}/>
            <form action={target} className={"nav-button-form"}>
                <input type='submit' value={text} className={selected ? "nav-button-input-selected" : 'nav-button-input'}/>
            </form>
        </div>
    );
}

export default NavButton;