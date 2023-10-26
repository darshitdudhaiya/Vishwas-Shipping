import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Table } from "reactstrap";
import IconButton from "../../common/IconButton";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { products } from "../../settings/consts";

const AddProductGroup = ({ handleCurrentWindow }) => {
  useEffect(() => {
    handleCurrentWindow("Add Product Group");
  }, []);
  // const [value, setValue] = React.useState(dayjs('2022-04-17'));

  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    product: [],
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
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const [newProductRow, setNewProductRow] = useState({
    productName: "",
    quantity: 0,
  });

  const [newProduct, setNewProduct] = useState('');
  const handleProductNameChange = (e) => {
    setNewProduct(e.target.value);
    console.log(e.target.value);
    setNewProductRow({
      ...newProductRow,
      productName: newProduct,
    });
  };
  const handleNewProductRowChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "number") {
      // Convert numeric values to numbers
      const newValue = parseFloat(value);

      setNewProductRow({
        ...newProductRow,
        [name]: newValue,
      });
    } else if (name === "billAttached") {
      // If the input belongs to billAttached field
      //   const updatedSupply = formData.supply.map((supply, i) =>
      //   index === i ? { ...supply, billAttached: value } : supply
      // );

      setNewProductRow({
        ...newProductRow,
        bill: value,
      });
    } else if (name === "productName") {
      setNewProductRow({
        ...newProductRow,
        productName: newProduct,
      });
    } else {
      setNewProductRow({
        ...newProductRow,
        [name]: value,
      });
    }
  };

  const handleAddProductRow = (newProductRow) => {
    if (Object.values(newProductRow).some((value) => value !== "")) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        product: [...prevFormData.product, newProductRow],
      }));
      setNewProductRow({
        productName: "",
        quantity: 0,
      });
    }
    // console.log(newSupplyRow, formData.supply)
  };

  const handleRemoveProductRow = (index) => {
    const newData = [...formData.product];
    newData.splice(index, 1);

    setFormData((prevFormData) => ({
      ...prevFormData,
      product: newData,
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
              <h3 className="text-center ">Product Group</h3>
              <form onSubmit={handleSubmit} className="">
                <Grid className="my-1" container spacing={2}>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      fullWidth
                      label="Product Group Name"
                      name="name"
                      onChange={handleChange}
                      variant={"standard"}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TextField
                        fullWidth
                        label="Quantity"
                        name="quantity"
                        onChange={handleProductNameChange}
                        variant={"standard"}
                        required
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
                <Grid className="my-1" container spacing={2}>
                  <Grid item xs={12} sm={12} md={12}>
                    <Table striped bordered>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Quantity</th>
                          <th>Add</th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.product.map((product, index) => {
                          return (
                            <tr key={index}>
                              <td>{product.productName}</td>
                              <td>{product.quantity}</td>
                              <td>
                                <IconButton
                                  type={faTrash}
                                  bgColor={"#E2001A"}
                                  onClick={() => handleRemoveProductRow(index)}
                                />
                              </td>
                            </tr>
                          );
                        })}
                        <tr>
                          <td>
                            <FormControl
                              sx={{ minWidth: "100% " }}
                              variant="standard"
                            >
                              <InputLabel shrink>Product Name</InputLabel>
                              <Select
                                value={newProductRow.productName}
                                label="Product Name"
                                name="productName"
                                onChange={handleProductNameChange}
                              >
                                {products.map((product) => {
                                  return (
                                    <MenuItem
                                      key={product.id}
                                      value={product.name}
                                    >
                                      {product.name}
                                    </MenuItem>
                                  );
                                })}
                              </Select>
                            </FormControl>
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              type="number"
                              name="quantity"
                              value={newProductRow.quantity}
                              onChange={handleNewProductRowChange}
                              variant="standard"
                            />
                          </td>
                          <td>
                            <IconButton
                              type={faPlus}
                              bgColor={"#1216ff"}
                              onClick={() =>
                                handleAddProductRow({ ...newProductRow })
                              }
                            />
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

export default AddProductGroup;
