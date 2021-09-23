import React, { Component } from 'react'
import FormComponent from './FormComponent'
import FormsInput from "./FormsInput"


export default class Form extends Component {
    constructor(){
        super()
        this.state={
          firstName:"",
          lastName:"",
          age: 0,
          gender:"",
          destination:"",
          dietaryRestrictions:{
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
          }
         
        }
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
      }
    
    // Handles the changes on the forms
      handleChange(event){ 
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
        this.setState( prevState=>{
          return {
            dietaryRestrictions:{
              //only [name ] wont work because the iisVegan, isKosher, isLactoseFree is inside an object so we need to use the spread operator and preState
             ...prevState.dietaryRestrictions, [name]: checked 
    
            }
          }
        }
        
        ):
        this.setState({
          
          [name]: value//  this retains the value on each input
        })
    
      }
      // Handles the submit aspect of the form
      handleSubmit(event){
        
    
      }
    

    render() {
        return (
            <div>
               <FormComponent
               handleChange={this.handleChange}
               {...this.state}
               /> 

               <FormsInput {...this.state}  
               />
            </div>
        )
    }
}
