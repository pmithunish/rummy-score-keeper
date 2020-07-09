import * as Pages from "src/app/pages";
import * as Router from "react-router-dom";
import * as React from "react";

export interface SettingsProps {}

function Settings(props: SettingsProps) {
  const { path } = Router.useRouteMatch();
  return (
    <>
      <Router.Switch>
        <Router.Route exact {...{ path }}>
          <Pages.Settings />
        </Router.Route>
        <Router.Route path="*">
          <Pages.NotFound />
        </Router.Route>
      </Router.Switch>
    </>
  );
}

export default Settings;
