import React, { useEffect, useState } from "react"

export const CustomerList = () =>{
        //declares state variables
        const [customers, setCustomers] = useState([])
        const [totalCustomerMessage, updateMessage] = useState([])

    // a function that takes 2 arguments, 
    // to run code when any state changes just like event listener
        useEffect(
            () => {
                // displays the effect change
                console.log("Initial useEffect")
                // used to get data from api and pull it into application state
                fetch("http://localhost:8088/customers")
                //coverts json coded string into javascript
                    .then(res => res.json())
                    //used to invoke the value of customer
                    .then(
                        (customersArray) => { 
                    // invoking set customers to get the state you want it to be 
                    // witch is the state you got from the api
                            setCustomers(customersArray)
                        }
                    )
            },
            // when array is empty it will only render one time
            []
        )
        useEffect(
            () => {
                //displays state change in dev console
                console.log("Customers state changed", customers)
                // displays a message  telling you how many customers you have
                if(customers.length === 1){
                    updateMessage("You have 1 customer")
                }
                else{
                    updateMessage(`You have ${customers.length} customers`)
                }
            },
            //an array of what it should run
            [customers]
        )
    
        return (
            <>
            {/*interpolation in jsx , this allows us to put js in here*/}
                <div>{totalCustomerMessage}</div>
                {
                // iterates customers and converts them from objects to html using jsx
                //conversion from objects to array use .map array method
                //displays 5 customers
                     customers.slice(0, 5).map(
                    //function to get new array,
                    //then use a parameter to to capture each individual object as it iterates "customer obj"
    
                     (customerObject) => {
                        return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                        }
                      )
                 }
           </>
        )
 }

