import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IntroScreen2.module.css";

const IntroScreen2 = () => {
  const navigate = useNavigate();

  const onGroup1Click = useCallback(() => {
    navigate("/intro-screen");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/instruction-screen");
  }, [navigate]);

  return (
    <div className={styles.introScreen}>
      <div className={styles.introScreenInner}>
        <div className={styles.wrapperGroup149Parent}>
          <div className={styles.wrapperGroup149}>
            <img
              className={styles.wrapperGroup149Child}
              loading="lazy"
              alt=""
              src="/group-1491.svg"
            />
          </div>
          <div className={styles.heading1}>{`Can you help me get some ? `}</div>
        </div>
      </div>
      <main className={styles.image5Parent}>
        <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
        <img className={styles.frameChild} alt="" src="/vector-123.svg" />
        <div className={styles.frameItem} />
        <div className={styles.frameParent}>
          <div className={styles.vectorParent}>
            <img className={styles.frameInner} alt="" src="/vector-1.svg" />
            <div className={styles.wrapperLeftParent}>
              <div className={styles.wrapperLeft}>
                <img className={styles.leftIcon} alt="" src="/left.svg" />
              </div>
              <img
                className={styles.rightIcon}
                loading="lazy"
                alt=""
                src="/right@2x.png"
              />
              <img
                className={styles.unionIcon}
                loading="lazy"
                alt=""
                src="/union.svg"
              />
              <div className={styles.faceParent}>
                <img className={styles.faceIcon} alt="" src="/face.svg" />
                <div className={styles.intersectParent}>
                  <img
                    className={styles.intersectIcon}
                    alt=""
                    src="/intersect.svg"
                  />
                  <div className={styles.wrapperBlushes}>
                    <img
                      className={styles.blushesIcon}
                      alt=""
                      src="/blushes.svg"
                    />
                  </div>
                </div>
                <div className={styles.wrapperShade}>
                  <img className={styles.shadeIcon} alt="" src="/shade.svg" />
                </div>
                <div className={styles.unionParent}>
                  <img
                    className={styles.unionIcon1}
                    alt=""
                    src="/union-1.svg"
                  />
                  <img
                    className={styles.leftIcon1}
                    loading="lazy"
                    alt=""
                    src="/left-11@2x.png"
                  />
                  <img
                    className={styles.rightIcon1}
                    loading="lazy"
                    alt=""
                    src="/right-1.svg"
                  />
                  <img
                    className={styles.noseIcon}
                    loading="lazy"
                    alt=""
                    src="/nose.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.ellipseDiv} />
            <div className={styles.frameChild1} />
            <div className={styles.frameChild2} />
          </div>
          <img className={styles.ellipseIcon} alt="" src="/ellipse-313.svg" />
        </div>
        <img
          className={styles.groupIcon}
          loading="lazy"
          alt=""
          src="/group-156.svg"
          onClick={onGroup1Click}
        />
        <img className={styles.frameChild3} alt="" src="/group-148@2x.png" />
        <img className={styles.frameChild4} alt="" src="/group-154@2x.png" />
      </main>
      <div className={styles.frameGroup} onClick={onGroupContainerClick}>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <div className={styles.rectangleGroup}>
            <div className={styles.frameChild5} />
            <div className={styles.yes}>{`YES `}</div>
            <div className={styles.vectorGroup}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle-15.svg"
              />
              <img
                className={styles.frameChild6}
                loading="lazy"
                alt=""
                src="/ellipse-3.svg"
              />
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
          <div className={styles.frameChild7} />
        </div>
      </div>
    </div>
  );
};

export default IntroScreen2;
