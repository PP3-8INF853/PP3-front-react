
import {useNavigate} from 'react-router-dom';


function BoutonLogin()  {

  
    const navigate = useNavigate();
     
        return (
          <div >
           <button type="button"  className="bouton-login" onClick={()=>navigate('/login')} > Connexion</button>
          
          </div>
        );
        
}


export default BoutonLogin;
