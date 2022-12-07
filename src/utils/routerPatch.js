import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ActorPage from '../screens/ActorPage/ActorPage'
import Favorites from '../screens/Favorites/favorites'
import GenrePage from '../screens/GenrePage/GenrePage'
import Home from '../screens/Home/home'
import MoviePages from '../screens/Movie-page/MoviePages'
import MovieWatch from '../screens/MovieWatch/MovieWatch'
import Notfound from '../screens/notfound/notfound'
import Search from '../screens/Search/search'
import Trending from '../screens/Trending/Trending'
import LoginPage from '../screens/UserPage/Auth/login/loginPage'
import Register from '../screens/UserPage/Auth/Register/Register'

export const router = createBrowserRouter([
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
		path: '/Login',
		element: <LoginPage />
	},
	
	{
		path: '/Register',
		element: <Register />
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