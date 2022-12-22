import { Heading } from "@chakra-ui/react";
import { useState, useEffect } from 'react';


function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  const fetchData = async () => {
    setIsLoading(true)
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUsers(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    isLoading ? <div>Loading...</div> :
    <div className="App">
      <button onClick={fetchData}>Click</button>
    {users.map((user) => {
      return (
        <div key={user.id}>
          <Heading>{user.name}</Heading>
          <p>{user.email}</p>
        </div>
      )
    })}

    </div>
  );
}

export default App;
