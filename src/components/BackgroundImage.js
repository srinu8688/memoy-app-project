import styles from "./BackgroundImage.module.css";

const BackgroundImage = ({ className = "" }) => {
  return (
    <div className={[styles.backgroundImage, className].join(" ")}>
      <div className={styles.cardParent}>
        <div className={styles.card}>
          <div className={styles.background} />
          <div className={styles.heartContainerParent}>
            <img className={styles.heartContainerIcon} alt="" src="/card.svg" />
            <div className={styles.heart}>
              <img
                className={styles.heartIcon}
                loading="lazy"
                alt=""
                src="/heart.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.multiCard}>
          <div className={styles.card1}>
            <div className={styles.background1} />
            <div className={styles.heartPairParent}>
              <img className={styles.heartPairIcon} alt="" src="/card.svg" />
              <div className={styles.heart1}>
                <img
                  className={styles.heartIcon1}
                  loading="lazy"
                  alt=""
                  src="/heart.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.card2}>
            <div className={styles.background2} />
            <div className={styles.frameParent}>
              <img className={styles.frameIcon} alt="" src="/card.svg" />
              <div className={styles.heart2}>
                <img
                  className={styles.heartIcon2}
                  loading="lazy"
                  alt=""
                  src="/heart.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.cardGroup}>
            <div className={styles.card3}>
              <div className={styles.background3} />
              <div className={styles.frameGroup}>
                <img className={styles.frameIcon1} alt="" src="/card.svg" />
                <div className={styles.heart3}>
                  <img
                    className={styles.heartIcon3}
                    loading="lazy"
                    alt=""
                    src="/heart-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.card4}>
              <div className={styles.background4} />
              <div className={styles.frameContainer}>
                <img className={styles.frameIcon2} alt="" src="/card.svg" />
                <div className={styles.heart4}>
                  <img
                    className={styles.heartIcon4}
                    loading="lazy"
                    alt=""
                    src="/heart-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.card5}>
              <div className={styles.background5} />
              <div className={styles.frameDiv}>
                <img className={styles.frameIcon3} alt="" src="/card.svg" />
                <div className={styles.heart5}>
                  <img
                    className={styles.heartIcon5}
                    loading="lazy"
                    alt=""
                    src="/heart-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BackgroundImage.propTypes = {
  className: PropTypes.string,
};

export default BackgroundImage;
