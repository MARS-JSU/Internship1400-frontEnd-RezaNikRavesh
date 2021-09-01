import styles from "./BelowBox.module.css";
import "boxicons";
import getData from "../js/data";

function BelowBox({ title, imageSrc, saved, saveItem }) {
  function save() {
    if (JSON.parse(localStorage.getItem("DATA")) === null) {
      let temp = getData();
      for (const item of temp) {
        if (item.title === title) {
          item.favorite = true;
        }
      }
      localStorage.setItem("DATA", JSON.stringify(temp));
    } else {
      let temp = JSON.parse(localStorage.getItem("DATA"));
      for (const item of temp) {
        if (item.title === title) {
          item.favorite = true;
        }
      }
      localStorage.setItem("DATA", JSON.stringify(temp));
    }
    saveItem(true);
  }
  function remove() {
    let temp = JSON.parse(localStorage.getItem("DATA"));
    for (const item of temp) {
      if (item.title === title) {
        item.favorite = false;
      }
    }
    localStorage.setItem("DATA", JSON.stringify(temp));
    saveItem(false);
  }
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <a href={imageSrc}>
        <box-icon name="download" color="#ffffff"></box-icon>
      </a>

      {saved ? (
        <span onClick={remove}>
          <box-icon
            name="bookmark-star"
            type="solid"
            color="#ffffff"
          ></box-icon>
        </span>
      ) : (
        <span onClick={save}>
          <box-icon name="bookmark" color="#ffffff"></box-icon>
        </span>
      )}
    </div>
  );
}
export default BelowBox;
