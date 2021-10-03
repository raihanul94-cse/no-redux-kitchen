import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export default function Cart({ item }) {
  return (
    <TableRow key={item.item.item_id}>
      <TableCell>{item.item.title}</TableCell>
      <TableCell>${item.item.price}</TableCell>
      <TableCell>{item.count}</TableCell>
    </TableRow>
  );
}
