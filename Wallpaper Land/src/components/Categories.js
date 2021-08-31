import { useState } from "react";
import styles from "./Categories.module.css";
import CategoryItem from "./CategoryItem";
function Categories({ category, active }) {
  const [categories, setCategories] = useState([
    "All",
    "Car",
    "Nature",
    "Animal",
    "Sky",
  ]);
  return (
    <div className={styles.container}>
      {categories.map((item) => {
        if (item === active) {
          return <CategoryItem value={category} text={item} active={active} />;
        } else {
          return <CategoryItem value={category} text={item} />;
        }
      })}
    </div>
  );
}
export default Categories;
