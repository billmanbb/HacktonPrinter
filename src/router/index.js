import React from "react";

import { Redirect } from "react-router-dom";

import CustomerInput from "../components/customerInput";
import CustomerWelcome from "../components/customerWelcome";

const routes = [
  {
      path: "/",
      exact: true,
      render: () => (
          <Redirect to="/customerWelcome"/>
      )
  },
  {
      path: "/customerWelcome",
      component: CustomerWelcome
  },
  {
      path: "/customerInput",
      component: CustomerInput
  }
  
];

export default routes;