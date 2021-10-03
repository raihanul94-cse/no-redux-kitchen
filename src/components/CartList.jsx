import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { GlobalContext } from "../context/store";
import Cart from "./Cart";

const useStyles = makeStyles({
  table: {},
});


export default function CartList() {
  const classes = useStyles();
  const { cart } = React.useContext(GlobalContext);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Price/Unit</TableCell>
            <TableCell>Unit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item) => (
            <Cart item={item} key={item.item.item_id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
