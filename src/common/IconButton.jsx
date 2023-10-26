import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = ({ type, bgColor ,onClick}) => {
  return (
    <button className="btn-circle" onClick={onClick}>
      <FontAwesomeIcon icon={type} />
      <div style={{ backgroundColor: bgColor }}></div>
    </button>
  );
};

export default IconButton;
