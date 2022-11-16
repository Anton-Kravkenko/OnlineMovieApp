import Layout from '../../components/Layout/Layout'
import RecPlayed from '../../components/RecentlyPlayed/RecPlayed'
import Recomendation from '../../components/Recommendation/Recomendation'
import { recPlayedsort } from '../../utils/dataForSong'

const Favorites = () => {
	return <Layout havePadding={true}>
		<RecPlayed Heading={'Favorite alboms'} className={' mb-40'} data={recPlayedsort} />
		<Recomendation Heading={'Favorite song'} data={recPlayedsort} />
	
	</Layout>
}


export default Favorites