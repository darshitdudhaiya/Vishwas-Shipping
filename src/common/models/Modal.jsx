import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
} from "@mui/material";
import {
  faInfoCircle,
  faExclamationTriangle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomModal = ({ setModalOpen, modalOpen, type }) => {
  const handleClose = () => setModalOpen(false);

  let backgroundColor;
  let icon;
  let actions;
  let Title;

  if (type === "error") {
    backgroundColor = "#b21100";
    icon = <FontAwesomeIcon icon={faExclamationTriangle} className="me-3" />;
    actions = (
      <Button variant="contained" onClick={handleClose}>
        Ok
      </Button>
    );
    Title = "Error";
  }
  if (type === "warning") {
    backgroundColor = "#ffb406";
    icon = <FontAwesomeIcon icon={faExclamationTriangle} className="me-3" />;
    actions = (
      <>
        <Button variant="contained" onClick={handleClose}>
          Ok
        </Button>
        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
      </>
    );
    Title = "Warning";
  }
  if (type === "info") {
    backgroundColor = "#00a100";
    icon = <FontAwesomeIcon icon={faInfoCircle} className="me-3" />;
    actions = (
      <Button variant="contained" onClick={handleClose}>
        Close
      </Button>
    );
    Title = "Info";
  }

  return (
    <Dialog open={modalOpen} onClose={handleClose}>
      <DialogTitle
        sx={{
          padding:"10px 25px",
          backgroundColor: backgroundColor,
          color: "white",
          marginBottom: "15px",
        }}
      >
        {icon} {Title}
      </DialogTitle>
      <DialogContent>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </DialogContent>
      <Divider sx={{ bgcolor: "black" }} />
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
};

export default CustomModal;
