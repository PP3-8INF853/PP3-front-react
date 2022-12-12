import React from 'react';
import {useNavigate} from 'react-router-dom';



function CreationCompteSucces()  {
    
  
    const navigate = useNavigate();
       
        return(
                <React.Fragment>
                    <div   className='formCreation'>
                        <p >Succès <br></br></p>
                        <button type="button"  onClick={()=>navigate('/')} className="bouton-validation"> Accueil</button>
                    </div>
                </React.Fragment>
        )
    
}

export default CreationCompteSucces;