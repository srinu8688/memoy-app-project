import { useCallback } from "react";
import styles from "./ActivityScreen1.module.css";

const ActivityScreen1 = ({ className = "" }) => {
  const onCardContainer1Click = useCallback(() => {
    // Please sync "Activity Screen" to the project
  }, []);

  return (
    <div className={[styles.activityScreen, className].join(" ")}>
      <div className={styles.cardContainer}>
        <div className={styles.heartIconWrapper}>
          <div className={styles.heartIcon}>
            <div className={styles.wrapperGroup149}>
              <img
                className={styles.wrapperGroup149Child}
                loading="lazy"
                alt=""
                src="/group-1492.svg"
              />
            </div>
            <div className={styles.heading1}>Select a card.</div>
          </div>
        </div>
        <div className={styles.cardParent}>
          <div className={styles.card}>
            <div className={styles.background} />
            <div className={styles.card1}>
              <img className={styles.innerCardIcon} alt="" src="/card.svg" />
              <div className={styles.heart}>
                <img
                  className={styles.heartIcon1}
                  loading="lazy"
                  alt=""
                  src="/heart.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.multiCardContainer}>
            <div className={styles.card2}>
              <div className={styles.background1} />
              <div className={styles.heartSetParent}>
                <img className={styles.heartSetIcon} alt="" src="/card.svg" />
                <div className={styles.heart1}>
                  <img
                    className={styles.heartIcon2}
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.card3} onClick={onCardContainer1Click}>
              <div className={styles.background2} />
              <div className={styles.frameParent}>
                <img className={styles.frameIcon} alt="" src="/card.svg" />
                <div className={styles.heart2}>
                  <img
                    className={styles.heartIcon3}
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardGroup}>
            <div className={styles.card4}>
              <div className={styles.background3} />
              <div className={styles.frameGroup}>
                <img className={styles.frameIcon1} alt="" src="/card.svg" />
                <div className={styles.heart3}>
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
              <div className={styles.background4} />
              <div className={styles.frameContainer}>
                <img className={styles.frameIcon2} alt="" src="/card.svg" />
                <div className={styles.heart4}>
                  <img
                    className={styles.heartIcon5}
                    loading="lazy"
                    alt=""
                    src="/heart-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.card6}>
              <div className={styles.background5} />
              <div className={styles.frameDiv}>
                <img className={styles.frameIcon3} alt="" src="/card.svg" />
                <div className={styles.heart5}>
                  <img
                    className={styles.heartIcon6}
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

ActivityScreen1.propTypes = {
  className: PropTypes.string,
};

export default ActivityScreen1;
