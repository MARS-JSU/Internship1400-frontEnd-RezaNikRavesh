import ItemsList from "../components/ItemsList";
import styles from "./AllWallPapers.module.css";
import Categories from "../components/Categories";
import { useState } from "react";
import getData from "../js/data";
function AllWallPapers() {
 

  const [category, setCategory] = useState("All");
  return (
    <div>
      <div className={styles.container}>
        <Categories active={category} category={setCategory} />
        <div className={styles.wallpapers}>
          {JSON.parse(localStorage.getItem('DATA'))===null ? <ItemsList data={getData()} category={category} /> : <ItemsList data={JSON.parse(localStorage.getItem('DATA'))} category={category} />}
        </div>
      </div>
    </div>
  );
}

export default AllWallPapers;
