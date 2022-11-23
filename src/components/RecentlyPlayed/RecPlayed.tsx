import { FC } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { RecPlayedInterface } from './RecPlayed.interface'
import './RecPlayed.styles.scss'

const RecPlayed: FC<RecPlayedInterface> = ({ Heading, data, className }) => {
	return <div className={className}>
		
		<h1 className='HeadingInComponents'>{Heading}</h1>
		<Swiper slidesPerView={'auto'}
		
		        spaceBetween={10}
		        className={'wrapperForRECSlider'}
		>
			
			{data?.map((data) => <SwiperSlide className='albomWrapper'>
				<img alt='albomFoto' src={data.image} className='albomPhoto' />
				<h3 className='albomTitle'>{data.heading}</h3>
				<h4 className='albomAvtor'>{data.Avtor}</h4>
			</SwiperSlide>)}
		
		
		</Swiper>
	</div>
}


export default RecPlayed