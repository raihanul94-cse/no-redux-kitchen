import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import { GlobalContext } from "../context/store";

const useStyles = makeStyles((theme) => ({
  filterElement: {
    fontSize: "1rem",
    cursor: "pointer",
  },
}));

export default function Menu({ menu }) {
  const classes = useStyles();
  const { filterItem } = React.useContext(GlobalContext);
  return (
    <React.Fragment>
      <ListItem>
        <Typography
          component="h6"
          variant="h6"
          className={classes.filterElement}
          onClick={filterItem.bind(this, menu.id)}
        >
          {menu.text}
        </Typography>
      </ListItem>
    </React.Fragment>
  );
}
