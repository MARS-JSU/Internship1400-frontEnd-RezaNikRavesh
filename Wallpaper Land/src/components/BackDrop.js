import styles from "./BackDrop.module.css";
function BackDrop({ src, toggleBackDrop }) {
  function closeBackDrop() {
    toggleBackDrop(false);
  }
  return (
    <div className={styles.container}>
      <span onClick={closeBackDrop}>
        <box-icon name="x" color="#ffffff"></box-icon>
      </span>
      <img className={styles.image} src={src}></img>
    </div>
  );
}
export default BackDrop;
