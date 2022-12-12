import React, { Component } from "react";


export class CreationCompteFormLogin extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
   back  = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const {values, handleChange }=this.props;
       
        return(
                <React.Fragment>
                    <form className='formCreation'>
                        <label htmlFor="login">login:</label><br></br>
                        <input type="text" onChange={handleChange('login')} id="login"></input>
                        <br></br>
                        <label htmlFor="password">password</label><br></br>
                        <input type="password" onChange={handleChange('mdp')} id="mdp"></input><br></br>
                        <table> <tr><td><button onClick={this.back}  className='bouton-retour' type="button" >back</button></td><td><button  onClick={this.continue}  id="submitCreation" type="submit"  className="bouton-validation">valider</button></td></tr></table>
                    </form>
                </React.Fragment>
        )
    }
}

export default CreationCompteFormLogin;