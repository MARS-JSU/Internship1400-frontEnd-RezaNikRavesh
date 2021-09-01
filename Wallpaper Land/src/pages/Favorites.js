import { useState } from "react";
import styles from "./Favorites.module.css";
import Item from "../components/Item";
function Favorites() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("DATA")));
  function showResult() {
    let favs = 0;
    let list = [];
    if (items === null) return null;
    for (const item of items)
      if (item.favorite) {
        list.push(
          <Item
            key={item.id}
            title={item.title}
            src={item.image}
            preview={item.preview}
            id={item.id}
            downloaded={item.downloaded}
            favorite={item.favorite}
            category={item.category}
          />
        );
      }

    return list.length > 0 ? list : <i class="bx bxs-inbox"></i>;
  }
  return <div className={styles.container}>{showResult()}</div>;
}

export default Favorites;
