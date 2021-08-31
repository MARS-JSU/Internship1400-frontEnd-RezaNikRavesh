import { useState } from "react";
import styles from "./CategoryItem.module.css";
function CategoryItem({ text, active, value }) {
  console.log(active)
 
  function clickHandler(e) {
    e.preventDefault();
    value(e.target.innerText);
    console.log(active)
  }
  return active ? (
    <a
      onClick={clickHandler}
      href="/"
      className={(styles.drop_item, styles.active)}
    >
      {text}
    </a>
  ) : (
    <a onClick={clickHandler} href="/" className={styles.drop_item}>
      {text}
    </a>
  );
}
export default CategoryItem;
