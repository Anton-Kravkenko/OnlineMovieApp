import { Link } from 'react-router-dom'
import { EffectCoverflow } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IMovie } from '../../screens/Home/home.interface'
import { GetMediaSource } from '../../utils/getMediaSource'
import './HomePageSlider.styles.scss'

const HomePageSlider = ({ data }: any) => {
	return <div>
		<Swiper effect={'coverflow'}
		        modules={[EffectCoverflow]}
		        centeredSlides={true}
		        slidesPerView={'auto'}
		        className='HomeSlider'
		>
			
			{data.data.map((movie: IMovie) => (
				<SwiperSlide>
					<Link to={`/movies/${movie.slug}`}>
						<div className='picture' key={movie._id}>
							<img alt={'Load...'} src={GetMediaSource(movie.poster)} />
						
						</div>
						<h1>f</h1>
					</Link>
				</SwiperSlide>
			))}
		
		</Swiper>
	</div>
}


export default HomePageSlider