import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { store } from './redux/store'
import './utils/font/Objet-Bold.ttf'
import { router } from './utils/routerPatch'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: { refetchOnWindowFocus: false }
	}
})

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)
// Add auth provider
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</React.StrictMode>
	</Provider>
)


