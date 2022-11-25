export interface IMovie {
	_id: string,
	poster: string,
	title: string,
	parameters: Iparameters,
	slug: string,
	countOpened: number,
	actors: IActors,
	videoUrl: string,
	rating: 1 | 2 | 3 | 4 | 5,
}

export type Iparameters = {
	year: number,
	duration: number,
	country: string
}

export type IActors = {
	name: string,
	_id: string,
	photo: string,
	slug: string,
}

export type IGenre = {
	name: string,
	slug: string,
	icon: string,
}