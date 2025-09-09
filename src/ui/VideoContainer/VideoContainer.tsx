import styles from "./style.module.scss";

interface VideoContainerProps {
  src?: string;
}

export const VideoContainer = ({ src }: VideoContainerProps) => (
  <section className={`${styles.wrapper} section`}>
    <div className={`${styles.content} container`}>
      {/* <video controls autoPlay muted loop preload="none" src={src} className={styles.video}>
        <source src="video/video.webm" type="video/webm" />
        <source src="video/video.mp4" type="video/mp4" />
      </video> */}
      <img src="/main/temp.jpg" alt="" loading="lazy" />
    </div>
  </section>
);
