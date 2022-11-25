import { useQuery } from '@tanstack/react-query'
import { MovieServices } from '../../utils/services'

export const UseGetMovieByActorId = (id: string) => {
	
	
	//ActorMovie
	const {
		isLoading: LoadingActorId,
		data: MovieByActor,
		error: MovieByIdError
	} = useQuery(['getMovieByActorId'], () => MovieServices.getMovieByActorId(id))
	
	
	return MovieByActor
}