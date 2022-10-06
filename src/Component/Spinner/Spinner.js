import ReactDom from "react-dom";

import styles from "./Spinner.module.css";

const BackDrop = () => {
  return <div className={styles.backdrop}> </div>;
};

const SpinneroverLay = () => {
  return (
    <div className={styles.spinner_root}>
      <div className={styles.spinner}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};


const Spinner = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <SpinneroverLay />,
        document.getElementById("root")
      )}
      {ReactDom.createPortal(
        <BackDrop />,
        document.getElementById("root")
      )}
    </>
  );
};

export default Spinner;
