import { Table, Button } from '@yuzu/components'
import { useQuery, useState, exportCSV } from '@yuzu/core'

import fetchOrders from '../queries/fetch-orders'

const OrdersTable = () =>
	<div>
		<h1>{ useState(state => state.usersTable.selectedRow.data.first_name) }'s Order</h1>
		<Button
			text="Export to CSV"
			onClick={exportCSV(useQuery(fetchOrders), 'order-data.csv')}/>
		<Button
			text="Mark as gift"
			onClick={useQuery(markAsGift)}/>
		<Table
			name="ordersTable"
			data={useQuery(fetchOrders)}/>
	</div>

export default OrdersTable