import React from 'react'
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Divider,
    Grid
} from "@mui/material";
import { faReceipt, faUser, faBoxes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "reactstrap";


const SettlementDetailModal = ({ setUserModalOpen, userModalOpen, settlement }) => {
    const handleClose = () => setUserModalOpen(false);
    // console.log(transaction)

    return (
        <Dialog open={userModalOpen} onClose={handleClose} sx={{ maxWidth: "100%" }}>
            <DialogTitle
                sx={{
                    padding: "10px 25px",
                    backgroundColor: "#004982",
                    color: "white",
                    marginBottom: "15px",
                }}
            >
                <FontAwesomeIcon icon={faBoxes} className="me-3" /> {settlement.cname}'s Settlement
            </DialogTitle>
            <DialogContent>
                <Table striped bordered style={{ width: "100%" }} className="w-100">
                    <tbody>
                        <tr>
                            <td>
                                Case No.
                            </td>
                            <td>
                                {settlement.caseno}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Vessel / Customer Name
                            </td>
                            <td>
                                {settlement.cname}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Name of Employee
                            </td>
                            <td>
                                {settlement.empname}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Location
                            </td>
                            <td>
                                {settlement.loc}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Date of Journy Commenced
                            </td>
                            <td>
                                {settlement.datejcompleted}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Date of Journy Completed
                            </td>
                            <td>
                                {settlement.datejcommenced}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Amount
                            </td>
                            <td>
                                {settlement.amount}
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Grid className="my-1" container spacing={2} columnSpacing={2}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Table striped bordered style={{ width: "100%" }} className="w-100">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>Bill Attached</th>
                                    <th>Expance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {settlement.settlement?settlement.settlement.map((settlement, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{settlement.date}</td>
                                            <td>{settlement.description}</td>
                                            <td>{settlement.bill}</td>
                                            <td>{settlement.expance}</td>
                                        </tr>
                                    );
                                }):null}
                            </tbody>
                        </Table>
                    </Grid>
                </Grid>
            </DialogContent>
            <Divider sx={{ bgcolor: "black" }} />
            <DialogActions>
                <Button variant="contained" onClick={handleClose}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default SettlementDetailModal