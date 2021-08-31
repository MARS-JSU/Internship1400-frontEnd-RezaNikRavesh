import Item from "./Item";
import { useState } from "react";
import styles from "./ItemsList.module.css";
import BackDrop from "./BackDrop";
function ItemsList({ data, category }) {
  const [backDrop, setBackDrop] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  return (
    <div>
      <ul className={styles.list}>
        {data.map((item) => {
          if (category === "All")
            return (
              <Item
                key={item.id}
                title={item.title}
                src={item.image}
                preview={item.preview}
                id={item.id}
                downloaded={item.downloaded}
                favorite={item.favorite}
                category={item.category}
                currentItem={setCurrentItem}
                toggleBackDrop={setBackDrop}
              />
            );
          else if (category === item.category) {
            return (
              <Item
                key={item.id}
                title={item.title}
                src={item.image}
                preview={item.preview}
                id={item.id}
                downloaded={item.downloaded}
                favorite={item.favorite}
                category={item.category}
                currentItem={setCurrentItem}
                toggleBackDrop={setBackDrop}
              />
            );
          }
        })}
      </ul>
      {backDrop ? (
        <BackDrop src={currentItem} toggleBackDrop={setBackDrop} />
      ) : null}
    </div>
  );
}
export default ItemsList;
