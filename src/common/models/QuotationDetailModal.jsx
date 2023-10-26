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


const QuotationDetailModal = ({ setUserModalOpen, userModalOpen, quotation }) => {
    const handleClose = () => setUserModalOpen(false);
    // console.log(transaction)

    return (
        <Dialog open={userModalOpen} onClose={handleClose} sx={{maxWidth:"100%"}}>
            <DialogTitle
                sx={{
                    padding: "10px 25px",
                    backgroundColor: "#004982",
                    color: "white",
                    marginBottom: "15px",
                }}
            >
                <FontAwesomeIcon icon={faBoxes} className="me-3" /> {quotation.vname}'s Quotation
            </DialogTitle>
            <DialogContent sx={{maxWidth:"100%"}}>
                <Table striped bordered style={{ width: "100%" }} className="w-100">
                    <tbody>
                        <tr>
                            <td>
                                Quotaion No.
                            </td>
                            <td>
                                {quotation.qno}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Date
                            </td>
                            <td>
                                {quotation.date}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                To
                            </td>
                            <td>
                                {quotation.to}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Case No.
                            </td>
                            <td>
                                {quotation.caseno}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Vessel Name
                            </td>
                            <td>
                                {quotation.vname}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Kind Attention
                            </td>
                            <td>
                                {quotation.kindAttention}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Location
                            </td>
                            <td>
                                {quotation.loc}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Amount
                            </td>
                            <td>
                                {quotation.amount}
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Grid className="my-1" container spacing={2} columnSpacing={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Table striped bordered style={{ width: "100%" }} className="w-100">
                            <thead>
                                <tr>
                                    <th>Sr No.</th>
                                    <th>Supply</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quotation.supply?quotation.supply.map((supply) => {
                                    return (
                                        <tr key={supply.srno}>
                                            <td>{supply.srno}</td>
                                            <td>{supply.tsupply}</td>
                                            <td>{supply.quantity}</td>
                                            <td>{supply.amount}</td>
                                        </tr>
                                    )
                                }):null}
                            </tbody>
                        </Table>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                    <Table striped bordered style={{ width: "100%" }} className="w-100">
                            <thead>
                                <tr>
                                    <th>Sr No.</th>
                                    <th>Service</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quotation.service?quotation.service.map((service) => {
                                    return (
                                        <tr key={service.srno}>
                                            <td>{service.srno}</td>
                                            <td>{service.tservice}</td>
                                            <td>{service.quantity}</td>
                                            <td>{service.amount}</td>
                                        </tr>
                                    )
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

export default QuotationDetailModal