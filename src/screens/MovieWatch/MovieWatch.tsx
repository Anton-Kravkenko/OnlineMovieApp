import { useQuery } from '@tanstack/react-query'
import React from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { GetMediaSource } from '../../utils/getMediaSource'
import { MovieServices } from '../../utils/services'
import Loader from '../Loader/Loader'
import './MovieWatch.styles.scss'

const MovieWatch = () => {
	const params: any = useParams()
	const {
		isLoading,
		data: movie,
		error
	} = useQuery(['getCurrentMovie'], () => MovieServices.getMovieBySlug(params.slug))
	return <Layout className={'VideoPlayer'}>
		
		<ReactPlayer fallback={<Loader />} height={'100%'}
		             width={'100%'} style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
			
			
		}
		} controls={true} url={GetMediaSource(movie?.data.videoUrl)} />
	</Layout>
}


export default MovieWatch