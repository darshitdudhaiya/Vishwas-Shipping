import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SubMenu from "./Submenu";
import UseWindowSize from "../../components/UseWindowSize";

const SideBar = ({ isOpen, toggle }) => {

  const [windowWidth, windowHeight] = UseWindowSize()
  useEffect(() => {
    if (windowWidth <= 768) {
      console.log("Change");
      toggle(false);
    } else {
      toggle(true);
    }
    console.log(windowWidth)
  }, [windowWidth]);

  return (
    <div  style={{zIndex:999}} className={classNames("sidebar top-0 start-0 position-fixed", { "is-open": isOpen })}>
      <div className="sidebar-header">
        <span color="info" onClick={()=>{toggle(prev=>!prev)}} style={{ color: "#fff" }}>
          &times;
        </span>
        <h3>Vishvash Shipping</h3>
      </div>
      <div className="side-menu overflow-auto">
        <Nav vertical className="list-unstyled pb-3">
          <NavItem>
            <NavLink
              className="text-decoration-none nav-link text-white"
              tag={Link}
              to={"home"}
            >
              <FontAwesomeIcon icon={faHome} className="mx-2" />
              Home
            </NavLink>
          </NavItem>
          <SubMenu title="Accouning" className="text-white" icon={faCopy} items={submenus[1]} />
          <NavItem>
            <NavLink
              className="text-decoration-none text-white"
              tag={Link}
              to={"about"}
            >
              <FontAwesomeIcon icon={faBriefcase} className="mx-2" />
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="text-decoration-none text-white"
              tag={Link}
              to={"contact"}
            >
              <FontAwesomeIcon icon={faPaperPlane} className="mx-2" />
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};

const submenus = [
  [
    {
      title: "Home 1",
      target: "home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
  ],
  [
    {
      title: "Add-account",
      target: "add-account",
    },
    {
      title: "List",
      target: "list",
    },
  ],
];

export default SideBar;
