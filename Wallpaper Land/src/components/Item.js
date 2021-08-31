import styles from "./Items.module.css";
import BackDrop from "./BackDrop";
import { useState } from "react";
import "boxicons";
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
    currentItem(src)
  }
  return (
    <li>
      <div className={styles.container}>
        <div className={styles.content}>
          <img alt='network error' onClick={showBackDrop} src={preview}></img>
          <div className={styles.tools}>
            <h3 className={styles.title}>{title}</h3>
            <box-icon name="download" color="#ffffff"></box-icon>
            <box-icon name="bookmark" color="#ffffff"></box-icon>
          </div>
        </div>
      </div>
    </li>
  );
}
export default Item;
