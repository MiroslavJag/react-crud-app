import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layouts/Layout";
import AdminPage from "./components/Pages/AdminPages";
import HomePage from "./components/Pages/HomePage";
import EditItem from "./components/Pages/AdminPages/editItem";
import AddItem from "./components/Pages/AdminPages/addItem";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/admin" component={AdminPage} />
          <Route path="/add-item" component={AddItem} />
          <Route path="/edit-item" component={EditItem} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App
