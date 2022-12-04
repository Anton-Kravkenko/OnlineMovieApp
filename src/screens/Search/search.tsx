import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Loader from '../../components/Loader/Loader'
import MovieCard from '../../components/MovieCard/MovieCard'
import MovieCardWrapper from '../../components/MovieCard/MoviecardWrapper/MovieCardWrapper'
import { IMovie } from '../Home/home.interface'
import './search.styles.scss'
import { UseSearch } from './UseSearch'

const Search = () => {
	
	const { control, watch, register } = useForm({
		mode: 'onChange'
	})
	const SearchTerm = watch('SearchValue')
	const { isLoading, data, error } = UseSearch(SearchTerm)
	
	return <Layout HaveBottomPadding>
		<input placeholder='Search movie!' {...(register('SearchValue'))}
		       className='Search_imput' />
		
		
		{!!SearchTerm ? (
			<div>
				{isLoading ? <Loader /> : <MovieCardWrapper>
					{data?.data.map((movie: IMovie) => (
							<Link to={`/movies/${movie.slug}`}>
								<MovieCard key={movie._id} CardRating={movie.rating} CardHeading={movie.title}
								           CardImage={movie.poster} />
							</Link>
						)
					)}
				</MovieCardWrapper>}
			</div>
		) : null}
	
	</Layout>
}


export default Search