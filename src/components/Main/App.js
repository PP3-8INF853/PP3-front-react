import '../../Sylesheets/App.css';
import Banner from "./Banner";
import Transactions from "./Transactions";
import History from "./History";

function App() {
return(
    <div className='app'>
        <div className={"solde"}>
                <div className={"banner-title"}>
                        Accueil
                </div>
                        <Banner />
        </div>
        <div className={"transactions"}>
                <Transactions />
                <div className={"histories"}>
                        <History date={"3 Octobre 2022"}/>
                        <History date={"1 Octobre 2022"}/>
                </div>
        </div>
    </div>

);
}

export default App;
