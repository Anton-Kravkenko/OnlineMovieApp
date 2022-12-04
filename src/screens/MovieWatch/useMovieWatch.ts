import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { MovieServices } from '../../utils/services/services'

export const useMovieWatch = (params: any) => {
	 const {
		isLoading,
		data,
		error
	} = useQuery(['getCurrentMovie'], () => MovieServices.getMovieBySlug(params.slug))
	
	
 return {data, isLoading, error}
}
