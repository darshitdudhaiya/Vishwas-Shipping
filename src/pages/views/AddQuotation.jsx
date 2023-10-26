import React, { useEffect, useState } from "react";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Table } from "reactstrap";

const AddQuotation = ({ handleCurrentWindow }) => {
  useEffect(() => {
    handleCurrentWindow("Add Quotation");
  }, []);
  // const [value, setValue] = React.useState(dayjs('2022-04-17'));

  const [totalAmount, setTotalAmount] = useState(0);
  const [currentSupplySrno, setCurrentSupplySrno] = useState(1);
  const [currentServiceSrno, setCurrentServiceSrno] = useState(1);
  const [formData, setFormData] = useState({
    qno: "",
    date: "",
    caseno: "",
    to: "",
    kindAttention: "",
    vname: "",
    loc: "",
    amount: totalAmount,
    supply: [],
    service: [],
  });

  useEffect(() => {
    const supplyAmounts = formData.supply.map((supply) => supply.amount);
    const serviceAmounts = formData.service.map((service) => service.amount);

    const supplyTotal = supplyAmounts.reduce((acc, amount) => acc + amount, 0);
    const serviceTotal = serviceAmounts.reduce(
      (acc, amount) => acc + amount,
      0
    );

    const total = supplyTotal + serviceTotal;
    setTotalAmount(total);

    setFormData((prevFormData) => ({
      ...prevFormData,
      amount: total,
    }));
  }, [formData.supply, formData.service]);

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

  const [newSupplyRow, setNewSupplyRow] = useState({
    srno: currentSupplySrno,
    tsupply: "",
    quantity: 0,
    amount: 0,
  });

  const [newServiceRow, setNewServiceRow] = useState({
    srno: currentServiceSrno,
    tservice: "",
    quantity: 0,
    amount: 0,
  });

  const handleNewSupplyRowChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "number") {
      // Convert numeric values to numbers
      const newValue = parseFloat(value);

      setNewSupplyRow({
        ...newSupplyRow,
        [name]: newValue,
      });
    } else {
      setNewSupplyRow({
        ...newSupplyRow,
        [name]: value,
      });
    }
  };

  const handleNewServiceRowChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "number") {
      // Convert numeric values to numbers
      const newValue = parseFloat(value);

      setNewServiceRow({
        ...newServiceRow,
        [name]: newValue,
      });
    } else {
      setNewServiceRow({
        ...newServiceRow,
        [name]: value,
      });
    }
  };

  const handleAddSupplyRow = (newSupplyRow) => {
    if (Object.values(newSupplyRow).some((value) => value !== "")) {
      setCurrentSupplySrno(currentSupplySrno + 1);
      setFormData((prevFormData) => ({
        ...prevFormData,
        supply: [...prevFormData.supply, newSupplyRow],
      }));
      setNewSupplyRow({
        srno: currentSupplySrno,
        tsupply: "",
        quantity: "",
        amount: "",
      });
    }
    // console.log(newSupplyRow, formData.supply)
  };

  const handleAddServiceRow = (newServiceRow) => {
    if (Object.values(newServiceRow).some((value) => value !== "")) {
      setCurrentServiceSrno(currentServiceSrno + 1);
      setFormData((prevFormData) => ({
        ...prevFormData,
        service: [...prevFormData.service, newServiceRow],
      }));
      setNewServiceRow({
        srno: currentServiceSrno,
        tservice: "",
        quantity: "",
        amount: "",
      });
    }
  };

  const handleRemoveSupplyRow = (index) => {
    const newData = [...formData.supply];
    newData.splice(index, 1);
    setCurrentSupplySrno(currentSupplySrno - 1);

    setFormData((prevFormData) => ({
      ...prevFormData,
      supply: newData,
    }));
  };

  const handleRemoveServiceRow = (index) => {
    const newData = [...formData.service];
    newData.splice(index, 1);
    setCurrentServiceSrno(currentServiceSrno - 1);

    setFormData((prevFormData) => ({
      ...prevFormData,
      service: newData,
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
              <h3 className="text-center ">Quotation</h3>
              <form onSubmit={handleSubmit} className="">
                <Grid className="my-1" container spacing={2}>
                  <Grid item xs={12} sm={4} md={4}>
                    <TextField
                      fullWidth
                      label="Quotation No."
                      name="qno"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
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
                  <Grid item xs={12} sm={4} md={4}>
                    <TextField
                      fullWidth
                      label="Case No."
                      name="caseno"
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
                      label="Kind Attention"
                      name="kindAttention"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
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
                </Grid>
                <Grid className="my-1" container spacing={2}>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      fullWidth
                      label="Vessel Name"
                      name="vname"
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
                    <Table striped bordered>
                      <thead>
                        <tr>
                          <th>Sr No.</th>
                          <th>Supply</th>
                          <th>Quantity</th>
                          <th>Amount</th>
                          <th>Add</th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.supply.map((supply, index) => {
                          if (supply.srno !== 0) {
                            return (
                              <tr key={supply.srno}>
                                <td>{supply.srno}</td>
                                <td>{supply.tsupply}</td>
                                <td>{supply.quantity}</td>
                                <td>{supply.amount}</td>
                                <td>
                                  <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={() => handleRemoveSupplyRow(index)}
                                    sx={{ width: "100%" }}
                                  >
                                    Remove
                                  </Button>
                                </td>
                              </tr>
                            );
                          } else {
                            return null;
                          }
                        })}
                        <tr>
                          <td>
                            <TextField
                              fullWidth
                              type="number"
                              name="srno"
                              value={newSupplyRow.srno}
                              disabled // Make the srno field disabled
                              variant="standard"
                            />
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              name="tsupply"
                              value={newSupplyRow.tsupply}
                              onChange={handleNewSupplyRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              type="number"
                              name="quantity"
                              value={newSupplyRow.quantity}
                              onChange={handleNewSupplyRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              type="number"
                              name="amount"
                              value={newSupplyRow.amount}
                              onChange={handleNewSupplyRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <Button
                              color="primary"
                              variant="contained"
                              onClick={() =>
                                handleAddSupplyRow({ ...newSupplyRow })
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
                  <Grid item xs={12} sm={6} md={6}>
                    <Table striped>
                      <thead>
                        <tr>
                          <th>Sr No.</th>
                          <th>Service</th>
                          <th>Quantity</th>
                          <th>Amount</th>
                          <th>Add</th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.service.map((service, index) => {
                          if (service.srno !== 0) {
                            return (
                              <tr key={service.srno}>
                                <td>{service.srno}</td>
                                <td>{service.tservice}</td>
                                <td>{service.quantity}</td>
                                <td>{service.amount}</td>
                                <td>
                                  <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={() =>
                                      handleRemoveServiceRow(index)
                                    }
                                    sx={{ width: "100%" }}
                                  >
                                    Remove
                                  </Button>
                                </td>
                              </tr>
                            );
                          } else {
                            return null;
                          }
                        })}
                        <tr>
                          <td>
                            <TextField
                              fullWidth
                              type="number"
                              name="srno"
                              value={newServiceRow.srno}
                              disabled // Make the srno field disabled
                              variant="standard"
                            />
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              name="tservice"
                              value={newServiceRow.tservice}
                              onChange={handleNewServiceRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              type="number"
                              name="quantity"
                              value={newServiceRow.quantity}
                              onChange={handleNewServiceRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              type="number"
                              name="amount"
                              value={newServiceRow.amount}
                              onChange={handleNewServiceRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <Button
                              color="primary"
                              variant="contained"
                              sx={{ width: "100%" }}
                              onClick={() =>
                                handleAddServiceRow({ ...newServiceRow })
                              }
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

export default AddQuotation;
