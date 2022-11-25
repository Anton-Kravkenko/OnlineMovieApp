import { useQuery } from '@tanstack/react-query'
import { MovieServices } from '../../utils/services'

export const UseGetActorBySlug = (slug: string) => {
	// Actor
	const {
		isLoading: LoadingActorSlug,
		data: Actor,
		error: MovieBySlugError
	} = useQuery(['GetActorBySlugsInActorPage', slug], () => MovieServices.getActorbySlug(slug))
	// Если убрать динамику то запрос будет повторяться, потому всегда добавлять приставку с динамическими данными
	const ActorId = Actor?.data._id || ''
	//ActorMovie
	const {
		isLoading: LoadingActorId,
		data: MovieByActor,
		error: MovieByIdError
	} = useQuery(['getMovieByActorId', ActorId], () => MovieServices.getMovieByActorId(ActorId), {
		enabled: !!Actor
		// Запрос сработает только если будут данные Актера будут, в этом случае можем юзать только тру и фолс, потому оборачиваем в boolean и после прихода значения, оно становиться тру и запрос идёт
		
	})
	
	
	return { Actor, MovieByActor }
}