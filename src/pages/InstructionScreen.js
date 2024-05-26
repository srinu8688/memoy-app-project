import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./InstructionScreen.module.css";

const InstructionScreen = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/intro-screen1");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/activity-screen");
  }, [navigate]);

  return (
    <div className={styles.instructionScreen}>
      <main className={styles.frameParent}>
        <section className={styles.image5Parent}>
          <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
          <div className={styles.navbarButton}>
            <div className={styles.navbarButtonChild} />
            <div className={styles.misrAppliedKnowledgeEnterpr} />
            <div className={styles.makers} />
          </div>
        </section>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-156.svg"
          onClick={onGroupClick}
        />
        <img className={styles.frameItem} alt="" src="/group-148@2x.png" />
        <img className={styles.frameInner} alt="" src="/group-154@2x.png" />
        <img
          className={styles.withOurFlexibleProductionC}
          alt=""
          src="/with-our-flexible-production-capacity-and-high-tec.svg"
        />
      </main>
      <FrameComponent3 />
      <FrameComponent2 />
      <div className={styles.frameGroup}>
        <FrameComponent1 />
        <div className={styles.frameWrapper}>
          <div
            className={styles.frameContainer}
            onClick={onGroupContainerClick}
          >
            <div className={styles.partnersParent}>
              <img
                className={styles.partnersIcon}
                loading="lazy"
                alt=""
                src="/polygon-1.svg"
              />
              <div className={styles.rectangleParent}>
                <div className={styles.rectangleDiv} />
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameChild1} />
                  <div className={styles.play}>PLAY</div>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="/rectangle-15.svg"
                    />
                    <img
                      className={styles.ellipseIcon}
                      alt=""
                      src="/ellipse-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionScreen;
