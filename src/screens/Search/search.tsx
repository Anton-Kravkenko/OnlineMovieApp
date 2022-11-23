import Layout from '../../components/Layout/Layout'
import Recomendation from '../../components/Recommendation/Recomendation'
import { recPlayedsort } from '../../utils/dataForSong'
import './search.styles.scss'

const Search = () => {
	return <Layout havePadding={true}>
		<input placeholder={'Search anyway!'} className='Search_imput' />
		
		<Recomendation data={recPlayedsort} />
	</Layout>
}


export default Search