import '../../Sylesheets/LeftMenu.css'
import LeftButton from "./LeftButton";
import NavButton from "./NavButton";
import credit from "../../assets/credit-card.png"
import home from "../../assets/home.png"
import gear from "../../assets/settings.png"
import gift from "../../assets/gift.png"

function LeftMenu(){
    return(
        <div className='left-menu'>
            <div className='send-menu'>
                <LeftButton text="Envoyer de l'Argent"/>
                <LeftButton text={"Envoyer une facture"}/>

            </div>
            <div className='navigate'>

                <NavButton text={"Accueil"} selected={true} src={home}/>
                <NavButton text={"Carte"} src={credit}/>
                <NavButton text={"Parrainage"} src={gift}/>
                <NavButton text={"Gérer"} src={gear}/>

            </div>

        </div>
    );
}

export default LeftMenu;