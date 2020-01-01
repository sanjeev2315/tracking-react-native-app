import React, { useContext, useEffect } from 'react'
import { Context as AuthContext } from './../context/AuthContext'

const ResolveAuthScreen = () => {
	const { tryAutoSignin } = useContext(AuthContext)

	useEffect(() => {
		tryAutoSignin()
	}, [])

	return null
}

export default ResolveAuthScreen
