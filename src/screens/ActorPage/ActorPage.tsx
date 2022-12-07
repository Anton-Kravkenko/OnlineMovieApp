import { Link, useNavigate, useParams } from 'react-router-dom'
import HeaderInformations from '../../components/InformationHeader/HeadersInformation'
import Layout from '../../components/Layout/Layout'
import Loader from '../../components/Loader/Loader'
import MovieCard from '../../components/MovieCard/MovieCard'
import MovieCardWrapper from '../../components/MovieCard/MoviecardWrapper/MovieCardWrapper'
import { IMovie } from '../Home/home.interface'
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
		
		
		<HeaderInformations title={Actor?.data.name} />
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