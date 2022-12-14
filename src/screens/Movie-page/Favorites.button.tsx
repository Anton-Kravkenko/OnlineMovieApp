import { useMutation } from '@tanstack/react-query'
import cn from 'classnames'
import { useEffect, useState } from 'react'
import { useAuth } from '../../shared/hook/useAuth'
import { MovieServices } from '../../utils/services/services'
import { useFavorites } from '../Favorites/useFavorites'
import './Favorites.button.scss'
import HeartImage from './img.png'

const FavoritesButton = ({ movieId }: any) => {
	const { data: favoritesMovies, error, isLoading, refetch } = useFavorites()
	const [IsSmashed, setSmashed] = useState(false)
	const { user } = useAuth()
	
	useEffect(() => {
		if (!favoritesMovies) return
		const isHasSmashed = favoritesMovies.data.some(f => f._id === movieId)
		
		
		if (isHasSmashed !== IsSmashed) setSmashed(isHasSmashed)
	}, [favoritesMovies, IsSmashed])
	
	const { mutateAsync } = useMutation(['asdads'], () => MovieServices.AddToFavorites(movieId), {
		onSuccess() {
			setSmashed(!IsSmashed)
			refetch()
		}
		
		
	})
	if (!user) {
		return null
	}
	
	return <button onClick={() => mutateAsync()} className={cn('button', { 'animate': IsSmashed })}
	               style={{ backgroundImage: `url(${HeartImage})` }} />
}

export default FavoritesButton