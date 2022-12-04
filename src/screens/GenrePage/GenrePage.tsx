import { BsArrowLeftCircle } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Loader from '../../components/Loader/Loader'
import MovieCard from '../../components/MovieCard/MovieCard'
import MovieCardWrapper from '../../components/MovieCard/MoviecardWrapper/MovieCardWrapper'
import { IMovie } from '../Home/home.interface'
import './genre.styles.scss'
import { UseGenre } from './useGenre'

const GenrePage = () => {
	const params: any = useParams()
	const navigate = useNavigate()
	const { MovieByGenreId, GenreBySlug, isLoading } = UseGenre(params.genreSlug)
	console.log(MovieByGenreId, GenreBySlug, isLoading)
	
	if (isLoading) {
		return <Loader />
	}
	
	return <Layout HaveBottomPadding>
		<div className='HeaderGenrePage'>
			<h1>{GenreBySlug?.data.name}</h1>
			<BsArrowLeftCircle onClick={() => navigate(-1)} />
		
		</div>
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