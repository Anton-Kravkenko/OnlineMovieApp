import Layout from '../../components/Layout/Layout'
import './search.styles.scss'

const Search = () => {
	return <Layout havePadding={true}>
		<input placeholder={'Search movie!'} className='Search_imput' />
	
	</Layout>
}


export default Search