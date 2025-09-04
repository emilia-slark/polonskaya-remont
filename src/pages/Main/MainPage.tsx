import { Carousel, Marquee } from "@components";
import { carouselItems } from "@constants";
import { BookSection, Card, Gallery, Intro, VideoContainer } from "@ui";

export const MainPage = () => (
  <main>
    <Intro />
    <Carousel>
      {carouselItems.map((item, index) => (
        <Card key={index} className="keen-slider__slide" item={item} />
      ))}
    </Carousel>
    <BookSection />

    <Marquee text="ИСКУССТВО ЖИТЬ КРАСИВО—" />
    <VideoContainer />
    <Gallery />
  </main>
);
