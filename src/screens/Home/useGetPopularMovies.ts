import { useQuery } from '@tanstack/react-query'
import { MovieServices } from '../../utils/services'

export const UseGetPopularMovies = () => {
	const { isLoading, data, error } = useQuery(['getAll'], () => MovieServices.getAll())
	
	return { data: data, isLoading, error }
}