import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/customersList"
import { EmployeeList } from "./employeeList/employeeList"
import { TicketList } from "./serviceTickets/serviceTickets"
export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>
            <Route path="/employees">
                <EmployeeList />
            </Route>
            <Route path="/tickets">
                <TicketList />
            </Route>
        </>
    )
}
