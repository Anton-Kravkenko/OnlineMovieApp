export interface RecomendationInterface {
	Heading?: string
	data?: IdataList[]
	className?: string
}

export interface IdataList {
	image: string,
	heading: string,
	Avtor: string,
}
