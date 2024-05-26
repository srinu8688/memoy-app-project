import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.background} />
          <div className={styles.frameParent}>
            <img className={styles.frameIcon} alt="" src="/card.svg" />
            <div className={styles.heart}>
              <img
                className={styles.heartIcon}
                loading="lazy"
                alt=""
                src="/heart-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameWrapper}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.frameDiv}>
                <div className={styles.parent}>
                  <b className={styles.b}>02</b>
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.ellipseDiv} />
              </div>
            </div>
          </div>
          <h2 className={styles.heading1}>Select a blue card.</h2>
        </div>
        <div className={styles.heading1LifeSkillsWrapper}>
          <div className={styles.heading11}>It has alphabets.</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
