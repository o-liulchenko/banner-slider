import { FC, useState } from "react";
import styles from "./MainSlider.module.css";
import api from "../../api";

interface IMainSliderProps {}

const MainSlider: FC<IMainSliderProps> = () => {
  let slides = api.getMainPageAnime();
  let [active, setActive] = useState(0);

  return (
    <section className={styles.sliderWrapper}>
      <ul className={styles.sliderContainer}>
        {slides.map(({ _id, name, description, image }, index) => (
          <li key={_id} className={`${styles.slide} ${active === index && styles.active}`}>
            <img className={styles.slideImage} src={image} alt={name} />
            <div className={styles.slideDescription}>
              <h3 className={styles.h3}>{name}</h3>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ul>
      <ul className={styles.sliderControls}>
        {
          slides.map(({ _id, name, description, image }, index) => (
            <li key={_id}>
              <img src={image} alt={name} />
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default MainSlider;
