import { useEffect, useState } from 'react';

// const USERS_URL = 'https://example.com/api/users';
const USERS_URL = 'https://6660c8635425580055b53554.mockapi.io/api/users';

export const App = () => {
	const [users, setUsers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const responseUsers = await fetch(
					`${USERS_URL}?page=${currentPage}&limit=10`
				);
				const dataUsers = await responseUsers.json();
				setUsers(dataUsers);
				const responsePages = await fetch(
					`${USERS_URL}?page=${currentPage}`
				);
				const dataPages = await responsePages.json();
				const pages = Math.ceil(dataPages.length / 10);
				setTotalPages(pages);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchUserData();
	}, [currentPage]);

	const gotoFirstPage = () => setCurrentPage(1);
	const gotoLastPage = () => setCurrentPage(totalPages);
	const gotoNextPage = () =>
		setCurrentPage(current => Math.min(current + 1, totalPages));
	const gotoPreviousPage = () =>
		setCurrentPage(current => Math.max(current - 1, 1));

	return (
		<div>
			<table className='table'>
				<thead>
					<tr>
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
					</tr>
				</thead>
				<tbody>
					{users.map(user => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.firstName}</td>
							<td>{user.lastName}</td>
						</tr>
					))}
				</tbody>
			</table>
			<section className='pagination'>
				<button
					onClick={gotoFirstPage}
					disabled={currentPage === 1}
					className='first-page-btn'>
					first
				</button>
				<button
					onClick={gotoPreviousPage}
					disabled={currentPage === 1}
					className='previous-page-btn'>
					previous
				</button>
				<button
					onClick={gotoNextPage}
					disabled={currentPage === totalPages}
					className='next-page-btn'>
					next
				</button>
				<button
					onClick={gotoLastPage}
					disabled={currentPage === totalPages}
					className='last-page-btn'>
					last
				</button>
			</section>
		</div>
	);
};
