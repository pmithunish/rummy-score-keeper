import * as React from "react";
import * as Router from "react-router-dom";
import * as Routes from "src/app/routes";
import * as Mui from "@material-ui/core";
import * as Services from "src/services";
import * as Mocks from "src/mocks";
import * as Configs from "src/configs";

const userUrlFactory = new Services.Factories.URL({
  route: Configs.API.ROUTES.USER.ROUTE,
});

const mockServer = new Mocks.API.Server({
  routes: [
    new Mocks.API.Routes.User.User({
      mockUser: Mocks.Data.User,
      urlFactory: userUrlFactory,
    }),
  ],
  urlFactory: new Services.Factories.URL({}),
});

const userService = new Services.User({
  httpManager: new Services.Managers.Mock({ server: mockServer }),
  urlFactory: userUrlFactory,
});

function App() {
  React.useEffect(() => {
    userService
      .readOne({ body: { username: "abhilash", password: "abhilash" } })
      .then((user) => console.log({ user }));
  }, []);

  return (
    <>
      <Mui.CssBaseline />
      <Router.BrowserRouter>
        <Routes.Global />
      </Router.BrowserRouter>
    </>
  );
}

export default App;
