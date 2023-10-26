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

const AddPacking = ({ handleCurrentWindow }) => {
  useEffect(() => {
    handleCurrentWindow("Add Paking");
  }, []);

  const [currentPackingSrno, setCurrentPackingSrno] = useState(1);
  const [formData, setFormData] = useState({
    plno: "",
    date: "",
    to: "",
    address: "",
    packing: [],
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

  const [newPackingRow, setNewPackingRow] = useState({
    srno: currentPackingSrno,
    description: "",
    size: "",
    weight: 0,
    quantity: 0,
  });

  const handleNewPackingRowChange = (e) => {
    const { name, value, type} = e.target;

    if (type === "number") {
      // Convert numeric values to numbers
      const newValue = parseFloat(value);

      setNewPackingRow({
        ...newPackingRow,
        [name]: newValue,
      });
    } else if (name === "billAttached") {
      // If the input belongs to billAttached field
      //   const updatedSupply = formData.supply.map((supply, i) =>
      //   index === i ? { ...supply, billAttached: value } : supply
      // );

      setNewPackingRow({
        ...newPackingRow,
        bill: value,
      });
    } else {
      setNewPackingRow({
        ...newPackingRow,
        [name]: value,
      });
    }
  };

  const handleAddPackingRow = (newPackingRow) => {
    if (Object.values(newPackingRow).some((value) => value !== "")) {
      setCurrentPackingSrno(currentPackingSrno + 1);
      setFormData((prevFormData) => ({
        ...prevFormData,
        packing: [...prevFormData.packing, newPackingRow],
      }));
      setNewPackingRow({
        srno: currentPackingSrno,
        description: "",
        size: "",
        weight: 0,
        quantity: 0,
      });
    }
    // console.log(newSupplyRow, formData.supply)
  };

  const handleRemovePackingRow = (index) => {
    const newData = [...formData.packing];
    newData.splice(index, 1);
    setCurrentPackingSrno(currentPackingSrno - 1);

    setFormData((prevFormData) => ({
      ...prevFormData,
      packing: newData,
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
              <h3 className="text-center ">Packing</h3>
              <form onSubmit={handleSubmit} className="">
                <Grid className="my-1" container spacing={2}>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      fullWidth
                      label="P.L. No."
                      name="plno"
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
                      label="To"
                      name="to"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      fullWidth
                      label="Address"
                      name="address"
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
                          <th>Quantity</th>
                          <th>Weight (KG)</th>
                          <th>Size (Cm)</th>
                          <th>Add</th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.packing.map((packing, index) => {
                          return (
                            <tr key={index}>
                              <td>{packing.srno}</td>
                              <td>{packing.description}</td>
                              <td>{packing.quantity}</td>
                              <td>{packing.weight}</td>
                              <td>{packing.size}</td>
                              <td>
                                <Button
                                  color="primary"
                                  variant="contained"
                                  onClick={() => handleRemovePackingRow(index)}
                                  sx={{ width: "100%" }}
                                >
                                  Remove
                                </Button>
                              </td>
                            </tr>
                          );
                        })}
                        <tr>
                          <td>
                            <TextField
                              fullWidth
                              type="number"
                              name="srno"
                              value={newPackingRow.srno}
                              disabled // Make the srno field disabled
                              variant="standard"
                            />
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              name="description"
                              value={newPackingRow.description}
                              onChange={handleNewPackingRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              type="number"
                              name="quantity"
                              value={newPackingRow.quantity}
                              onChange={handleNewPackingRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              type="number"
                              name="weight"
                              value={newPackingRow.weight}
                              onChange={handleNewPackingRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              name="size"
                              value={newPackingRow.size}
                              onChange={handleNewPackingRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <Button
                              color="primary"
                              variant="contained"
                              onClick={() =>
                                handleAddPackingRow({ ...newPackingRow })
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

export default AddPacking;
