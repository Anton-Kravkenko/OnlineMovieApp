import { FC } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { GetMediaSource } from '../../utils/getMediaSource'
import { MovieCardInterface } from './MovieCard.interface'
import './MovieCard.styles.scss'

const MovieCard: FC<MovieCardInterface> = ({ CardImage, CardHeading, CardRating }) => {
	return <div style={
		{
			backgroundImage: `url(${GetMediaSource(CardImage)})`,
			height: '300px',
			backgroundSize: 'cover',
			width: '200px',
			border: 'none',
			borderRadius: '15px',
			position: 'relative',
			margin: '20px'
		}
	}>
		<div className='ContentWrapperForCard'>
			<div className='RattingWraper'>
				<AiFillStar className='RatingIcons' />
				<p className='RattingText'>{CardRating} <p style={{
					color: 'gray',
					fontSize: '21px'
				}}>/ 5</p></p>
			</div>
			
			<h4 className='MovieNameInActorPage'>{CardHeading} </h4>
		
		</div>
	</div>
}


export default MovieCard