import React, {Component} from 'react';


export class ConfirmeFormualaireCreation extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
   back  = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const {values:{firstname, lastname, email, tel,login,mdp} }=this.props;
       
        return(
                <React.Fragment>
                    <form>
                    <ul>
                        <li>first Name:<br></br>{firstname}</li>
                        <li>second name:<br></br>{lastname}</li>
                        <li>email:<br></br>{email}</li>
                        <li>tel:<br></br>{tel}</li>
                        <li>login:<br></br>{login}</li>
                        <li>password:<br></br>{mdp}</li>

                    </ul>  
                    <button onClick={this.back} id="butonback4" type="button" >back</button><button onClick={this.continue} id="submitCreation" type="submit" >valider</button>
                    </form>
                </React.Fragment>
        )
    }
}

export default  ConfirmeFormualaireCreation;