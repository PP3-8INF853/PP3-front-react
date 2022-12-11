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
                    <form>
                        <label for="login">login:</label><br></br>
                        <input type="text" onChange={handleChange('login')} id="login"></input>
                        <br></br>
                        <label for="password">password</label><br></br>
                        <input type="password" onChange={handleChange('mdp')} id="mdp"></input><br></br>
                        <button onClick={this.back} id="butonback3" type="button" >back</button><button onClick={this.continue} id="butoncontinue3" type="button" >continue</button>
                    </form>
                </React.Fragment>
        )
    }
}

export default CreationCompteFormLogin;