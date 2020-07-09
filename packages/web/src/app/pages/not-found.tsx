import React from "react";
import * as Mui from "@material-ui/core";
import * as Router from "react-router-dom";

const useStyles = Mui.makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 0),
    display: "inline-block",
    maxWidth: "100%",
    height: ITEM_HEIGHT * 10,
  },
}));

const ITEM_HEIGHT = 48;

export interface NoResultsProps {}

function NotFound(props: NoResultsProps) {
  const NO_FOUND_IMG_SRC = "/assets/images/page-not-found.svg";
  const NO_FOUND_ALT = "Page not found";
  const NO_FOUND_TITLE = "The page you are looking for isn’t here";
  const NO_FOUND_BODY =
    "You either tried some shady route or you came here by mistake. Whichever it is, try using the below button.";
  const classes = useStyles();
  return (
    <>
      <Mui.Container maxWidth="xs">
        <Mui.Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          paddingBottom={2}
        >
          <img
            className={classes.root}
            alt={NO_FOUND_ALT}
            src={NO_FOUND_IMG_SRC}
          />
          <Mui.Typography variant="h4" align="center" gutterBottom>
            {NO_FOUND_TITLE}
          </Mui.Typography>
          <Mui.Typography align="center" gutterBottom>
            {NO_FOUND_BODY}
          </Mui.Typography>
          <br />
          <Mui.Button
            variant="contained"
            color="primary"
            size="large"
            component={Router.Link}
            to="/"
          >
            Take me back to home
          </Mui.Button>
        </Mui.Box>
      </Mui.Container>
    </>
  );
}

export default NotFound;
