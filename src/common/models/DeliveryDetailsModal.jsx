import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Grid,
} from "@mui/material";
import { faReceipt, faUser, faBoxes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "reactstrap";

const DeliveryDetailModal = ({ setUserModalOpen, userModalOpen, delivery }) => {
  const handleClose = () => setUserModalOpen(false);
  // console.log(transaction)

  return (
    <Dialog
      open={userModalOpen}
      onClose={handleClose}
      sx={{ maxWidth: "100%" }}
    >
      <DialogTitle
        sx={{
          padding: "10px 25px",
          backgroundColor: "#004982",
          color: "white",
          marginBottom: "15px",
        }}
      >
        <FontAwesomeIcon icon={faBoxes} className="me-3" /> {delivery.vessel}'s
        Delivery
      </DialogTitle>
      <DialogContent>
        <Table striped bordered style={{ width: "100%" }} className="w-100">
          <tbody>
            <tr>
              <td>D.C. No.</td>
              <td>{delivery.dcno}</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>{delivery.date}</td>
            </tr>
            <tr>
              <td>Vessel</td>
              <td>{delivery.vessel}</td>
            </tr>
            <tr>
              <td>Owner</td>
              <td>{delivery.owner}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{delivery.address}</td>
            </tr>
            <tr>
              <td>Contact Person</td>
              <td>{delivery.cperson}</td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td>{delivery.mobile}</td>
            </tr>
            <tr>
              <td>Telephone</td>
              <td>{delivery.telephone}</td>
            </tr>
          </tbody>
        </Table>
        <Grid className="my-1" container spacing={2} columnSpacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Table striped bordered style={{ width: "100%" }} className="w-100">
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Description</th>
                  <th>Part No.</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {delivery.delivery?delivery.delivery.map((delivery, index) => {
                  return (
                    <tr key={index}>
                      <td>{delivery.srno}</td>
                      <td>{delivery.description}</td>
                      <td>{delivery.partno}</td>
                      <td>{delivery.quantity}</td>
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
  );
};

export default DeliveryDetailModal;
