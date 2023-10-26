import React from "react";
import classNames from "classnames";
import { Route, Routes } from "react-router-dom";


import AddAccount from "../pages/views/AddAccount";
import Home from "../pages/views/Home";
import AccountTransaction from "../pages/views/AccountTransaction";
import AccountList from "../pages/views/AccountList";
import TransactionList from "../pages/views/TransactionList";
import AddQuotation from "../pages/views/AddQuotation";
import AddSettlement from "../pages/views/AddSettlement";
import AddDelivery from "../pages/views/AddDelivery";
import AddPacking from "../pages/views/AddPacking";
import AddServiceReport from "../pages/views/AddServiceReport";
import QuotationList from "../pages/views/QuotationList";
import SettlementList from "../pages/views/SettlementList";
import DeliveryList from "../pages/views/DeliveryList";
import PackingList from "../pages/views/PackingList";
import AddProduct from "../pages/views/AddProduct";
import AddProductGroup from "../pages/views/AddProductGroup";

const Content = ({ sidebarIsOpen, toggleSidebar, handleCurrentWindow }) => {
  return (
    <div
      className={classNames(
        "content w-100 overflow-auto d-flex flex-column position-relative",
        { "is-open": sidebarIsOpen }
      )}
    >
      {/* <Topbar toggleSidebar={toggleSidebar} /> */}
      <div style={{ height: "calc(100vh - 120px)", overflow: "hidden" }}>
        <div style={{ height: "100%" }} className="overflow-auto p-2">
          <Routes>
            <Route
              exact
              path="main"
              element={<Home handleCurrentWindow={handleCurrentWindow} />}
            />
            <Route
              exact
              path={`about`}
              element={<div className="text-black">About</div>}
            />
            <Route
              exact
              path="/contact"
              element={<div className="text-black">Contact</div>}
            />
            <Route
              exact
              path="/add-account"
              element={
                <AddAccount
                  className="flex-grow-1 "
                  handleCurrentWindow={handleCurrentWindow}
                />
              }
            />
            <Route
              exact
              path="/add-transaction"
              element={
                <AccountTransaction
                  className="flex-grow-1 "
                  handleCurrentWindow={handleCurrentWindow}
                />
              }
            />
            <Route
              exact
              path="/add-quotation"
              element={
                <AddQuotation
                  className="flex-grow-1 "
                  handleCurrentWindow={handleCurrentWindow}
                />
              }
            />
            <Route
              exact
              path="/add-settlement"
              element={
                <AddSettlement
                  className="flex-grow-1 "
                  handleCurrentWindow={handleCurrentWindow}
                />
              }
            />
            <Route
              exact
              path="/add-delivery"
              element={
                <AddDelivery
                  className="flex-grow-1 "
                  handleCurrentWindow={handleCurrentWindow}
                />
              }
            />
            <Route
              exact
              path="/add-packing"
              element={
                <AddPacking
                  className="flex-grow-1 "
                  handleCurrentWindow={handleCurrentWindow}
                />
              }
            />
            <Route
              exact
              path="/add-service-report"
              element={
                <AddServiceReport
                  className="flex-grow-1 "
                  handleCurrentWindow={handleCurrentWindow}
                />
              }
            />
            <Route
              exact
              path="/add-product"
              element={
                <AddProduct
                  className="flex-grow-1 "
                  handleCurrentWindow={handleCurrentWindow}
                />
              }
            />
            <Route
              exact
              path="/add-product-group"
              element={
                <AddProductGroup
                  className="flex-grow-1 "
                  handleCurrentWindow={handleCurrentWindow}
                />
              }
            />
            <Route
              exact
              path="/account-list"
              element={
                <AccountList handleCurrentWindow={handleCurrentWindow} />
              }
            />
            <Route
              exact
              path="/transaction-list"
              element={
                <TransactionList handleCurrentWindow={handleCurrentWindow} />
              }
            />
            <Route
              exact
              path="/quotation-list"
              element={
                <QuotationList handleCurrentWindow={handleCurrentWindow} />
              }
            />
            <Route
              exact
              path="/settlement-list"
              element={
                <SettlementList handleCurrentWindow={handleCurrentWindow} />
              }
            />
            <Route
              exact
              path="/delivery-list"
              element={
                <DeliveryList handleCurrentWindow={handleCurrentWindow} />
              }
            />
            <Route
              exact
              path="/packing-list"
              element={
                <PackingList handleCurrentWindow={handleCurrentWindow} />
              }
            />
            {/* {routes.map((route) => {
              return (<Route key={route.id} exact path={route.path} element={route.element} />)
            })} */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Content;
