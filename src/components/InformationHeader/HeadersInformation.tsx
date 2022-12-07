import { FC } from 'react'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import './HeaderInformation.style.scss'

const HeaderInformations: FC<{ title: string }> = ({ title }) => {
	const navigate = useNavigate()
	return <div className='HeaderInformation'>
		<h1>{title}</h1>
		<BsArrowLeftCircle onClick={() => navigate(-1)} />
	
	</div>
}

export default HeaderInformations