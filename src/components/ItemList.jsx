import React from "react";
import { GlobalContext } from "../context/store";
import Item from "./Item";

export default function ItemList() {
  const { items, getItems, filtered_items } = React.useContext(GlobalContext);
  React.useEffect(() => {
    getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      {!filtered_items.isAll
        ? filtered_items.items.length > 0
          ? filtered_items.items.map((item) => (
              <Item item={item} key={item.title} />
            ))
          : "No items are available for now!!"
        : items.map((item) => <Item item={item} key={item.title} />)}
    </React.Fragment>
  );
}
