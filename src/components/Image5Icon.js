import styles from "./Image5Icon.module.css";
 

const Image5Icon = ({ className = "" }) => {
  return (
    <img
      className={[styles.image5Icon, className].join(" ")}
      alt=""
      src="/image-5@2x.png"
    />
  );
};

Image5Icon.propTypes = {
  className: PropTypes.string,
};

export default Image5Icon;
