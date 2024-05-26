import { useMemo } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({
  className = "",
  sTART,
  propBackgroundColor,
  propBackgroundColor1,
  propLeft,
  onGroupContainerClick,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const sTARTStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.cogWrapper}>
        <div className={styles.cog}>
          <img
            className={styles.cogIcon}
            loading="lazy"
            alt=""
            src="/cog.svg"
          />
        </div>
      </div>
      <div className={styles.starParent}>
        <div className={styles.star}>
          <img
            className={styles.starIcon}
            loading="lazy"
            alt=""
            src="/star.svg"
          />
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/vector-123.svg" />
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
        </div>
      </div>
      <div className={styles.frameGroup} onClick={onGroupContainerClick}>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <div className={styles.rectangleGroup} style={frameDivStyle}>
            <div className={styles.frameChild1} style={rectangleDivStyle} />
            <div className={styles.start} style={sTARTStyle}>
              {sTART}
            </div>
            <div className={styles.vectorGroup}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle-15.svg"
              />
              <img className={styles.ellipseIcon} alt="" src="/ellipse-3.svg" />
            </div>
          </div>
        </div>
        <div className={styles.polygonParent}>
          <img
            className={styles.polygonIcon}
            loading="lazy"
            alt=""
            src="/polygon-1.svg"
          />
          <div className={styles.ellipseDiv} />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  sTART: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propBackgroundColor1: PropTypes.any,
  propLeft: PropTypes.any,

  /** Action props */
  onGroupContainerClick: PropTypes.func,
};

export default FrameComponent;
