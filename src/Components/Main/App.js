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
                        <History />
                        <History />
                </div>
        </div>
    </div>

);
}

export default App;
