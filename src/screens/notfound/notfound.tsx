import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'

const Notfound = () => {
	return <Layout className='ErrorPage'>
		<div>
			<h1>404</h1>
			<p className='ErrorText'>sorry, page not found</p>
			<Link to={'/'} className='ErrorLink'>Home</Link>
		
		</div>
	</Layout>
}


export default Notfound