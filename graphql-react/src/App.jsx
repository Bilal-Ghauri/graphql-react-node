import './App.css'
import { useQuery, gql, useMutation } from '@apollo/client'

const GET_USERS = gql`
	{
		users {
			id
			first_name
			last_name
			email
			password
		}
	}
`

const DELETE_USER_MUTATION = gql`
	mutation deleteUser($id: ID!) {
		deleteUser(id: $id) {
			id
		}
	}
`

function App() {
	const { data, loading, error } = useQuery(GET_USERS)
	// const [
	// 	deleteUser,
	// 	{
	// 		data: deleteUserData,
	// 		error: deleteUserError,
	// 		loading: deleteUserLoading,
	// 	},
	// ] = useMutation(DELETE_USER_MUTATION, {
	// 	update(cache, { data: { deleteUser } }) {
	// 		const existingUsers = cache.readQuery({ query: GET_USERS })
	// 		if (existingUsers?.users) {
	// 			// Filter out the deleted user
	// 			const updatedUsers = existingUsers.users.filter(
	// 				(user) => user.id !== deleteUser.id
	// 			)

	// 			// Write the updated users list back to the cache
	// 			cache.writeQuery({
	// 				query: GET_USERS,
	// 				data: { users: updatedUsers },
	// 			})
	// 		}
	// 	},
	// })

	const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
		refetchQueries: [{query : GET_USERS}]
	})

	if (loading) return 'Loading...'
	if (error) return <pre>{error.message}</pre>

	const removeUser = async (userId) => {
		const response = await deleteUser({ variables: { id: userId } })
		console.log('Delete user data', response)
	}

	return (
		<>
			<h2 className='text-4xl text-center my-3'>Hello Users</h2>
			<div>
				{data?.users?.map((user) => {
					return (
						<div
							key={user.id}
							className='single-user mb-3 p-3 w-1/3 border-2 border-black mx-auto'>
							<p>{user.id}</p>
							<p>{user.first_name}</p>
							<p>{user.last_name}</p>
							<p>{user.email}</p>
							<button className='p-2 bg-green-500 me-2 mt-3 text-white'>
								Edit
							</button>
							<button
								onClick={() => removeUser(user.id)}
								className='p-2 bg-red-500 text-white'>
								Delete
							</button>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default App
