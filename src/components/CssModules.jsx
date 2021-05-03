import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- CssModules Style -</p>
      <button className={classes.button}>FILGHT!</button>
    </div>
  );
};
