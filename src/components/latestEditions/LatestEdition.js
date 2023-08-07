import React from "react";
import ascesionImg from "../../Media/Ascesion.jpeg";
import styles1 from "./LatestEdition.module.css";

function LatestEdition() {
  return (
    <div className={styles1.container}>
      <img className={styles1.ascesionImg} src={ascesionImg} alt="Ascesion" />
      <section>
      <div className={`${styles1.scroll} ${styles1.text}`}>
       <div>
        ASCESION ASCESION ASCESION ASCESION
        </div>
        <div>
        ASCESION ASCESION ASCESION 
        </div>
      </div>
      </section>
    </div>
  );
}

export default LatestEdition;
