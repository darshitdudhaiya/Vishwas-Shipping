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

const AddServiceReport = ({ handleCurrentWindow }) => {
  useEffect(() => {
    handleCurrentWindow("Add Service Report");
  }, []);
  // const [value, setValue] = React.useState(dayjs('2022-04-17'));

  const [currentServiceSrno, setCurrentServiceSrno] = useState(1);
  const [formData, setFormData] = useState({
    srno: "",
    caseno: "",
    date: "",
    vessel: "",
    loc: "",
    owner: "",
    mmsino: 0,
    imono: 0,
    callsign: "",
    equipment: "",
    model: "",
    srno2: 0,
    service: [],
    timesheet: [],
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

  const [newTimesheetRow, setNewTimesheetRow] = useState({
    date: "",
    day: "",
    enginnername: "",
    travellingTime: 0,
    waitingTime: 0,
    nt: 0,
    ot: 0,
  });

  const [newServiceRow, setNewServiceRow] = useState({
    srno: currentServiceSrno,
    description: "",
    partno: "",
    quantity: 0,
  });

  const handleNewTimesheetRowChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "number") {
      // Convert numeric values to numbers
      const newValue = parseFloat(value);

      setNewTimesheetRow({
        ...newTimesheetRow,
        [name]: newValue,
      });
    } else {
      setNewTimesheetRow({
        ...newTimesheetRow,
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

  const handleAddTimesheetRow = (newTimesheetRow) => {
    if (Object.values(newTimesheetRow).some((value) => value !== "")) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        timesheet: [...prevFormData.timesheet, newTimesheetRow],
      }));
      setNewTimesheetRow({
        date: "",
        day: "",
        enginnername: "",
        travellingTime: 0,
        waitingTime: 0,
        nt: 0,
        ot: 0,
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
        description: "",
        partno: "",
        quantity: 0,
      });
    }
  };

  const handleRemoveTimesheetyRow = (index) => {
    const newData = [...formData.timesheet];
    newData.splice(index, 1);

    setFormData((prevFormData) => ({
      ...prevFormData,
      timesheet: newData,
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
              <h3 className="text-center ">Service Report</h3>
              <form onSubmit={handleSubmit} className="">
                <Grid className="my-1" container spacing={2}>
                  <Grid item xs={12} sm={4} md={4}>
                    <TextField
                      fullWidth
                      label="S.R. No."
                      name="srno"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
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
                </Grid>
                <Grid className="my-1" container spacing={2}>
                  <Grid item xs={12} sm={4} md={4}>
                    <TextField
                      fullWidth
                      label="Vessel"
                      name="vessel"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <TextField
                      fullWidth
                      label="Location"
                      name="loc"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
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
                  <Grid item xs={12} sm={4} md={4}>
                    <TextField
                      fullWidth
                      type="number"
                      label="MMSI No."
                      name="mmsino"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <TextField
                      fullWidth
                      type="number"
                      label="IMO No."
                      name="imono"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <TextField
                      fullWidth
                      label="Call Sign"
                      name="callsign"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                </Grid>
                <Grid className="my-1" container spacing={2}>
                  <Grid item xs={12} sm={4} md={4}>
                    <TextField
                      fullWidth
                      label="Equipment"
                      name="equipment"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <TextField
                      fullWidth
                      label="Make & Model"
                      name="model"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Sr. No."
                      name="srno2"
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
                          <th align="center" rowSpan={2}>
                            <span className="center">Add</span>
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
                        {formData.timesheet.map((timesheet, index) => {
                          return (
                            <tr key={index}>
                              <td>{timesheet.date}</td>
                              <td>{timesheet.day}</td>
                              <td>{timesheet.enginnername}</td>
                              <td>{timesheet.travellingTime}</td>
                              <td>{timesheet.waitingTime}</td>
                              <td>{timesheet.nt}</td>
                              <td>{timesheet.ot}</td>
                              <td>
                                <Button
                                  color="primary"
                                  variant="contained"
                                  onClick={() =>
                                    handleRemoveTimesheetyRow(index)
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
                                onChange={handleNewTimesheetRowChange}
                                sx={{ width: "100%" }}
                              />
                            </LocalizationProvider>
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              name="day"
                              value={newTimesheetRow.day}
                              onChange={handleNewTimesheetRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              name="enginnername"
                              value={newTimesheetRow.enginnername}
                              onChange={handleNewTimesheetRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              type="number"
                              name="travellingTime"
                              value={newTimesheetRow.travellingTime}
                              onChange={handleNewTimesheetRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              type="number"
                              name="waitingTime"
                              value={newTimesheetRow.waitingTime}
                              onChange={handleNewTimesheetRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              type="number"
                              name="nt"
                              value={newTimesheetRow.nt}
                              onChange={handleNewTimesheetRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              type="number"
                              name="ot"
                              value={newTimesheetRow.ot}
                              onChange={handleNewTimesheetRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <Button
                              color="primary"
                              variant="contained"
                              onClick={() =>
                                handleAddTimesheetRow({ ...newTimesheetRow })
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
                <Grid className="my-1" container spacing={2}>
                  <Grid item xs={12} sm={12} md={12}>
                    <Table striped bordered>
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
                          <th>
                            <span className="center">Add</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.service.map((service, index) => {
                          if (service.srno !== 0) {
                            return (
                              <tr key={service.srno}>
                                <td>{service.srno}</td>
                                <td>{service.description}</td>
                                <td>{service.partno}</td>
                                <td>{service.quantity}</td>
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
                          <td >
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
                              name="description"
                              value={newServiceRow.description}
                              onChange={handleNewServiceRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              name="partno"
                              value={newServiceRow.partno}
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

export default AddServiceReport;
