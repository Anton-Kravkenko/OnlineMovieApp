import { useQuery } from '@tanstack/react-query'
import { MovieServices } from '../../utils/services/services'

export const UseGenre = (slug: string) => {
	
	
	const {
		data: GenreBySlug,
		isLoading: GenreLoading,
		error: GenreError
	} = useQuery(['GetGenreBySlug', slug], () => MovieServices.getGenreBySlug(slug))
	
	
	const GenreId = GenreBySlug?.data._id || ''
	
	
	const {
		data: MovieByGenreId,
		isLoading: MovieByGenreIdLoading,
		error: MovieByGenreIdError
	} = useQuery(['GetGenreMovieById', GenreId], () => MovieServices.getMovieByGenreId(GenreId), {
		enabled: Boolean(GenreId)
	})
	
	
	return { MovieByGenreId, GenreBySlug, isLoading: MovieByGenreIdLoading || GenreLoading }
}