import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import Search from '../components/Search';
import UsersTable from '../components/UsersTable';

const UserList = () => {
    const [ users, setUsers] = useState([]);
  //const [loading, setLoading] = useState(false)
   const [query, setQuery] = useState('');
    useEffect(() => {

        const fetchUsers = async () => {
            //setLoading(true)
            const response = await  Axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data)
            //setLoading(false)

        }
        fetchUsers()
    }, [])
  //  filter 
  const searchInputField = (rows) => {
    return rows.filter(
      (row) =>
        row.name.toLowerCase().indexOf(query) > -1 ||
        row.email.toLowerCase().indexOf(query) > -1 
    );
  };
  const onChangeHandler = e => setQuery(e.target.value)
    return (
      <div className="content-wrapper">
        <div className="">
          <h1 className="mt-2 text-md">Manage Users</h1>
          <div className="flex flex-row justify-center">
            <Search
              placeholder="User  Name, Email"
              value={query}
              onChangeHandler={onChangeHandler}
            />
          </div>
          <UsersTable users={searchInputField(users)} />
        </div>
      </div>
    );
}

export default UserList
