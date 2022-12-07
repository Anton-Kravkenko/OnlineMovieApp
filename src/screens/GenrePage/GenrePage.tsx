import { Link, useParams } from 'react-router-dom'
import HeaderInformations from '../../components/InformationHeader/HeadersInformation'
import Layout from '../../components/Layout/Layout'
import Loader from '../../components/Loader/Loader'
import MovieCard from '../../components/MovieCard/MovieCard'
import MovieCardWrapper from '../../components/MovieCard/MoviecardWrapper/MovieCardWrapper'
import { IMovie } from '../Home/home.interface'
import './genre.styles.scss'
import { UseGenre } from './useGenre'

const GenrePage = () => {
	const params: any = useParams()
	const { MovieByGenreId, GenreBySlug, isLoading } = UseGenre(params.genreSlug)
	if (isLoading) {
		return <Loader />
	}
	
	return <Layout HaveBottomPadding>
		<HeaderInformations title={GenreBySlug?.data.name} />
		
		
		<MovieCardWrapper>
			{MovieByGenreId?.data.map((movie: IMovie) => (
					<Link to={`/movies/${movie.slug}`}>
						<MovieCard key={movie._id} CardRating={movie.rating} CardHeading={movie.title}
						           CardImage={movie.poster} />
					</Link>
				)
			)}
		</MovieCardWrapper>
	
	
	</Layout>
}

export default GenrePage