import React, {Component} from 'react';
import FormulaireInfoPersonnelles  from './FormulaireInfoPersonnelles' ;
import FormulaireTelEmailPersonnal from './FormulaireTelEmailPersonals';
import ConfirmeFormualaireCreation  from './ConfirmeFormulaireCreation';
import  CreationCompteFormLogin from './CreationCompteFormLogin';
import CreationCompteSucces from './CreationCompteSucces';

export class FormulaireCreationCompte extends Component{
    state= {
        step : 1,
        firstname:'',
        lastname: '',
        birthday: '',
        email: '',
        tel: '',
        login:'',
        mdp: ''
    }

    // passer à l'étape suivante
    nextStep = () => {
        const { step }= this.state;
        this.setState({
            step: step+1
        });
    }

    prevStep = () => {
        const { step }= this.state;
        this.setState({
            step: step-1
        });
    }

    //Hanndle fiels change
    handleChange = input => e =>{
        this.setState({[input]: e.target.value});
    }
    

    render(){
        const { step } = this.state;
        const { firstname, lastname, birthday,email,tel, login,mdp }= this.state;
        const values= {firstname, lastname, birthday,email,tel, login,mdp }
       
        switch(step){
            case 1:
                return(
                    
                        <FormulaireInfoPersonnelles
                           nextStep={this.nextStep}
                           handleChange={this.handleChange}
                           values={values}
                        />
                    
                )
        
        case 2:
                return(
                   
                    <FormulaireTelEmailPersonnal
                           nextStep={this.nextStep}
                           prevStep={this.prevStep}
                           handleChange={this.handleChange}
                           values={values}
                        />
                    
                )
        case 3:
                return(
                       
                    <CreationCompteFormLogin
                               nextStep={this.nextStep}
                               prevStep={this.prevStep}
                               handleChange={this.handleChange}
                               values={values}
                            />
                        
                    )
        case 4:
            return(
                <ConfirmeFormualaireCreation
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
             />
            )
        case 5:
            return(
                <CreationCompteSucces
             />
            )    
       default :
         return(
            <h1> </h1>
         )     
    }
       
    }
}

export default FormulaireCreationCompte;

//formulaire inspiré de la video https://youtu.be/zT62eVxShsY ded traversy media