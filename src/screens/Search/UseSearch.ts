import { useQuery } from '@tanstack/react-query'
import { MovieServices } from '../../utils/services/services'
import { useDebounce } from './useDebounce'

export const UseSearch = (searchTerm?: string) => {
	
	const debaunceQuery = useDebounce(searchTerm, 1000)
	
	const {
		isLoading,
		data,
		error
	} = useQuery(['getSearch', debaunceQuery], () => MovieServices.getAll(debaunceQuery), {
		enabled: Boolean(debaunceQuery)
	})
	
	return { data, isLoading, error }
}