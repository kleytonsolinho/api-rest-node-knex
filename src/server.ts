import { app } from './app'
import { env } from './env'

app
	.listen({
		port: env.PORT,
	})
	.then(() => {
		console.log('🔥HTTP server runing on http://localhost:3333')
	})
