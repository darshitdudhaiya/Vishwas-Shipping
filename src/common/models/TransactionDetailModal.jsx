import React from 'react'
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Divider,
} from "@mui/material";
import { faReceipt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "reactstrap";


const TransactionDetailModal = ({ setUserModalOpen, userModalOpen, transaction }) => {
    const handleClose = () => setUserModalOpen(false);
    // console.log(transaction)

    return (
        <Dialog open={userModalOpen} onClose={handleClose}>
            <DialogTitle
                sx={{
                    padding: "10px 25px",
                    backgroundColor: "#004982",
                    color: "white",
                    marginBottom: "15px",
                }}
            >
                <FontAwesomeIcon icon={faReceipt} className="me-3" /> {transaction.cname}'s Transaction
            </DialogTitle>
            <DialogContent>
                <Table striped style={{width:"400px"}}>
                    <tbody>
                        <tr>
                            <td>
                                Type
                            </td>
                            <td>
                                {transaction.type}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Voucher No.
                            </td>
                            <td>
                                {transaction.vono}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Date
                            </td>
                            <td>
                                {transaction.date}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Customer Credit Of Debit
                            </td>
                            <td>
                                {transaction.ccod}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Customer Name
                            </td>
                            <td>
                                {transaction.cname}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                DDOD
                            </td>
                            <td>
                                {transaction.ddod}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Dname
                            </td>
                            <td>
                                {transaction.dname}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Voucher Amount
                            </td>
                            <td>
                                {transaction.vamt}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Note 1
                            </td>
                            <td>
                                {transaction.not1}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Note 2
                            </td>
                            <td>
                                {transaction.not2}
                            </td>
                        </tr>
                    </tbody>
                </Table>
                
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

export default TransactionDetailModal