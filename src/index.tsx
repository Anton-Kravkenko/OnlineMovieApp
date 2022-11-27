import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ActorPage from './screens/ActorPage/ActorPage'
import Favorites from './screens/Favorites/favorites'
import GenrePage from './screens/GenrePage/GenrePage'
import Home from './screens/Home/home'
import Loader from './screens/Loader/Loader'
import MoviePages from './screens/Movie-page/MoviePages'
import MovieWatch from './screens/MovieWatch/MovieWatch'
import Notfound from './screens/notfound/notfound'
import Search from './screens/Search/search'
import Trending from './screens/Trending/Trending'
import './utils/font/Objet-Bold.ttf'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: { refetchOnWindowFocus: false }
	}
})

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/search',
		element: <Search />
	},
	
	{
		path: '/movies/:movieSlug',
		element: <MoviePages />
	},
	{
		path: '/actor/:ActorSlug',
		element: <ActorPage />
	},
	
	{
		path: '/genre/:genreSlug',
		element: <GenrePage />
	},
	
	{
		path: '/trending',
		element: <Trending />
	},
	
	{
		path: '/Favorites',
		element: <Favorites />
	},
	{
		path: '/Auth',
		element: <Loader />
	},
	{
		path: '/Watch/:slug',
		element: <MovieWatch />
	},
	{
		path: '*',
		element: <Notfound />
	}

])
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
)


