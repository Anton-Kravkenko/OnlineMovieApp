import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4200/api'
export const MovieServices = {
	async getAll(searchTerm?: string) {
		return axios.get('/movies', {
			params: { searchTerm }
		})
		
	},
	
	async getMovieBySlug(slug: string) {
		const getBySlug = axios.get(`/movies/by-slug/${slug}`)
		const updateCountOpened = axios.put(`/movies/update-count-opened`, {
			slug: slug
		})
		return getBySlug
		return updateCountOpened
	},
	
	
	async getMovieByActorId(ActorId: string) {
		return axios.get(`/movies/by-actor/${ActorId}`)
	},
	
	async getActorbySlug(slug: string) {
		return axios.get(`/actors/by-slug/${slug}`)
	},
	
	async getGenreBySlug(slug: string) {
		return axios.get(`/genres/by-slug/${slug}`)
	},
	async getTrending() {
		return axios.get(`/movies/most-popular`)
	},
	
	async getMovieByGenreId(id: string) {
		return axios.post(`/movies/by-genres`, {
			'genreIds': id
		})
	}
	
}