const defautUrl: string = 'http://localhost:4200'

export const GetMediaSource = (path: string): string => {
	const uri = defautUrl + path
	return uri
}