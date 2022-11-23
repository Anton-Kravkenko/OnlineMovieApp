import Layout from '../../components/Layout/Layout'
import Recomendation from '../../components/Recommendation/Recomendation'
import { recPlayedsort } from '../../utils/dataForSong'

const Favorites = () => {
	return <Layout havePadding={true}>
		
		<Recomendation Heading={'Favorite'} data={recPlayedsort} />
	
	</Layout>
}


export default Favorites