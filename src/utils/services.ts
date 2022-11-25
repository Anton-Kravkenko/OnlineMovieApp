import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4200/api'
export const MovieServices = {
	async getAll() {
		return axios.get('/movies')
	},
	
	async getMovieBySlug(slug: string) {
		return axios.get(`/movies/by-slug/${slug}`)
	},
	
	
	async getMovieByActorId(ActorId: string) {
		return axios.get(`/movies/by-actor/${ActorId}`)
	},
	
	async getActorbySlug(slug: string) {
		return axios.get(`/actors/by-slug/${slug}`)
	}
	
}