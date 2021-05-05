import { Table, TextInput } from '@yuzu/components'
import { useQuery } from '@yuzu/core'

import fetchCustomers from '../queries/fetch-customers'

const UsersTable = () =>
	<div>
		<h1>Users</h1>
		<TextInput
			name="usersTextInput"
			label="Name"/>
		<Table
			name="usersTable"
			paginated={true}
			data={useQuery(fetchCustomers)}/>
	</div>

export default UsersTable