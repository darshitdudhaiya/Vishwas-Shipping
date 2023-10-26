import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Table } from "reactstrap";

const AddDelivery = ({ handleCurrentWindow }) => {
  useEffect(() => {
    handleCurrentWindow("Add Delivery");
  }, []);

  const [currentDeliverySrno, setCurrentDeliverySrno] = useState(1);
  const [formData, setFormData] = useState({
    dcno: "",
    date: "",
    vessel: "",
    address: "",
    cperson: "",
    mobile: "",
    telephone: "",
    delivery: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      const newInterests = formData.interests.includes(value)
        ? formData.interests.filter((interest) => interest !== value)
        : [...formData.interests, value];

      setFormData({
        ...formData,
        interests: newInterests,
      });
    } else if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0], // Assume single file upload
      });
    } else if (type === "number") {
      // Convert numeric values to numbers
      const newValue = parseFloat(value);

      setFormData({
        ...formData,
        [name]: newValue,
      });
    } else if (type === "radio") {
      setFormData({
        ...formData,
        [name]: checked ? value : "",
      });
    } else if (name === "tsupply" || name === "quantity" || name === "amount") {
      // If the input belongs to supply array
      const supplyIndex = parseInt(e.target.getAttribute("data-index"));
      const updatedSupply = formData.supply.map((supply, index) =>
        index === supplyIndex
          ? {
              ...supply,
              [name]: value,
            }
          : supply
      );

      setFormData({
        ...formData,
        supply: updatedSupply,
      });
    } else if (
      name === "tservice" ||
      name === "quantity" ||
      name === "amount"
    ) {
      // If the input belongs to service array
      const serviceIndex = parseInt(e.target.getAttribute("data-index"));
      const updatedService = formData.service.map((service, index) =>
        index === serviceIndex
          ? {
              ...service,
              [name]: value,
            }
          : service
      );

      setFormData({
        ...formData,
        service: updatedService,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const [newDeliveryRow, setNewDeliveryRow] = useState({
    srno: currentDeliverySrno,
    description: "",
    partno: "",
    quantity: 0,
  });

  const handleNewDeliveryRowChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "number") {
      // Convert numeric values to numbers
      const newValue = parseFloat(value);

      setNewDeliveryRow({
        ...newDeliveryRow,
        [name]: newValue,
      });
    } else if (name === "billAttached") {
      // If the input belongs to billAttached field
      //   const updatedSupply = formData.supply.map((supply, i) =>
      //   index === i ? { ...supply, billAttached: value } : supply
      // );

      setNewDeliveryRow({
        ...newDeliveryRow,
        bill: value,
      });
    } else {
      setNewDeliveryRow({
        ...newDeliveryRow,
        [name]: value,
      });
    }
  };

  const handleAddDeliveryRow = (newDeliveryRow) => {
    if (Object.values(newDeliveryRow).some((value) => value !== "")) {
      setCurrentDeliverySrno(currentDeliverySrno + 1);
      setFormData((prevFormData) => ({
        ...prevFormData,
        delivery: [...prevFormData.delivery, newDeliveryRow],
      }));
      setNewDeliveryRow({
        srno: currentDeliverySrno,
        description: "",
        partno: "",
        quantity: 0,
      });
    }
    // console.log(newSupplyRow, formData.supply)
  };

  const handleRemoveDeliveryRow = (index) => {
    const newData = [...formData.delivery];
    newData.splice(index, 1);
    setCurrentDeliverySrno(currentDeliverySrno - 1);


    setFormData((prevFormData) => ({
      ...prevFormData,
      delivery: newData,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Perform form submission logic
  };

  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md={12}>
          <Card>
            <CardContent>
              <h3 className="text-center ">Delivery</h3>
              <form onSubmit={handleSubmit} className="">
                <Grid className="my-1" container spacing={2}>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      fullWidth
                      label="D.C. No."
                      name="dcno"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Date"
                        name="date"
                        slotProps={{ textField: { variant: "standard" } }}
                        onChange={handleChange}
                        sx={{ width: "100%" }}
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
                <Grid className="my-1" container spacing={2}>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      fullWidth
                      label="Vessel"
                      name="empname"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      fullWidth
                      label="Owner"
                      name="owner"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                </Grid>
                <Grid className="my-1" container spacing={2}>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      fullWidth
                      label="address"
                      name="address"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      fullWidth
                      label="Contact Person"
                      name="cperson"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                </Grid>
                <Grid className="my-1" container spacing={2}>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      fullWidth
                      type="number"
                      label="mobile"
                      name="mobile"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      fullWidth
                      type="number"
                      label="telephone"
                      name="telephone"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                </Grid>
                <Grid className="my-1" container spacing={2}>
                  <Grid item xs={12} sm={12} md={12}>
                    <Table striped bordered>
                      <thead>
                        <tr>
                          <th>Sr No.</th>
                          <th>Description</th>
                          <th>Part No.</th>
                          <th>Quantity</th>
                          <th>Add</th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.delivery.map((delivery, index) => {
                          return (
                            <tr key={index}>
                              <td>{delivery.srno}</td>
                              <td>{delivery.description}</td>
                              <td>{delivery.partno}</td>
                              <td>{delivery.quantity}</td>
                              <td>
                                <Button
                                  color="primary"
                                  variant="contained"
                                  onClick={() => handleRemoveDeliveryRow(index)}
                                  sx={{ width: "100%" }}
                                >
                                  Remove
                                </Button>
                              </td>
                            </tr>
                          );
                        })}
                        <tr>
                          <td scope="row">
                            <TextField
                              fullWidth
                              type="number"
                              name="srno"
                              value={newDeliveryRow.srno}
                              disabled // Make the srno field disabled
                              variant="standard"
                            />
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              name="description"
                              value={newDeliveryRow.description}
                              onChange={handleNewDeliveryRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              name="partno"
                              value={newDeliveryRow.partno}
                              onChange={handleNewDeliveryRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              type="number"
                              name="quantity"
                              value={newDeliveryRow.quantity}
                              onChange={handleNewDeliveryRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <Button
                              color="primary"
                              variant="contained"
                              onClick={() =>
                                handleAddDeliveryRow({ ...newDeliveryRow })
                              }
                              sx={{ width: "100%" }}
                            >
                              Add
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Grid>
                </Grid>
                <Grid container className="my-2" justifyContent="center">
                  <Button color="primary" variant="contained" type="submit">
                    Submit
                  </Button>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddDelivery;
