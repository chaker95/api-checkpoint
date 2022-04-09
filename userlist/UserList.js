import React, { useEffect, useState} from 'react';
import axios from 'axios';
import './UserList.css' ;

function UserList  ()  {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
    
  }, []);

  return (
    <div>
    {loading && <div>Loading</div>}
    {!loading && (
      <div>
        <h2 className='title'>Our User List </h2>
        <div className='head'  >
            <span className='foreach1'>User Id</span>
            <span className='foreach1'>Name</span>
            <span className='foreach1'>Email</span>
            <span className='foreach1'>Phone</span>
            <span className='foreach1'>Adress City</span>
          </div> 
        {data.map(item => (
          <div className='List' key={item.id} >
            <span className='foreach2'>{item.id}</span>
            <span className='foreach2'>{item.name}</span>
            <span className='foreach2'>{item.email}</span>
            <span className='foreach2'>{item.phone}</span>
            <span className='foreach2'>{item.address.city}</span>
          </div> 
        ))}
      </div>
    )}
    </div>
  )
}
export default UserList  ;