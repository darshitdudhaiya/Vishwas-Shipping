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

const ServiceReportDetailModal = ({
  setUserModalOpen,
  userModalOpen,
  serviceReport,
}) => {
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
        <FontAwesomeIcon icon={faBoxes} className="me-3" />{" "}
        {serviceReport.owner}'s Service Report
      </DialogTitle>
      <DialogContent>
        <Table striped bordered style={{ width: "100%" }} className="w-100">
          <tbody>
            <tr>
              <td>Sr. No.</td>
              <td>{serviceReport.srno}</td>
              <td>Case No.</td>
              <td>{serviceReport.caseno}</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>{serviceReport.date}</td>
              <td>Location</td>
              <td>{serviceReport.loc}</td>
            </tr>
            <tr>
              <td>Owner</td>
              <td>{serviceReport.owner}</td>
              <td>MMSI No.</td>
              <td>{serviceReport.mmsino}</td>
            </tr>
            <tr>
              <td>IMO No.</td>
              <td>{serviceReport.imono}</td>
              <td>Call Sign</td>
              <td>{serviceReport.callsign}</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>{serviceReport.model}</td>
              <td>Sr No.</td>
              <td>{serviceReport.srno2}</td>
            </tr>
          </tbody>
        </Table>
        <Grid className="my-1" container spacing={2} columnSpacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Table striped bordered style={{ width: "100%" }} className="w-100">
              <thead>
                <tr>
                  <th>
                    <span className="center">Sr No.</span>
                  </th>
                  <th>
                    <span className="center">Description</span>
                  </th>
                  <th>
                    <span className="center">Part No.</span>
                  </th>
                  <th>
                    <span className="center">Quantity</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {serviceReport.service?.map((service, index) => {
                  if (service.srno !== 0) {
                    return (
                      <tr key={service.srno}>
                        <td>{service.srno}</td>
                        <td>{service.description}</td>
                        <td>{service.partno}</td>
                        <td>{service.quantity}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </Table>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Table striped bordered style={{ width: "100%" }} className="w-100">
              <thead>
                <tr>
                  <th align="center" rowSpan={2}>
                    <span className="center">Date</span>
                  </th>
                  <th align="center" rowSpan={2}>
                    <span className="center">Day</span>
                  </th>
                  <th align="center" rowSpan={2}>
                    <span className="center">Engineer's Name</span>
                  </th>
                  <th align="center" rowSpan={2}>
                    <span className="center">Travelling Time</span>
                  </th>
                  <th align="center" rowSpan={2}>
                    <span className="center">Waiting Time</span>
                  </th>
                  <th align="center" colSpan={2}>
                    <span className="center">Onboard Working Time</span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span className="center">NT</span>
                  </th>
                  <th>
                    <span className="center">OT</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {serviceReport.timesheet?.map((timesheet, index) => {
                  return (
                    <tr key={index}>
                      <td>{timesheet.date}</td>
                      <td>{timesheet.day}</td>
                      <td>{timesheet.enginnername}</td>
                      <td>{timesheet.travellingTime}</td>
                      <td>{timesheet.waitingTime}</td>
                      <td>{timesheet.nt}</td>
                      <td>{timesheet.ot}</td>
                    </tr>
                  );
                })}
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

export default ServiceReportDetailModal;
