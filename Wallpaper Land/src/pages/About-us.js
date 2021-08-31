import classes from "./About-us.module.css";
function AboutUs() {
  return (
    // <div>
    //   <h1>AboutUs</h1>
    // </div>
    <div className={classes.contaienr}>
      <p className={classes.content}>
        This is a simple background downloader app made by reactjs.
        <br />
        You can save your favorites backgrounds and find them on "Favorites"
        page
        <br />
      </p>
    </div>
  );
}

export default AboutUs;
