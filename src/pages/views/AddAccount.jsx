import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Typography from "@mui/material/Typography";

const steps = ["", "", ""];

const AddAccount = ({ handleCurrentWindow }) => {
  useEffect(() => {
    handleCurrentWindow("Add Account");
  }, []);

  const [formData, setFormData] = useState({
    code: 0,
    name: "",
    accountGroup: "",
    opening: 0,
    debit: 0,
    credit: 0,
    closing: 0,
    address1: "",
    address2: "",
    address3: "",
    city: "",
    pincode: 0,
    mobile: 0,
    gstn: 0,
    state: "",
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
    } else {
      // Convert numeric values to numbers
      const newValue = type === "number" ? parseFloat(value) : value;

      setFormData({
        ...formData,
        [name]: type === "radio" ? (checked ? newValue : "") : newValue,
      });
    }
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const formSteps = [
    {
      fields: (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="number"
              label="Code"
              name="code"
              value={formData.code}
              onChange={handleChange}
              variant={"standard"}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant={"standard"}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Account group"
              name="accountGroup"
              value={formData.accountGroup}
              onChange={handleChange}
              variant={"standard"}
              required
            />
          </Grid>
        </Grid>
      ),
    },
    {
      fields: (
        <>
          <Grid className="my-1" container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                fullWidth
                type="number"
                label="OpeniCng"
                name="opening"
                value={formData.opening}
                onChange={handleChange}
                variant={"standard"}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                fullWidth
                type="number"
                label="Debit"
                name="debit"
                value={formData.debit}
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
                label="Credit"
                name="credit"
                value={formData.credit}
                onChange={handleChange}
                variant={"standard"}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                fullWidth
                type="number"
                label="Closing"
                name="closing"
                value={formData.closing}
                onChange={handleChange}
                variant={"standard"}
                required
              />
            </Grid>
          </Grid>
        </>
      ),
    },
    {
      fields: (
        <>
          <Grid className="my-1" container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                fullWidth
                label="Address 1"
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                variant={"standard"}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                fullWidth
                label="Address 2"
                name="address2"
                value={formData.address2}
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
                label="Address 3"
                name="address3"
                value={formData.address3}
                onChange={handleChange}
                variant={"standard"}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                fullWidth
                label="City"
                name="city"
                value={formData.city}
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
                label="Pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                variant={"standard"}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                fullWidth
                type="number"
                label="Mobile"
                name="mobile"
                value={formData.mobile}
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
                label="GSTN"
                name="gstn"
                value={formData.gstn}
                onChange={handleChange}
                variant={"standard"}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                fullWidth
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                variant={"standard"}
                required
              />
            </Grid>
          </Grid>
        </>
      ),
    },
  ];

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    setFormData({
      code: 0,
      name: "",
      accountGroup: "",
      opening: 0,
      debit: 0,
      credit: 0,
      closing: 0,
      address1: "",
      address2: "",
      address3: "",
      city: "",
      pincode: 0,
      mobile: 0,
      gstn: 0,
      state: "",
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Perform form submission logic
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md={12}>
          <Card>
            <CardContent>
              <h3 className="text-center ">Add Account</h3>
              <form onSubmit={handleSubmit} className="">
                {/* <Grid container className="my-2" justifyContent="center">
                  <Button color="primary" variant="contained" type="submit">Submit</Button>
                </Grid> */}
              </form>
              <Box sx={{ width: "100%" }}>
                <Stepper nonLinear activeStep={activeStep}>
                  {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                      <StepButton color="inherit" onClick={handleStep(index)}>
                        {label}
                      </StepButton>
                    </Step>
                  ))}
                </Stepper>
                <div>
                  {allStepsCompleted() ? (
                    <React.Fragment>
                      <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                      </Typography>
                      <Box
                        sx={{ display: "flex", flexDirection: "row", pt: 2 }}
                      >
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button onClick={handleReset}>Reset</Button>
                      </Box>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <Typography
                        sx={{ mt: 2, mb: 1, py: 1 }}
                        style={{ height: "300px" }}
                      >
                        {formSteps[activeStep].fields}
                      </Typography>
                      <Box
                        sx={{ display: "flex", flexDirection: "row", pt: 2 }}
                      >
                        <Button
                          color="inherit"
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          sx={{ mr: 1 }}
                        >
                          Back
                        </Button>
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button onClick={handleNext} sx={{ mr: 1 }}>
                          Next
                        </Button>
                        {activeStep !== steps.length &&
                          (completed[activeStep] ? (
                            <Typography
                              variant="caption"
                              sx={{ display: "inline-block" }}
                            >
                              Step {activeStep + 1} already completed
                            </Typography>
                          ) : (
                            <Button onClick={handleComplete}>
                              {completedSteps() === totalSteps() - 1 ? (
                                <>
                                  <Grid
                                    container
                                    className="my-2"
                                    justifyContent="center"
                                  >
                                    <Button
                                      color="primary"
                                      variant="contained"
                                      type="submit"
                                      onClick={handleSubmit}
                                    >
                                      Submit
                                    </Button>
                                  </Grid>
                                </>
                              ) : (
                                "Complete Step"
                              )}
                            </Button>
                          ))}
                      </Box>
                    </React.Fragment>
                  )}
                </div>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default AddAccount;
