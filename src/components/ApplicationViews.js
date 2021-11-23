import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/customersList"
import { EmployeeList } from "./employeeList/employeeList"
import { TicketList } from "./serviceTickets/TicketsList"
import { TicketForm } from "./serviceTickets/ticketForm"
import { EmployeeForm } from "./employeeList/employeeForm"
export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route path="/employees/create">
                <EmployeeForm />
            </Route>
            <Route exact path="/tickets">
                <TicketList />
            </Route>
            <Route exact path="/tickets/create">
                <TicketForm />
            </Route>
        </>
    )
}
