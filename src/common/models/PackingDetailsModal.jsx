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

const PackingDetailModal = ({ setUserModalOpen, userModalOpen, packing }) => {
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
        <FontAwesomeIcon icon={faBoxes} className="me-3" /> {packing.to}'s
        Packing
      </DialogTitle>
      <DialogContent>
        <Table striped bordered style={{ width: "100%" }} className="w-100">
          <tbody>
            <tr>
              <td>P.L. No.</td>
              <td>{packing.plno}</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>{packing.date}</td>
            </tr>
            <tr>
              <td>To</td>
              <td>{packing.to}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{packing.address}</td>
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
                  <th>Quantity</th>
                  <th>Weight (KG)</th>
                  <th>Size (Cm)</th>
                </tr>
              </thead>
              <tbody>
                {packing.packing?packing.packing.map((packing, index) => {
                  return (
                    <tr key={index}>
                      <td>{packing.srno}</td>
                      <td>{packing.description}</td>
                      <td>{packing.quantity}</td>
                      <td>{packing.weight}</td>
                      <td>{packing.size}</td>
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

export default PackingDetailModal;
