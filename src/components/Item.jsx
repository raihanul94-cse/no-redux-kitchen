import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import { GlobalContext } from "../context/store";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    marginBottom: theme.spacing(2),
  },
  itemRoot: {
    fontSize: "1rem",
  },
  itemTitle: {
    fontWeight: 500,
    paddingBottom: 1,
  },
  itemPrice: {
    paddingTop: 0,
    color: "#937f7f",
  },
  itemDescription: {
    paddingTop: 0,
    color: "#937f7f",
    fontSize: "0.85rem",
  },
  itemButton: {
    width: 130,
  },
}));
export default function Item({ item }) {
  const classes = useStyles();
  const { addToCart, user } = React.useContext(GlobalContext);
  return (
    <Paper className={classes.paper}>
      <List className={classes.itemRoot}>
        <ListItem className={classes.itemTitle}>{item.title}</ListItem>
        {item.description && (
          <ListItem className={classes.itemDescription}>
            {item.description}
          </ListItem>
        )}
        <ListItem className={classes.itemPrice}>${item.price}</ListItem>
      </List>
      <Button
        disabled={user.name === undefined}
        className={classes.itemButton}
        variant="contained"
        color="primary"
        onClick={addToCart.bind(this, item)}
      >
        ADD TO CART
      </Button>
    </Paper>
  );
}
