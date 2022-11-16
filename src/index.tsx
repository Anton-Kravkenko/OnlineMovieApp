import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Favorites from './screens/Favorites/favorites'
import Home from './screens/Home/home'
import Notfound from './screens/NotFound/notfound'
import NowSong from './screens/nowSong/nowSong'
import Search from './screens/Search/search'
import './utils/font/Objet-Bold.ttf'


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
		path: '/song',
		element: <NowSong />
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
		<RouterProvider router={router} />
	</React.StrictMode>
)


