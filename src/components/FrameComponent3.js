import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.background} />
          <div className={styles.cardParent}>
            <img className={styles.cardIcon} alt="" src="/card.svg" />
            <div className={styles.heart}>
              <img className={styles.heartIcon} alt="" src="/heart.svg" />
            </div>
          </div>
          <img className={styles.cardIcon1} alt="" src="/card1@2x.png" />
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.frameContainer}>
                <div className={styles.parent}>
                  <b className={styles.b}>01</b>
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.ellipseDiv} />
              </div>
            </div>
            <div className={styles.heading1LifeSkillsWrapper}>
              <h2 className={styles.heading1}>Select a pink card.</h2>
            </div>
          </div>
        </div>
        <div className={styles.heading11}>It has images.</div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
