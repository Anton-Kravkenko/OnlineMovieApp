import Layout from '../../components/Layout/Layout'
import RecPlayed from '../../components/RecentlyPlayed/RecPlayed'
import Recomendation from '../../components/Recommendation/Recomendation'
import { recPlayedsort } from '../../utils/dataForSong'
import './search.styles.scss'

const Search = () => {
	return <Layout havePadding={true}>
		<input placeholder={'Search anyway!'} className='Search_imput' />
		<RecPlayed className={'mt-40 mb-40'} data={recPlayedsort} />
		<Recomendation data={recPlayedsort} />
	</Layout>
}


export default Search