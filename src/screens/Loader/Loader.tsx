import React from 'react'
import Layout from '../../components/Layout/Layout'
import './Loader.styles.scss'

const Loader = () => {
	return <Layout className={'ErrorPage'}>
		<div>
			<span className='loader'><span className='loader-inner'></span></span>
		</div>
	</Layout>
}


export default Loader