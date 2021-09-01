import styles from "./BelowBox.module.css";
import "boxicons";
function BelowBox({ title }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <box-icon name="download" color="#ffffff"></box-icon>
      <box-icon name="bookmark" color="#ffffff"></box-icon>
    </div>
  );
}
export default BelowBox;
