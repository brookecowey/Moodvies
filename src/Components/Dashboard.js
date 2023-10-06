import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

 
const Dashboard = (props) => {
    console.log("Hello")
    return (
        <Container maxWidth="lg" className="car-container">
            {/* <h4>Welcome, {props.user.username}</h4> */}
            <div className="flex-container">
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Mood</TableCell>
                        <TableCell>Movie Selected</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {/* {props.user.username((car, idx) => (
                    <TableRow key={car.id}>
                        <TableCell component="th" scope="row">
                            {car.id}
                        </TableCell>
                        <TableCell>{car["name"]}</TableCell>
                        <TableCell>{car["mpg"]}</TableCell>
                        <TableCell>{car["cylinders"]}</TableCell>
                        <TableCell>{car["horsepower"]}</TableCell>
                        <TableCell>
                            <DeleteIcon
                                // add onClick method here
                                onClick={() => props.removeCar(idx)}
                                className="icon text-red" />
                        </TableCell>
                    </TableRow>
                ))} */}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Dashboard