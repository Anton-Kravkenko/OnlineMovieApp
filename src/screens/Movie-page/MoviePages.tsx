import { useQuery } from '@tanstack/react-query'
import { AiFillStar } from 'react-icons/ai'
import { BsArrowLeftShort } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import Layout from '../../components/Layout/Layout'
import Loader from '../../components/Loader/Loader'
import { GetMediaSource } from '../../utils/getMediaSource'
import { MovieServices } from '../../utils/services/services'
import { IActors, IGenre } from '../Home/home.interface'
import FavoritesButton from './Favorites.button'
import './MoviePage.styles.scss'

const MoviePages = () => {
	let navigate = useNavigate()
	let params: any = useParams()
	const {
		isLoading,
		data: movie,
		error
	} = useQuery(['getCurrentMovie'], () => MovieServices.getMovieBySlug(params.movieSlug))
	
	if (movie === undefined) {
		return null
	}
	if (isLoading) {
		return <Loader />
	}
	return <Layout HaveBottomPadding>
		<div className='MoviePageBg'
		     style={{
			     backgroundImage: `url(${GetMediaSource(movie.data.poster)})`
		     }}>
			<div style={{
				position: 'fixed',
				width: '100%',
				zIndex: '1000'
			}}>
				<div className='ButtonInHeader'>
					<BsArrowLeftShort className='HeaderIcon' onClick={() => navigate(-1)} />
					<div className='FavoritesButtonWrapper'>
						<FavoritesButton movieId={movie.data._id} />
					</div>
				</div>
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
			<div className='TitleAndWatch'>
				<h1>{movie.data.title}</h1>
				<Link to={`/Watch/${movie.data.slug}`} className='WatchWrapper'>Watch</Link>
			</div>
			
			<h3>{movie.data.parameters.duration}min | {movie.data.parameters.country} | {movie.data.parameters.year}</h3>
			
			<div className='GenresWrapper'>
				{movie.data.genres.map((genre: IGenre) => (
					<Link to={`/genre/${genre.slug}`} className='GenresElement' key={genre.name}>
						{genre.name} </Link>
				))}
			</div>
			
			
			<h2 className='ActorHeaderText'>Top cast</h2>
			<Swiper slidesPerView={'auto'}
			        className='ActorsWrapper'>
				{movie.data.actors.map((actor: IActors) => (
					<SwiperSlide key={actor._id}>
						<Link to={`/actor/${actor.slug}`} className='LinkWrapper'>
							<div className='ActorSlider'>
								<img className='ActorPhoto' src={GetMediaSource(actor.photo)} />
								<p className='ActorName'>
									{actor.name} </p>
							</div>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		
		</div>
	</Layout>
	
	
}

export default MoviePages