import React from "react"
import { Route, Routes } from "react-router-dom"
import { CustomerList } from "./customers/customersList"
import { EmployeeList } from "./employeeList/employeeList"
import { TicketList } from "./serviceTickets/serviceTickets"


export const ApplicationViews = () => {
    return (
        // route is listening for the url change of NavBar
        // and then will render clicked component
        <>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>

                <Route path="/employees">
                    <EmployeeList />
                </Route>

                <Route path="/serviceTickets">
                    <TicketList />
                </Route>
        </>
    )
}
