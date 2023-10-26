import React from 'react'
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Divider,
} from "@mui/material";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "reactstrap";


const AccountDetailModal = ({ setUserModalOpen, userModalOpen, account }) => {
    const handleClose = () => setUserModalOpen(false);

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
                <FontAwesomeIcon icon={faUser} className="me-3" /> {account.name}'s Account
            </DialogTitle>
            <DialogContent>
                <Table striped style={{width:"400px"}}>
                    <tbody>
                        <tr>
                            <td>
                                Opening
                            </td>
                            <td>
                                {account.openning}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Debit
                            </td>
                            <td>
                                {account.debit}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Credit
                            </td>
                            <td>
                                {account.credit}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Closing
                            </td>
                            <td>
                                {account.closing}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                City
                            </td>
                            <td>
                                {account.city}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Pincode
                            </td>
                            <td>
                                {account.pincode}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Mobile
                            </td>
                            <td>
                                {account.mobile}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                GSTN
                            </td>
                            <td>
                                {account.gstn}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                State
                            </td>
                            <td>
                                {account.state}
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

export default AccountDetailModal