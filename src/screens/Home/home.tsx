import 'swiper/css'
import HomePageSlider from '../../components/HomePageSlider/HomePageSlider'
import Layout from '../../components/Layout/Layout'
import './home.styles.scss'
import { UseGetPopularMovies } from './useGetPopularMovies'

const Home = () => {
	const { isLoading, data, error } = UseGetPopularMovies()
	console.log(data)
	if (!data) {
		return null
	}
	
	return <Layout>
		<div style={{
			position: 'relative',
			zIndex: '1000'
		}}>
			
			<HomePageSlider data={data} />
		</div>
	</Layout>
}


export default Home