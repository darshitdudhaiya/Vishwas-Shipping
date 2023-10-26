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

const AccountTransaction = ({ handleCurrentWindow }) => {
  useEffect(() => {
    handleCurrentWindow("Add Account");
  }, []);
  // const [value, setValue] = React.useState(dayjs('2022-04-17'));

  const [formData, setFormData] = useState({
    type: "",
    vono: 0,
    date: "",
    ccod: 0,
    cname: "",
    ddod: 0,
    dname: "",
    vamt: 0,
    not1: "",
    not2: "",
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
        [name]: [0], // Assume single file upload
      });
    } else {
      // Convert numeric values to numbers
      const newValue = type === "number" ? parseFloat(value) : value;

      setFormData({
        ...formData,
        [name]: type === "radio" ? (checked ? newValue : "") : newValue,
      });
    }
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
              <h3 className="text-center ">Account Transaction</h3>
              <form onSubmit={handleSubmit} className="">
                <Grid className="my-1" container spacing={2}>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      fullWidth
                      label="Type"
                      name="type"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Voucher No."
                      name="vono"
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
                        name="date"
                        slotProps={{ textField: { variant: 'standard', } }}
                        onChange={handleChange}
                        sx={{width:"100%"}}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Coustomber Code Of Debit"
                      name="ccod"
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
                      label="Customer Name"
                      name="cname"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      fullWidth
                      type="number"
                      label="DDOD"
                      name="ddod"
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
                      label="Dname"
                      name="dname"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Voucher Amount"
                      name="vamt"
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
                      label="Note 1"
                      name="not1"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      fullWidth
                      label="NOt 2"
                      name="not2"
                      onChange={handleChange}
                      variant={"standard"}
                      required
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

export default AccountTransaction;
