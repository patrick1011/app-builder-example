import { onboardingDB, onboardingAPI } from './resources'

export const fetchCustomers = {
	value: state => `select * from users where first_name ilike ${ state.usersTextInput.value }`,
	resource: onboardingDB,
}

export const fetchOrders = {
	value: state => `select * from orders where user_id = ${ state.usersTable.selectedRow.data.id } order by id`,
	resource: onboardingDB,
}

export const markAsGift = {
	actionType: 'PUT',
	url: state => `https://some-url.com/orders/${ state.ordersTable.selectedRow.data.id }`,
	body: { gift: true },
	resource: onboardingAPI,
	onSuccessTrigger: [fetchOrders]
}