import { FC } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Loader from '../../components/Loader/Loader'
import MovieCard from '../../components/MovieCard/MovieCard'
import MovieCardWrapper from '../../components/MovieCard/MoviecardWrapper/MovieCardWrapper'
import { IMovie } from '../Home/home.interface'
import { useFavorites } from './useFavorites'

const Favorites: FC = () => {
	
	const { data: favoritesMovie, error, isLoading } = useFavorites()
	console.log(favoritesMovie)
	if (isLoading) return <Loader />
	return <Layout>
		<div>
			{isLoading ? <Loader /> : <MovieCardWrapper>
				{favoritesMovie?.data.map((movie: IMovie) => (
						<Link key={movie._id} to={`/movies/${movie.slug}`}>
							<MovieCard CardRating={movie.rating} CardHeading={movie.title}
							           CardImage={movie.poster} />
						</Link>
					)
				)}
			</MovieCardWrapper>}
		</div>
	
	</Layout>
}

export default Favorites