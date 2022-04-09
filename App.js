import UserList from './UserList'
import { Axios } from 'axios';
import { useEffect } from 'react';
import './App.css';
function  App() {
  useEffect(()=>{
    const fetchData = () => {
      return Axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => console.log(response.data));}
  },[]);
  return (
    <div >
      
      <UserList />
    </div>
  );
}

export default App;
