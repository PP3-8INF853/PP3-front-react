import React from 'react';
import {useNavigate} from 'react-router-dom';



function CreationCompteSucces()  {
    
  
    const navigate = useNavigate();
       
        return(
                <React.Fragment>
                    <p>Succès <br></br></p>
                    <button type="button"  onClick={()=>navigate('/')} className="bouton-connection"> Accueil</button>
                </React.Fragment>
        )
    
}

export default CreationCompteSucces;