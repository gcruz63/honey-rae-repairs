import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom" 

export const EmployeeList = () =>{
        //declares state variables
        const [employees, setEmployees] = useState([])
        const [specialty, setSpecialty] = useState("")
        const history = useHistory()
    // a function that takes 2 arguments, 
    // to run code when any state changes just like event listener
        useEffect(
            () => {
                // used to get data from api and pull it into application state
                fetch("http://localhost:8088/employees")
                //coverts json coded string into javascript
                    .then(res => res.json())
                    //used to invoke the value of employee
                    .then(
                        (employeesArray) => { 
                    // invoking set employees to get the state you want it to be 
                    // witch is the state you got from the api
                            setEmployees(employeesArray)
                        }
                    )
            },
            // when array is empty it will only render one time
            []
        )
        
        useEffect(
            () => {
               setSpecialty(employees.map((employee)=> employee.specialty).join(",")) 
            }, [employees]
        )
    
        return (
            <>
                <div>
                    <button onClick={() => history.push("/employees/create")}>Hire Employee</button>
                </div>
                <div>specialty: {specialty}</div>
                {
                //interpolation in jsx , this allows us to put js in here
                // iterates employees and converts them from objects to html using jsx
                //conversion from objects to array use .map array method
                     employees.map(
                    //function to get new array,
                    //then use a parameter to to capture each individual object as it iterates "employee obj"
    
                     (employeeObject) => {
                        return <p key={`employee--${employeeObject.id}`}>{employeeObject.name}: {employeeObject.specialty}</p>
                        }
                      )
                 }
           </>
        )
 }