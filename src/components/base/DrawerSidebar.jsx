import React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DrawerHeader from "./DrawerHeader";
import { drawerWidth } from "../../settings/consts";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faPlus,
  faCalculator,
  faList,
  faReceipt,
  faBoxes,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

const DrawerSidebar = ({ open, setOpen, theme }) => {
  const [dropDownOpen, setDropDownOpen] = React.useState(false);
  const [secondDropDownOpen, setSecondDropDownOpen] = React.useState(false);
  const [thirdDropDownOpen, setThirdDropDownOpen] = React.useState(false);
  const [fourthDropDownOpen, setFourthDropDownOpen] = React.useState(false);
  const [fifthDropDownOpen, setFifthDropDownOpen] = React.useState(false);
  const [sixthDropDownOpen, setSixthDropDownOpen] = React.useState(false);
  const [seventhDropDownOpen, setSeventhDropDownOpen] = React.useState(false);
  const [eighthDropDownOpen, setEighthDropDownOpen] = React.useState(false);
  const [ninethDropDownOpen, setNinethDropDownOpen] = React.useState(false);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          border: "none",
          width: drawerWidth,
          boxSizing: "border-box",
          boxShadow: "rgb(17, 17, 17) -10px 0px 20px!important",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader className="sidebar-header align-middle">
        <h5>Vishwas Shipping</h5>
        <IconButton
          sx={{ color: "white" }}
          onClick={() => {
            setOpen(false);
          }}
        >
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List className="side-menu bg-teal h-100">
        <ListItem disablePadding>
          <NavLink
            className="text-decoration-none nav-link text-white w-100"
            tag={Link}
            to={"main"}
          >
            <ListItemButton>
              <FontAwesomeIcon icon={faHome} className="mx-2" />
              Home
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink
            className="text-decoration-none text-white w-100"
            tag={Link}
            to={"about"}
          >
            <ListItemButton>
              <FontAwesomeIcon icon={faBriefcase} className="mx-2" />
              About
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink
            className="text-decoration-none text-white w-100"
            tag={Link}
            to={"contact"}
          >
            <ListItemButton>
              <FontAwesomeIcon icon={faPaperPlane} className="mx-2" />
              Contact
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink className="text-decoration-none d-flex text-white w-100">
            <ListItemButton onClick={() => setDropDownOpen(!dropDownOpen)}>
              <FontAwesomeIcon
                icon={faCalculator}
                className="mx-2 flex-grow-0 d-flex"
              />
              Account Master
              {dropDownOpen ? (
                <ExpandLess className="flex-grow-1 d-flex justify-content-end" />
              ) : (
                <ExpandMore className="flex-grow-1 d-flex justify-content-end" />
              )}
            </ListItemButton>
          </NavLink>
        </ListItem>
        <Collapse
          in={dropDownOpen}
          timeout="auto"
          unmountOnExit
          sx={{ backgroundColor: "#181e1a" }}
        >
          <ListItem component="div" disablePadding>
            <NavLink
              className="text-decoration-none text-white w-100"
              tag={Link}
              to={"add-account"}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <FontAwesomeIcon icon={faPlus} className="mx-2" />
                Add Account
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem component="div" disablePadding>
            <NavLink
              className="text-decoration-none text-white w-100"
              tag={Link}
              to={"account-list"}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <FontAwesomeIcon icon={faList} className="mx-2" />
                List
              </ListItemButton>
            </NavLink>
          </ListItem>
        </Collapse>
        <ListItem disablePadding>
          <NavLink className="text-decoration-none d-flex text-white w-100">
            <ListItemButton
              onClick={() => setEighthDropDownOpen(!eighthDropDownOpen)}
            >
              <FontAwesomeIcon
                icon={faReceipt}
                className="mx-2 flex-grow-0 d-flex"
              />
              Product Master
              {eighthDropDownOpen ? (
                <ExpandLess className="flex-grow-1 d-flex justify-content-end" />
              ) : (
                <ExpandMore className="flex-grow-1 d-flex justify-content-end" />
              )}
            </ListItemButton>
          </NavLink>
        </ListItem>
        <Collapse
          in={eighthDropDownOpen}
          timeout="auto"
          unmountOnExit
          sx={{ backgroundColor: "#181e1a" }}
        >
          <ListItem component="div" disablePadding>
            <NavLink
              className="text-decoration-none text-white w-100"
              tag={Link}
              to={"add-product"}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <FontAwesomeIcon icon={faPlus} className="mx-2" />
                Add Product
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem component="div" disablePadding>
            <NavLink
              className="text-decoration-none text-white w-100"
              tag={Link}
              to={"product-list"}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <FontAwesomeIcon icon={faList} className="mx-2" />
                List
              </ListItemButton>
            </NavLink>
          </ListItem>
        </Collapse>
        <ListItem disablePadding>
          <NavLink className="text-decoration-none d-flex text-white w-100">
            <ListItemButton
              onClick={() => setNinethDropDownOpen(!ninethDropDownOpen)}
            >
              <FontAwesomeIcon
                icon={faReceipt}
                className="mx-2 flex-grow-0 d-flex"
              />
              Product Group Master
              {ninethDropDownOpen ? (
                <ExpandLess className="flex-grow-1 d-flex justify-content-end" />
              ) : (
                <ExpandMore className="flex-grow-1 d-flex justify-content-end" />
              )}
            </ListItemButton>
          </NavLink>
        </ListItem>
        <Collapse
          in={ninethDropDownOpen}
          timeout="auto"
          unmountOnExit
          sx={{ backgroundColor: "#181e1a" }}
        >
          <ListItem component="div" disablePadding>
            <NavLink
              className="text-decoration-none text-white w-100"
              tag={Link}
              to={"add-product-group"}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <FontAwesomeIcon icon={faPlus} className="mx-2" />
                Add Product Group
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem component="div" disablePadding>
            <NavLink
              className="text-decoration-none text-white w-100"
              tag={Link}
              to={"product-group-list"}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <FontAwesomeIcon icon={faList} className="mx-2" />
                List
              </ListItemButton>
            </NavLink>
          </ListItem>
        </Collapse>
        <ListItem disablePadding>
          <NavLink className="text-decoration-none d-flex text-white w-100">
            <ListItemButton
              onClick={() => setSecondDropDownOpen(!secondDropDownOpen)}
            >
              <FontAwesomeIcon
                icon={faReceipt}
                className="mx-2 flex-grow-0 d-flex"
              />
              Transaction Master
              {secondDropDownOpen ? (
                <ExpandLess className="flex-grow-1 d-flex justify-content-end" />
              ) : (
                <ExpandMore className="flex-grow-1 d-flex justify-content-end" />
              )}
            </ListItemButton>
          </NavLink>
        </ListItem>
        <Collapse
          in={secondDropDownOpen}
          timeout="auto"
          unmountOnExit
          sx={{ backgroundColor: "#181e1a" }}
        >
          <ListItem component="div" disablePadding>
            <NavLink
              className="text-decoration-none text-white w-100"
              tag={Link}
              to={"add-transaction"}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <FontAwesomeIcon icon={faPlus} className="mx-2" />
                Add Transaction
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem component="div" disablePadding>
            <NavLink
              className="text-decoration-none text-white w-100"
              tag={Link}
              to={"transaction-list"}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <FontAwesomeIcon icon={faList} className="mx-2" />
                List
              </ListItemButton>
            </NavLink>
          </ListItem>
        </Collapse>
        <ListItem disablePadding>
          <NavLink className="text-decoration-none d-flex text-white w-100">
            <ListItemButton
              onClick={() => setThirdDropDownOpen(!thirdDropDownOpen)}
            >
              <FontAwesomeIcon
                icon={faBoxes}
                className="mx-2 flex-grow-0 d-flex"
              />
              Quotation Master
              {thirdDropDownOpen ? (
                <ExpandLess className="flex-grow-1 d-flex justify-content-end" />
              ) : (
                <ExpandMore className="flex-grow-1 d-flex justify-content-end" />
              )}
            </ListItemButton>
          </NavLink>
        </ListItem>
        <Collapse
          in={thirdDropDownOpen}
          timeout="auto"
          unmountOnExit
          sx={{ backgroundColor: "#181e1a" }}
        >
          <ListItem component="div" disablePadding>
            <NavLink
              className="text-decoration-none text-white w-100"
              tag={Link}
              to={"add-quotation"}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <FontAwesomeIcon icon={faPlus} className="mx-2" />
                Add Quotation
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem component="div" disablePadding>
            <NavLink
              className="text-decoration-none text-white w-100"
              tag={Link}
              to={"quotation-list"}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <FontAwesomeIcon icon={faList} className="mx-2" />
                List
              </ListItemButton>
            </NavLink>
          </ListItem>
        </Collapse>
        <ListItem disablePadding>
          <NavLink className="text-decoration-none d-flex text-white w-100">
            <ListItemButton
              onClick={() => setFourthDropDownOpen(!fourthDropDownOpen)}
            >
              <FontAwesomeIcon
                icon={faReceipt}
                className="mx-2 flex-grow-0 d-flex"
              />
              Settlement Master
              {fourthDropDownOpen ? (
                <ExpandLess className="flex-grow-1 d-flex justify-content-end" />
              ) : (
                <ExpandMore className="flex-grow-1 d-flex justify-content-end" />
              )}
            </ListItemButton>
          </NavLink>
        </ListItem>
        <Collapse
          in={fourthDropDownOpen}
          timeout="auto"
          unmountOnExit
          sx={{ backgroundColor: "#181e1a" }}
        >
          <ListItem component="div" disablePadding>
            <NavLink
              className="text-decoration-none text-white w-100"
              tag={Link}
              to={"add-settlement"}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <FontAwesomeIcon icon={faPlus} className="mx-2" />
                Add Settlement
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem component="div" disablePadding>
            <NavLink
              className="text-decoration-none text-white w-100"
              tag={Link}
              to={"settlement-list"}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <FontAwesomeIcon icon={faList} className="mx-2" />
                List
              </ListItemButton>
            </NavLink>
          </ListItem>
        </Collapse>
        <ListItem disablePadding>
          <NavLink className="text-decoration-none d-flex text-white w-100">
            <ListItemButton
              onClick={() => setFifthDropDownOpen(!fifthDropDownOpen)}
            >
              <FontAwesomeIcon
                icon={faTruck}
                className="mx-2 flex-grow-0 d-flex"
              />
              Delivery Master
              {fifthDropDownOpen ? (
                <ExpandLess className="flex-grow-1 d-flex justify-content-end" />
              ) : (
                <ExpandMore className="flex-grow-1 d-flex justify-content-end" />
              )}
            </ListItemButton>
          </NavLink>
        </ListItem>
        <Collapse
          in={fifthDropDownOpen}
          timeout="auto"
          unmountOnExit
          sx={{ backgroundColor: "#181e1a" }}
        >
          <ListItem component="div" disablePadding>
            <NavLink
              className="text-decoration-none text-white w-100"
              tag={Link}
              to={"add-delivery"}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <FontAwesomeIcon icon={faPlus} className="mx-2" />
                Add Delivery
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem component="div" disablePadding>
            <NavLink
              className="text-decoration-none text-white w-100"
              tag={Link}
              to={"delivery-list"}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <FontAwesomeIcon icon={faList} className="mx-2" />
                List
              </ListItemButton>
            </NavLink>
          </ListItem>
        </Collapse>
        <ListItem disablePadding>
          <NavLink className="text-decoration-none d-flex text-white w-100">
            <ListItemButton
              onClick={() => setSixthDropDownOpen(!sixthDropDownOpen)}
            >
              <FontAwesomeIcon
                icon={faBoxes}
                className="mx-2 flex-grow-0 d-flex"
              />
              Packing Master
              {sixthDropDownOpen ? (
                <ExpandLess className="flex-grow-1 d-flex justify-content-end" />
              ) : (
                <ExpandMore className="flex-grow-1 d-flex justify-content-end" />
              )}
            </ListItemButton>
          </NavLink>
        </ListItem>
        <Collapse
          in={sixthDropDownOpen}
          timeout="auto"
          unmountOnExit
          sx={{ backgroundColor: "#181e1a" }}
        >
          <ListItem component="div" disablePadding>
            <NavLink
              className="text-decoration-none text-white w-100"
              tag={Link}
              to={"add-packing"}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <FontAwesomeIcon icon={faPlus} className="mx-2" />
                Add Packing
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem component="div" disablePadding>
            <NavLink
              className="text-decoration-none text-white w-100"
              tag={Link}
              to={"packing-list"}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <FontAwesomeIcon icon={faList} className="mx-2" />
                List
              </ListItemButton>
            </NavLink>
          </ListItem>
        </Collapse>
        <ListItem disablePadding>
          <NavLink className="text-decoration-none d-flex text-white w-100">
            <ListItemButton
              onClick={() => setSeventhDropDownOpen(!seventhDropDownOpen)}
            >
              <FontAwesomeIcon
                icon={faBoxes}
                className="mx-2 flex-grow-0 d-flex"
              />
              Service Master
              {seventhDropDownOpen ? (
                <ExpandLess className="flex-grow-1 d-flex justify-content-end" />
              ) : (
                <ExpandMore className="flex-grow-1 d-flex justify-content-end" />
              )}
            </ListItemButton>
          </NavLink>
        </ListItem>
        <Collapse
          in={seventhDropDownOpen}
          timeout="auto"
          unmountOnExit
          sx={{ backgroundColor: "#181e1a" }}
        >
          <ListItem component="div" disablePadding>
            <NavLink
              className="text-decoration-none text-white w-100"
              tag={Link}
              to={"add-service-report"}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <FontAwesomeIcon icon={faPlus} className="mx-2" />
                Add Service Report
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem component="div" disablePadding>
            <NavLink
              className="text-decoration-none text-white w-100"
              tag={Link}
              to={"service-report-list"}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <FontAwesomeIcon icon={faList} className="mx-2" />
                List
              </ListItemButton>
            </NavLink>
          </ListItem>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default DrawerSidebar;
