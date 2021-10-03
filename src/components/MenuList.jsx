import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Menu from "./Menu";
import { GlobalContext } from "../context/store";

const useStyles = makeStyles((theme) => ({
  filterTitle: {
    fontSize: "0.9rem",
    color: "#937f7f",
    fontWeight: 600,
  },
  filterElement: {
    fontSize: "1rem",
    cursor: "pointer",
  },
}));

export default function MenuList() {
  const classes = useStyles();
  const { menus, getMenus, filterItem } = React.useContext(GlobalContext);

  React.useEffect(() => {
    getMenus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <List>
      <ListItem>
        <Typography component="h6" variant="h6" className={classes.filterTitle}>
          FILTER
        </Typography>
      </ListItem>
      <ListItem>
        <Typography
          component="h6"
          variant="h6"
          className={classes.filterElement}
          onClick={filterItem.bind(this, -1)}
        >
          All
        </Typography>
      </ListItem>
      {menus.map((menu) => (
        <Menu key={menu.id} menu={menu} />
      ))}
    </List>
  );
}
