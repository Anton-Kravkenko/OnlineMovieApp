import { FC, PropsWithChildren } from 'react'
import './MovieCardWrapper.styles.scss'

const MovieCardWrapper: FC<PropsWithChildren> = ({ children }) => {
	return <div className='MovieCardWrapper'>
		{children}
	</div>
}

export default MovieCardWrapper