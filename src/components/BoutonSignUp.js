
import {useNavigate} from 'react-router-dom';


function BoutonSignUp()  {

  
    const navigate = useNavigate();
     
        return (
          <div >
           <button type="button"  onClick={()=>navigate('/signup')} className="bouton-connection"> Création de compte</button>
          
          </div>
        );
        
}


export default BoutonSignUp;

