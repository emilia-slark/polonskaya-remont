import {
	Slider,
	Marquee,
	PageTransition,
	Intro,
	BookSection,
	Gallery
} from '@widgets';
import { Card, VideoContainer } from '@ui';
import { carouselItems } from '@constants';

export const MainPage = () => (
	<PageTransition>
		<>
			<Intro />
			<Slider>
				{carouselItems.map((item, index) => (
					<Card
						key={index}
						className="keen-slider__slide"
						item={item}
					/>
				))}
			</Slider>
			<BookSection />
			<Marquee text="ИСКУССТВО ЖИТЬ КРАСИВО" />
			<VideoContainer />
			<Gallery />
		</>
	</PageTransition>
);
