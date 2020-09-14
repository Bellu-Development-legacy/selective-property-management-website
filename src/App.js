import React from "react";
import { Switch, Route } from "react-router-dom";
import pageData from "./api/data";

// Global Assets
import "./assets/styles/main.scss";
import "typeface-muli";
import "typeface-eb-garamond";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Page from "./pages/Page"

export default function App() {
  const pages = pageData.pages.map(page => <Route key={page.route} path={page.route} children={<Page />} />);
  return (
    <Switch>
      <Route exact path="/">
        <Index />
      </Route>
      {pages}
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}
