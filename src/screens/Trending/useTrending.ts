import { useQuery } from '@tanstack/react-query'
import { MovieServices } from '../../utils/services/services'

export const UseTrending = () => {
	const { data: TrendingMovie, isLoading } = useQuery(['getMostPopularMovie'], () => MovieServices.getTrending())
	
	return { TrendingMovie, isLoading }
}