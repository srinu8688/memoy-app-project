import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import styles from "./IntroScreen1.module.css";

const IntroScreen1 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/intro-screen1");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.introScreen}>
      <main className={styles.image5Parent}>
        <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
        <div className={styles.label} />
        <div className={styles.frameChild} />
        <div className={styles.inputInputInteractive} />
        <div className={styles.frameParent}>
          <div className={styles.exampleCompanyExampleCompanParent}>
            <img
              className={styles.exampleCompanyExampleCompan}
              alt=""
              src="/vector-1.svg"
            />
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
                    src="/left-1@2x.png"
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
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <div className={styles.ellipseDiv} />
          </div>
          <img className={styles.ellipseIcon} alt="" src="/ellipse-313.svg" />
        </div>
        <img
          className={styles.groupIcon}
          loading="lazy"
          alt=""
          src="/group-156.svg"
          onClick={onGroupClick}
        />
      </main>
      <div className={styles.cogComponentWrapper}>
        <div className={styles.cogComponent}>
          <div className={styles.wrapperGroup149}>
            <img
              className={styles.wrapperGroup149Child}
              alt=""
              src="/group-149.svg"
            />
          </div>
          <div className={styles.heading1LifeSkillsParent}>
            <div className={styles.heading1Container}>
              <span>
                <p className={styles.hiI}>Hi , I am Mizo !</p>
                <p className={styles.andILove}>{`and I love bananas `}</p>
              </span>
            </div>
            <img
              className={styles.frameChild1}
              loading="lazy"
              alt=""
              src="/group-155@2x.png"
            />
          </div>
        </div>
      </div>
      <FrameComponent
        sTART="NEXT"
        propBackgroundColor="#ffcf25"
        propBackgroundColor1="#ffcf25"
        propLeft="62.4px"
        onGroupContainerClick={onGroupContainerClick}
      />
    </div>
  );
};

export default IntroScreen1;
