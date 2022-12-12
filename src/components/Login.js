import React, {Component} from 'react';
import axios from 'axios';

export class Login extends Component{
    state= {
        login:'',
        mdp: ''
    }

    handleChange = input => e =>{
        this.setState({[input]: e.target.value});
    }
    
    
    handleSubmit = async (event) => {
        console.log(this.state.login);
        event.preventDefault();
        const {login }= this.state.login;
        const {mdp }= this.state.mdp;
        axios.post(`http://localhost:3000/apiConnexionBDD`, { login, mdp })
          .then(res => {
            console.log(res);
            console.log(res.data);
         /*   if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
              }*/ // pour l'authentifcation à l'aide d'un token, il faut aussi mettre la page d'accueil du compte en restricted
          })
      }

    render(){
        const { login,mdp }= this.state;
        const values= {login,mdp }
        return (
            <React.Fragment>
                <form className='formCreation'>
                    <label htmlFor="fname" className='formNomField'>login:</label><br></br>
                    <input type="text" onChange={this.handleChange('login')} id="login"></input>
                    <br></br>
                    <label htmlFor="mdp" className='formNomField' >mdp :</label><br></br>
                    <input type="password" onChange={this.handleChange('mdp')} id="mdp"></input><br></br>
                    <button onClick={this.handleSubmit} id="butoncontinue1"  className="bouton-validation" type="submit" >connexion</button>
                </form>
            </React.Fragment>
    )
    }
             
    
       
    
}

export default Login;
