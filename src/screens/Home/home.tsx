import { Link } from 'react-router-dom'
import { EffectCoverflow } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Layout from '../../components/Layout/Layout'
import { GetMediaSource } from '../../utils/getMediaSource'
import { IMovie } from './home.interface'
import './home.styles.scss'
import { UseGetPopularMovies } from './useGetPopularMovies'

const Home = () => {
	const { isLoading, data, error } = UseGetPopularMovies()
	
	if (!data) {
		return null
	}
	
	console.log(data?.data[1].slug)
	return <Layout>
		<div style={{
			position: 'relative',
			zIndex: '1000'
		}}>
			
			<Swiper effect={'coverflow'}
			        modules={[EffectCoverflow]}
			        centeredSlides={true}
			        slidesPerView={'auto'}
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
	</Layout>
}


export default Home