import { CustomerList } from "./customers/customersList"
import { EmployeeList } from "./employeeList/employeeList"
import { TicketList } from "./serviceTickets/serviceTickets"
export const Repairs = () => {

    return (
        <>
          <h1>Honey Rae's Repair Shop</h1>
         <div>
          <h2>Customer List</h2>
          <CustomerList/>
         </div>
         <h2>Employees</h2>
          <EmployeeList/>
          <div>
            <h2>Service Tickets</h2>
            <TicketList/>
          </div>
         </>
    )
}
