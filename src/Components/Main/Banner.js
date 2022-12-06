import "../../Sylesheets/Banner.css"

function Banner(props){
    const user = props.user;
    const solde = props.solde;
    return(
        <div className={"banner"}>

            <div className={"banner-hello"}>Bienvenue {user ?? "Marìa"}</div>
            <div className={"banner-quote"}>"If you fail the plan you plan to fail"</div>
            <div className={"banner-solde"}>Solde : {solde ?? "0"}$</div>
        </div>

    );
}

export default Banner;