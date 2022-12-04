import { useQuery } from '@tanstack/react-query'
import { MovieServices } from '../../utils/services/services'

export const useFavorites = () => {
	const { data, isLoading, error, refetch } = useQuery(['GetFavoritesMovie'], () => MovieServices.getFavorites())
	
	return { data, isLoading, error, refetch }
}