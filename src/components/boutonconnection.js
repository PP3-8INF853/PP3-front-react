
import {useNavigate} from 'react-router-dom';


function BoutonConnexion()  {

  
    const navigate = useNavigate();
     
        return (
          <div >
           <button type="button"  onClick={()=>navigate('/signup')} className="bouton-connection"> Création de compte</button>
          
          </div>
        );
        
}


export default BoutonConnexion;

