import { Carousel, MarqueeLine } from "@components";
import { carouselItems } from "@constants";
import { BookSection, Card, Intro, VideoContainer } from "@ui";

export const Main = () => (
  <main>
    <Intro />

    <Carousel>
      {carouselItems.map((item, index) => (
        <Card key={index} className="keen-slider__slide" item={item} />
      ))}
    </Carousel>

    {/* <MarqueeLine text="ИСКУССТВО ЖИТЬ КРАСИВО — " /> */}
    <BookSection />
    <MarqueeLine text="ИСКУССТВО ЖИТЬ КРАСИВО — " />
    <VideoContainer />
  </main>
);

// TODO Якорь на галерею
