import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { GetMediaSource } from '../../utils/getMediaSource'
import './MovieWatch.styles.scss'
import { useMovieWatch } from './useMovieWatch'

const MovieWatch = () => {
	const params: any = useParams()
	const { data: movie } = useMovieWatch(params)
	
	
	return <Layout className='VideoPlayer'>
		<iframe
			className='VideoPlayerFrame' sandbox={'defaultOptions'} allowFullScreen={true} loading={'lazy'}
			key={movie?.data.videoUrl} src={GetMediaSource(movie?.data.videoUrl)} />
	</Layout>
}


export default MovieWatch