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
<<<<<<< HEAD
import Failure from "./pages/Failure";
import Thanks from "./pages/Thanks";
=======
>>>>>>> 66cf1064c54cd6b6b0eb4bdc866c0c4174c8e13e

export default function App() {
  const pages = pageData.pages.map(page => <Route key={page.route} path={page.route} children={<Page />} />);
  return (
    <Switch>
      <Route exact path="/">
        <Index />
      </Route>
      {pages}
<<<<<<< HEAD
      <Route path="/thank-you">
        <Thanks />
      </Route>
      <Route path="/form-failure">
        <Failure />
      </Route>
=======
>>>>>>> 66cf1064c54cd6b6b0eb4bdc866c0c4174c8e13e
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}
