import * as Pages from "src/app/pages";
import * as Routes from "src/app/routes";
import * as Router from "react-router-dom";
import React from "react";

interface GlobalProps {}

function Global(props: GlobalProps) {
  return (
    <Router.Switch>
      <Router.Route exact path="/">
        <Pages.Home />
      </Router.Route>
      <Router.Route exact path="/profile">
        <Routes.Profile />
      </Router.Route>
      <Router.Route exact path="/settings">
        <Routes.Settings />
      </Router.Route>
      <Router.Route path="*">
        <Pages.NotFound />
      </Router.Route>
    </Router.Switch>
  );
}

// const AuthGuard = Mobx.observer(function ({
//   children,
// }: {
//   children: JSX.Element;
// }) {
//   const authStore = React.useContext(App.Contexts.authStore);

//   return (
//     <>
//       {authStore.activeUser && <>{children}</>}
//       {!authStore.activeUser && (
//         <div
//           style={{
//             width: "100vw",
//             height: "100vh",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Mui.CircularProgress />
//         </div>
//       )}
//     </>
//   );
// });

export default Global;
