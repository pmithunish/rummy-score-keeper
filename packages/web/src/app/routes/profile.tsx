import * as Pages from "src/app/pages";
import * as Router from "react-router-dom";
import * as React from "react";

export interface ProfileProps {}

function Profile(props: ProfileProps) {
  const { path } = Router.useRouteMatch();
  return (
    <>
      <Router.Switch>
        <Router.Route exact {...{ path }}>
          <Pages.Profile />
        </Router.Route>
        <Router.Route path="*">
          <Pages.NotFound />
        </Router.Route>
      </Router.Switch>
    </>
  );
}

export default Profile;
