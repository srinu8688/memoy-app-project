import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.pLAYWrapper}>
          <div className={styles.pLAY}>
            <div className={styles.pLAYChild} />
            <div className={styles.frameGroup}>
              <div className={styles.tEXTParent}>
                <b className={styles.tEX}>03</b>
                <div className={styles.frameItem} />
              </div>
              <div className={styles.frameInner} />
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.heading1LifeSkillsParent}>
            <div className={styles.heading1}>If they’re same</div>
            <div className={styles.frameWrapper}>
              <div className={styles.ellipseParent}>
                <div className={styles.ellipseDiv} />
                <img
                  className={styles.cardIcon}
                  loading="lazy"
                  alt=""
                  src="/card-1@2x.png"
                />
                <img className={styles.cardIcon1} alt="" src="/card-2@2x.png" />
              </div>
            </div>
          </div>
          <div className={styles.heading1LifeSkillsWrapper}>
            <h2 className={styles.heading11}>Its a match !</h2>
          </div>
        </div>
      </div>
      <div className={styles.heading1LifeSkillsContainer}>
        <div className={styles.heading12}>otherwise retry :(</div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
