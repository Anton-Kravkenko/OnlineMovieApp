import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Favorites from './screens/Favorites/favorites'
import Home from './screens/Home/home'
import MoviePages from './screens/Movie-page/MoviePages'
import Notfound from './screens/notfound/notfound'
import Search from './screens/Search/search'
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
		path: '/Favorites',
		element: <Favorites />
	},
	{
		path: '/Auth',
		element: <Notfound />
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


