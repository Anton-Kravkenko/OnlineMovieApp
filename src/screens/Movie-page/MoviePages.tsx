import { useQuery } from '@tanstack/react-query'
import { AiFillStar } from 'react-icons/ai'
import { BsArrowLeftShort } from 'react-icons/bs'
import { MdFavoriteBorder } from 'react-icons/md'
import { useNavigate, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import Layout from '../../components/Layout/Layout'
import { GetMediaSource } from '../../utils/getMediaSource'
import { MovieServices } from '../../utils/services'
import { IActors, IGenre } from '../Home/home.interface'
import './MoviePage.styles.scss'

const MoviePages = () => {
	let navigate = useNavigate()
	let params: any = useParams()
	const {
		isLoading,
		data: movie,
		error
	} = useQuery(['getCurrentMovie'], () => MovieServices.getMovieBySlug(params.movieSlug))
	console.log(movie)
	if (movie === undefined) {
		console.log('data undefined')
		return null
	}
	
	return <Layout HaveBottomPadding={true}>
		<div className='MoviePageBg'
		     style={{
			     backgroundImage: `url(${GetMediaSource(movie.data.poster)})`
		     }}>
			<div className='ButtonInHeader'>
				<BsArrowLeftShort className='HeaderIcon' onClick={() => navigate(-1)} />
				<MdFavoriteBorder className='HeaderIcon' />
			</div>
		</div>
		
		<div className='ContentWrapper'>
			<div className='RattingWraper'>
				<AiFillStar className='RatingIcons' />
				<p className='RattingText'>{movie.data.rating} <p style={{
					color: 'gray',
					fontSize: '21px'
				}}>/ 5</p></p>
			
			
			</div>
			<h1>{movie.data.title}</h1>
			<h3>{movie.data.parameters.duration}min | {movie.data.parameters.country} | {movie.data.parameters.year}</h3>
			
			<div className='GenresWrapper'>
				{movie.data.genres.map((genre: IGenre) => (
					<a className='GenresElement'>
						{genre.name} </a>
				))}
			</div>
			
			
			<h2 className='ActorHeaderText'>Top cast</h2>
			<Swiper slidesPerView={'auto'}
			        className='ActorsWrapper'>
				{movie.data.actors.map((actor: IActors) => (
					<SwiperSlide className='ActorSlider'>
						<img src={GetMediaSource(actor.photo)} />
						<p>
							{actor.name} </p>
					</SwiperSlide>
				))}
			</Swiper>
		
		</div>
	</Layout>
	
	
}

export default MoviePages