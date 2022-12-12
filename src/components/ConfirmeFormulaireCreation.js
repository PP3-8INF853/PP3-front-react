import React, {Component} from 'react';
import axios from 'axios';
import { TableRow } from '@mui/material';

export class ConfirmeFormualaireCreation extends Component {

    continue = async (event) => {
            
        event.preventDefault();
        const {values:{firstname, lastname, email, tel,login,mdp} }=this.props;
        this.props.nextStep();
        axios.post(`http://localhost:3000/apiConnexionBDD`, { firstname,lastname,email,tel,login, mdp })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
       
      }
    
    
   back  = e =>{
        e.preventDefault();
        this.props.prevStep();
    }


    render(){
        const {values:{firstname, lastname, email, tel,login,mdp} }=this.props;
       
        return(
                <React.Fragment>
                    <form className='formCreation' id='ConfirmationCreation' >
                    <ul>
                        <li>first Name:<br></br>{firstname}</li>
                        <li>second name:<br></br>{lastname}</li>
                        <li>email:<br></br>{email}</li>
                        <li>tel:<br></br>{tel}</li>
                        <li>login:<br></br>{login}</li>
                        <li>password:<br></br>{mdp}</li>

                    </ul>  
                 <table> <tr><td><button onClick={this.back} id="butonback4" className='bouton-retour' type="button" >back</button></td><td><button  onClick={this.continue}  id="submitCreation" type="submit"  className="bouton-validation">valider</button></td></tr></table>
                    </form>
                </React.Fragment>
        )
    }
}

export default  ConfirmeFormualaireCreation;