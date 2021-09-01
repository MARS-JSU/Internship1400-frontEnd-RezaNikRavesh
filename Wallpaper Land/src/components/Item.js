import styles from "./Items.module.css";
import BackDrop from "./BackDrop";
import { useState } from "react";
import BelowBox from "./BelowBox";
function Item({
  src,
  title,
  id,
  downloaded,
  favorite,
  category,
  preview,
  toggleBackDrop,
  currentItem,
}) {
  function showBackDrop() {
    toggleBackDrop(true);
    currentItem(src);
  }
  return (
    <li>
      <div className={styles.container}>
        <div className={styles.content}>
          <img alt="network error" onClick={showBackDrop} src={preview}></img>
          <div className={styles.tools}>
            <BelowBox title={title} />
          </div>
        </div>
      </div>
    </li>
  );
}
export default Item;
