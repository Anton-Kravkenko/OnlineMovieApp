import { Link } from 'react-router-dom'
import { EffectCards } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/effect-cards'
import Layout from '../../components/Layout/Layout'
import { GetMediaSource } from '../../utils/getMediaSource'
import { IMovie } from '../Home/home.interface'
import './Trending.styles.scss'
import { UseTrending } from './useTrending'

const Trending = () => {
	const { TrendingMovie, isLoading } = UseTrending()
	return <Layout>
		<div className='TrendingWrapper'>
			<Swiper effect={'cards'}
			        centeredSlides={true} creativeEffect={{
				prev: {
					shadow: true,
					translate: [0, 0, -100]
				},
				next: {
					translate: ['100%', 0, -10],
					opacity: 10000,
					shadow: true
				}
			}}
			        modules={[EffectCards]}
			        slidesPerView={'auto'}
			        className='HomeSlider'
			>
				
				{TrendingMovie?.data.map((movie: IMovie) => (
					<SwiperSlide key={movie._id}>
						<Link to={`/movies/${movie.slug}`}>
							<div className='picture' key={movie._id}>
								<img alt={'Load...'} src={GetMediaSource(movie.poster)} />
							
							</div>
						</Link>
					</SwiperSlide>
				))}
			
			</Swiper>
		</div>
	</Layout>
}

export default Trending