import React from 'react'

export default function FormComponent(props) {
    return (
        <div>
                <main>
       
       <form>
         <input type="text" 
         name="firstName" 
         value={props.firstName}
         placeholder="First Name"
         onChange={props.handleChange}         
         /> <br />
 
       <input type="text" 
         name="lastName" 
         value={props.lastName}
         placeholder="Last Name"
         onChange={props.handleChange}  
             /> <br />
              
       <input type="number" 
         name="age" 
         value={props.age}
         placeholder="Age"
         onChange={props.handleChange}         
         /> <br />
         
       <input type="radio" 
         name="gender" 
         checked={props.gender === "male"}
         value="male"
         onChange={props.handleChange}         
         />Male <br />
       <input type="radio" 
         name="gender" 
         checked={props.gender === "female"}
         value="female"
         onChange={props.handleChange}         
         />Female <br />
 
 <label>
           Pick your favorite flavor:
         <select 
         name="destination"
         value ={props.destination}
         onChange={props.handleChange}
         >
                         <option value="">Please Choose a destination</option>
                         <option value="Germany">Germany</option>
                         <option value="Norway">Norway</option>
                         <option value="North pole">North Pole</option>
                         <option value="South pole">South Pole</option>
         </select>
         </label><br />
 

 
         <input type="checkbox" 
         name="isVegan" 
         checked={props.dietaryRestrictions.isVegan}
         onChange={props.handleChange}         
         />isVegan? 
         
         <br />
 
         <input type="checkbox" 
         name="isKosher" 
         checked={props.dietaryRestrictions.isKosher}
         onChange={props.handleChange}         
         />isKosher?
         <br />
 
         <input type="checkbox" 
         name="isLactoseFree" 
         checked={props.dietaryRestrictions.isLactoseFree}
         onChange={props.handleChange}         
         />isLactoseFree? <br />
 
 
 
 
         <br />
         <button>Submit</button>
       </form>

 
       </main>
        </div>
    )
}
