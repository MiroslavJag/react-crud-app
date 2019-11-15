import React from "react";
import styled from "styled-components";
import NavigationItem from "../NavigationItem";

const NavigationList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
`;

const NavigationItems = () => (
  <NavigationList>
    <NavigationItem link="/" exact>Home</NavigationItem>
    <NavigationItem link="/admin">Edit Items</NavigationItem>
    <NavigationItem link="/add-item">Add Item</NavigationItem>
  </NavigationList>
);

export default NavigationItems;
