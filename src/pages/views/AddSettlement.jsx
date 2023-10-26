import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Radio,
  FormGroup,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Table } from "reactstrap";

const AddSettlement = ({ handleCurrentWindow }) => {
  useEffect(() => {
    handleCurrentWindow("Add Settlement");
  }, []);
  // const [value, setValue] = React.useState(dayjs('2022-04-17'));

  const [totalAmount, setTotalAmount] = useState(0);
  const [formData, setFormData] = useState({
    caseno: "",
    datejcompleted: "",
    datejcommenced: "",
    empname: "",
    cname: "",
    loc: "",
    amount: totalAmount,
    settlement: [],
  });

  

  useEffect(() => {
    const settlementAmounts = formData.settlement.map(
      (settlement) => settlement.expance
    );

    const settlementTotal = settlementAmounts.reduce(
      (acc, expance) => acc + expance,
      0
    );

    setTotalAmount(settlementTotal);

    setFormData((prevFormData) => ({
      ...prevFormData,
      amount: settlementTotal,
    }));
  }, [formData.settlement]);

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

  const [newSettlementRow, setNewSettlementRow] = useState({
    date: "",
    description: "",
    bill: "",
    expance: 0,
  });

  const handleNewSettlementRowChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "number") {
      // Convert numeric values to numbers
      const newValue = parseFloat(value);

      setNewSettlementRow({
        ...newSettlementRow,
        [name]: newValue,
      });
    } else if (name === "billAttached") {
      // If the input belongs to billAttached field
      //   const updatedSupply = formData.supply.map((supply, i) =>
      //   index === i ? { ...supply, billAttached: value } : supply
      // );

      setNewSettlementRow({
        ...newSettlementRow,
        bill: value,
      });
    } else {
      setNewSettlementRow({
        ...newSettlementRow,
        [name]: value,
      });
    }
  };

  const handleAddSettlementRow = (newSettlementRow) => {
    if (Object.values(newSettlementRow).some((value) => value !== "")) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        settlement: [...prevFormData.settlement, newSettlementRow],
      }));
      setNewSettlementRow({
        date: "",
        description: "",
        bill: "",
        expance: 0,
      });
    }
    // console.log(newSupplyRow, formData.supply)
  };

  const handleRemoveSettlementRow = (index) => {
    const newData = [...formData.settlement];
    newData.splice(index, 1);

    setFormData((prevFormData) => ({
      ...prevFormData,
      settlement: newData,
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
              <h3 className="text-center ">Settlement</h3>
              <form onSubmit={handleSubmit} className="">
                <Grid className="my-1" container spacing={2}>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      fullWidth
                      label="Case No."
                      name="caseno"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      fullWidth
                      label="Vessel / Customer Name"
                      name="cname"
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
                      label="Name of Employee"
                      name="empname"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      fullWidth
                      label="Location"
                      name="loc"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                </Grid>
                <Grid className="my-1" container spacing={2}>
                  <Grid item xs={12} sm={6} md={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Date"
                        name="datejcompleted"
                        slotProps={{ textField: { variant: "standard" } }}
                        onChange={handleChange}
                        sx={{ width: "100%" }}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Date"
                        name="datejcommenced"
                        slotProps={{ textField: { variant: "standard" } }}
                        onChange={handleChange}
                        sx={{ width: "100%" }}
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
                <Grid className="my-1" container spacing={2}>
                  <Grid item xs={12} sm={12} md={12}>
                    <Table striped bordered>
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Description</th>
                          <th>Bill Attached</th>
                          <th>Expance</th>
                          <th>Add</th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.settlement.map((settlement, index) => {
                          return (
                            <tr key={index}>
                              <td>{settlement.date}</td>
                              <td>{settlement.description}</td>
                              <td>{settlement.bill}</td>
                              <td>{settlement.expance}</td>
                              <td>
                                <Button
                                  color="primary"
                                  variant="contained"
                                  onClick={() =>
                                    handleRemoveSettlementRow(index)
                                  }
                                  sx={{ width: "100%" }}
                                >
                                  Remove
                                </Button>
                              </td>
                            </tr>
                          );
                        })}
                        <tr>
                          <td >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DatePicker
                                label="Date"
                                name="date"
                                slotProps={{
                                  textField: { variant: "standard" },
                                }}
                                onChange={handleNewSettlementRowChange}
                                sx={{ width: "100%" }}
                              />
                            </LocalizationProvider>
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              name="description"
                              value={newSettlementRow.description}
                              onChange={handleNewSettlementRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <FormGroup row>
                              <FormControlLabel
                                value="yes"
                                control={<Radio />}
                                label="Yes"
                                name="billAttached"
                                labelPlacement="end"
                                checked={newSettlementRow.bill === "yes"}
                                onChange={handleNewSettlementRowChange}
                              />
                              <FormControlLabel
                                value="no"
                                control={<Radio />}
                                label="No"
                                name="billAttached"
                                labelPlacement="end"
                                checked={newSettlementRow.bill === "no"}
                                onChange={handleNewSettlementRowChange}
                              />
                            </FormGroup>
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              type="number"
                              name="expance"
                              value={newSettlementRow.expance}
                              onChange={handleNewSettlementRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <Button
                              color="primary"
                              variant="contained"
                              onClick={() =>
                                handleAddSettlementRow({ ...newSettlementRow })
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
                <Grid className="" container spacing={2}>
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Total Amount"
                      name="amount"
                      value={totalAmount}
                      variant="standard"
                      disabled
                    />
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

export default AddSettlement;
