import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IMovie } from '../../screens/Home/home.interface'
import { GetMediaSource } from '../../utils/getMediaSource'
import './RecPlayed.styles.scss'

const RecPlayed = (data: any) => {
	return <div>
		
		<Swiper slidesPerView={'auto'}
		
		        spaceBetween={10}
		        className={'wrapperForRECSlider'}
		>
			
			{data.map((movie: IMovie) => (<SwiperSlide className='albomWrapper'>
				<img alt='albomFoto' src={GetMediaSource(movie.poster)} className='albomPhoto' />
				<h3 className='albomTitle'>{movie.title}</h3>
				<h4 className='albomAvtor'>{movie.parameters.country}</h4>
			</SwiperSlide>))}
		
		
		</Swiper>
	</div>
}


export default RecPlayed