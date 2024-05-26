import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Image5Icon from "../components/Image5Icon";
import GroupComponent1 from "../components/GroupComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./IntroScreen.module.css";

const IntroScreen = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/intro-screen");
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
              src="/group-149.svg"
            />
          </div>
          <div className={styles.heading1}>Welcome Kiddo !</div>
        </div>
      </div>
      <main className={styles.image5Parent}>
        <Image5Icon />
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <GroupComponent1 />
      </main>
      <FrameComponent
        sTART="START"
        onGroupContainerClick={onGroupContainerClick}
      />
    </div>
  );
};

export default IntroScreen;
