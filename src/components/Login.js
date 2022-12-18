import React, {Component, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export class Login extends Component{
    state= {
        username:'',
        password:''
    }

    handleChange = input => e =>{
        this.setState({[input]: e.target.value});
    }
    
    
    handleSubmit = async (event) => {
       // console.log(this.state.login);
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        const user = {
            "username": this.state.username,
            "password": this.state.password
          };
      
        axios.post(`http://localhost:4444/authentication-service/customers/login`, user)
          .then(res => {
            console.log(res);
            console.log(res.data);
           // if (res.data.accessToken) {
             //   localStorage.setItem("user", JSON.stringify(res.data));
              // useNavigate('/compte');
              //} // pour l'authentifcation à l'aide d'un token, il faut aussi mettre la page d'accueil du compte en restricted
          })
      }

    render(){
        //const { username, password }= this.state;

        return (
            <React.Fragment>
                <form className='formCreation'>
                    <label htmlFor="fname" className='formNomField'>login:</label><br></br>
                    <input type="text" onChange={this.handleChange('username')} id="login"></input>
                    <br></br>
                    <label htmlFor="mdp" className='formNomField' >mdp :</label><br></br>
                    <input type="password" onChange={this.handleChange('password')} id="mdp"></input><br></br>
                    <button onClick={this.handleSubmit} id="butoncontinue1"  className="bouton-validation" type="submit" >connexion</button>
                </form>
            </React.Fragment>
    )
    }
             
    
       
    
}

export default Login;
