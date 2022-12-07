import { FC } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import HeaderInformations from '../../components/InformationHeader/HeadersInformation'
import Layout from '../../components/Layout/Layout'
import Loader from '../../components/Loader/Loader'
import MovieCard from '../../components/MovieCard/MovieCard'
import MovieCardWrapper from '../../components/MovieCard/MoviecardWrapper/MovieCardWrapper'
import { useAuth } from '../../shared/hook/useAuth'
import { IMovie } from '../Home/home.interface'
import { useFavorites } from './useFavorites'

const Favorites: FC = () => {
	
	const { data: favoritesMovie, error, isLoading } = useFavorites()
	const navigate = useNavigate()
	const { user } = useAuth()
	if (isLoading) return <Loader />
	
	if (!user) {
		return <Navigate to={'/'} />
	}
	
	return <Layout>
		<HeaderInformations title={'Favorites'} />
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