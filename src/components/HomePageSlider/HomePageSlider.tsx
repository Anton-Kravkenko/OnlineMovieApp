import { FC } from 'react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { Swiper, SwiperSlide } from 'swiper/react'
import { HomePageSliderInterface } from './HomePageSlider.interface'
import './HomePageSlider.styles.scss'

const HomePageSlider: FC<HomePageSliderInterface> = ({ data, className }) => {
	return <div className={className}>
		<Swiper
			
			effect={'coverflow'}
			centeredSlidesBounds={true}
			centeredSlides={true}
			slideActiveClass={'ActiveCardSlide'}
			spaceBetween={10}
			slideNextClass={'NextSlide'}
			slidePrevClass={'PrevSlide'}
			loop={true}
			slidesPerView={2}
			coverflowEffect={{
				rotate: 0,
				stretch: 100,
				depth: 150,
				modifier: 1.5,
				slideShadows: false
			}}
			className={'wrapperForHomeSlider'}
		>
			
			{data?.map(({ image, heading, Avtor }) => <SwiperSlide className='HomeAlbomWrapper'>
				<img alt='HomeAlbomFoto' src={image} className='HomealbomPhoto' />
				<h3 className='HomeAlbomTitle'>{heading}</h3>
				<h4 className='HomeAlbomAvtor'>{Avtor}</h4>
			</SwiperSlide>)}
		</Swiper>
	</div>
}


export default HomePageSlider