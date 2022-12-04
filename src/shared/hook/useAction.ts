import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { allActions } from '../../redux/rootAction'

export const UseAction = () => {
	const dispatch = useDispatch()
	
	return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
}