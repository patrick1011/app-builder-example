import { apiResource, postgresResource } from '@yuzu/resources'

export const onboardingAPI = apiResource({
    baseURL: process.env.ONBOARDING_API_BASE,
    headers: {
		'X-API-KEY': process.env.ONBOARDING_API_KEY,
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	},
})

export const db = postgresResource({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
})