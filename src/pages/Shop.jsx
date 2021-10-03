import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import ItemList from "../components/ItemList";
import MenuList from "../components/MenuList";
import { GlobalContext } from "../context/store";
import { Button } from "@material-ui/core";
import CartList from "../components/CartList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  title: {
    flexGrow: 1,
    fontSize: "1rem",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginRight: 0,
    marginLeft: 0,
  },
  filterTitle: {
    fontSize: "1rem",
    fontWeight: 500,
    marginBottom: 13,
  },
  cartTitle: {
    marginBottom: 25,
    fontSize: "1.5rem",
    fontWeight: 500,
  },
}));

export default function Shop() {
  const classes = useStyles();
  const [sortBy, setSortBy] = React.useState("title");
  const { cart, sortItem, login, user } = React.useContext(GlobalContext);

  const cartCount = () => {
    let cart_item = 0;
    cart.map(({ count }) => (cart_item = cart_item + count));
    return cart_item;
  };

  const handleLogin = () => {
    login({ name: "Raihan" });
  };

  const handleLogout = () => {
    login({});
  };

  const handleSorting = (e) => {
    setSortBy(e.target.value);
    sortItem(e.target.value);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute">
        <Toolbar className={classes.toolbar}>
          <RestaurantMenuIcon />
          <Typography
            component="h5"
            variant="h5"
            color="inherit"
            noWrap
            className={classes.title}
          >
            NO REDUX KITCHEN
          </Typography>

          {user.name === undefined ? (
            <Grid>
              <Typography
                component="h5"
                variant="h5"
                color="inherit"
                noWrap
                className={classes.title}
              >
                <Button color="inherit" onClick={handleLogin}>
                  LOGIN
                </Button>
              </Typography>
            </Grid>
          ) : (
            <React.Fragment>
              <Grid>
                <Typography
                  component="h5"
                  variant="h5"
                  color="inherit"
                  noWrap
                  className={classes.title}
                >
                  Hello {`${user.name}! `}
                  <Button color="inherit" onClick={handleLogout}>
                    (LOGOUT)
                  </Button>
                </Typography>
              </Grid>
              <IconButton color="inherit">
                <Badge badgeContent={cartCount() || "0"} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <MenuList />
            </Grid>
            <Grid item xs={6}>
              <div className={classes.filterTitle}>
                Sort By:{" "}
                <Select
                  className={classes.filterTitle}
                  value={sortBy}
                  onChange={handleSorting}
                >
                  <MenuItem value="title">Name</MenuItem>
                  <MenuItem value="price">Price</MenuItem>
                </Select>
              </div>
              <ItemList />
            </Grid>
            {user.name === undefined ? (
              <div />
            ) : (
              <Grid item xs={4}>
                <div className={classes.cartTitle}>Your Cart</div>
                <CartList />
              </Grid>
            )}
          </Grid>
        </Container>
      </main>
    </div>
  );
}
