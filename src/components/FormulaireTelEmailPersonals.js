import React, { Component } from "react";


export class FormulaireTelEmailPersonnal extends Component {
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
                        <label htmlFor="email">email</label><br></br>
                        <input type="email" onChange={handleChange('email')} id="email"></input>
                        <br></br>
                        <label htmlFor="Sname">telephone</label><br></br>
                        <input type="text" onChange={handleChange('tel')} id="tel"></input><br></br>
                        <table> <tr><td><button onClick={this.back} className='bouton-retour' type="button" >back</button></td><td><button  onClick={this.continue}   type="submit"  className="bouton-validation">valider</button></td></tr></table>
                    </form>
                </React.Fragment>
        )
    }
}

export default  FormulaireTelEmailPersonnal;