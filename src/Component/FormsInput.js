import React from 'react'

export default function FormsInput(props) {
    return (
        <div>
  
    <h2>Entered information:</h2>
    <p>Your name: {props.firstName} {props.lastName}</p>
    <p>Your age: {props.age}</p>
    <p>Your gender: {props.gender}</p>
    <p>Your destination: {props.destination}</p>
    <div>
        Your dietary restrictions: 
        <ul> 
        <li> Vegan:{props.dietaryRestrictions.isVegan? "Yes":"No"} </li>
        <li>     
        Kosher:{props.dietaryRestrictions.isKosher? "Yes":"No"}
        </li>
        <li>  
        Lactose Free :{props.dietaryRestrictions.isLactoseFree? "Yes":"No"}
        </li>
        </ul>
    </div>

</div>
     
    )
}
