import 'swiper/css'
import Layout from '../../components/Layout/Layout'
import './home.styles.scss'
import HomePageSlider from './HomePageSlider/HomePageSlider'
import { UseGetMovies } from './useGetMovies'

const Home = () => {
	const { isLoading, data, error } = UseGetMovies()
	if (!data) {
		return null
	}
	
	return <Layout>
		
		
		<HomePageSlider data={data} />
	</Layout>
}


export default Home