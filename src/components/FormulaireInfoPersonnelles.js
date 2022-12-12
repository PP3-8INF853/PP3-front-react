import React, { Component } from "react";


export class FormulaireInfoPersonnelles extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    render(){
        const {values, handleChange }=this.props;
       
        return(
                <React.Fragment>
                    <form  className='formCreation'>
                        <label htmlFor="fname">First name:</label><br></br>
                        <input type="text" onChange={handleChange('firstname')} id="Fname"></input>
                        <br></br>
                        <label htmlFor="Sname">Last name:</label><br></br>
                        <input type="text" onChange={handleChange('lastname')} id="Sname"></input><br></br>
                        <button onClick={this.continue} id="butoncontinue1" type="button" className="bouton-validation">continue</button>
                    </form>
                </React.Fragment>
        )
    }
}

export default FormulaireInfoPersonnelles;