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
                    <form>
                        <label for="email">email</label><br></br>
                        <input type="email" onChange={handleChange('email')} id="email"></input>
                        <br></br>
                        <label for="Sname">telephone</label><br></br>
                        <input type="text" onChange={handleChange('tel')} id="tel"></input><br></br>
                        <button onClick={this.back} id="butonback2" type="button" >back</button><button onClick={this.continue} id="butoncontinue1" type="button" >continue</button>
                    </form>
                </React.Fragment>
        )
    }
}

export default  FormulaireTelEmailPersonnal;