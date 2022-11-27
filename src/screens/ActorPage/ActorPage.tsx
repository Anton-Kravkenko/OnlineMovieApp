import { BsArrowLeftCircle } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import MovieCard from '../../components/MovieCard/MovieCard'
import MovieCardWrapper from '../../components/MovieCard/MoviecardWrapper/MovieCardWrapper'
import { IMovie } from '../Home/home.interface'
import Loader from '../Loader/Loader'
import './ActorPage.styles.scss'
import { UseGetActorBySlug } from './useGetActorBySlug'

const ActorPage = () => {
	const params: any = useParams()
	const navigate = useNavigate()
	const { MovieByActor, Actor, isLoading } = UseGetActorBySlug(params.ActorSlug)
	
	
	if (isLoading) {
		return <Loader />
	}
	
	return <Layout>
		<div className='HeaderActorPage'>
			<h1>{Actor?.data.name}</h1>
			<BsArrowLeftCircle onClick={() => navigate(-1)} />
		
		</div>
		<MovieCardWrapper>
			{MovieByActor?.data.map((movie: IMovie) => (
					<Link to={`/movies/${movie.slug}`}>
						<MovieCard key={movie._id} CardRating={movie.rating} CardHeading={movie.title}
						           CardImage={movie.poster} />
					</Link>
				)
			)}
		</MovieCardWrapper>
	</Layout>
}

export default ActorPage