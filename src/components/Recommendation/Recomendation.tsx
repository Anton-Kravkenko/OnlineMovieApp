import { FC } from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import { RecomendationInterface } from './Recomendation.interface'
import './Recomendation.styles.scss'

const Recomendation: FC<RecomendationInterface> = ({ Heading, data, className }) => {
	return <div className={className}>
		<h1 className='HeadingInComponents'>{Heading}</h1>
		
		{data?.map(({ image, heading, Avtor }) => <div className='Element_wrapper'>
				<div className='info_wrapper'>
					<img alt='recFoto' src={image} className='recFoto' />
					<div className='text_wrapper'>
						<h3 className='recTitle'>{heading}</h3>
						<h4 className='recAvtor'>{Avtor}</h4>
					</div>
				</div>
				<div className='favorites_Wrapper'>
					<MdFavoriteBorder className='favorites_button' />
				</div>
			</div>
		)}
	
	</div>
}


export default Recomendation