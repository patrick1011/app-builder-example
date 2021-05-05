import { createApp } from 'yuzu'

import app from './components'
import queries from './queries'
import resources from './resources'

export default createApp({
	app,
	queries,
	resources
})