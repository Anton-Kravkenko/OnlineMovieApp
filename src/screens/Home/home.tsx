import Layout from '../../components/Layout/Layout'
import RecPlayed from '../../components/RecentlyPlayed/RecPlayed'
import Recomendation from '../../components/Recommendation/Recomendation'
import { recPlayedsort } from '../../utils/dataForSong'
import './home.styles.scss'

const Home = () => {
	
	return <Layout havePadding={true}>
		<RecPlayed data={recPlayedsort} Heading={'Alboms'} />
		<Recomendation className={'mt-40'} data={recPlayedsort} Heading={'Song'} />
	
	
	</Layout>
}


export default Home