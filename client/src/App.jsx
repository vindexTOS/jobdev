import React, { useState, useEffect } from 'react';
import Header from "./components/Header"
import Resume from "./components/Resume"
import axios from 'axios';

function App() {
  const [resumeIndex,setresumeIndex] = useState(0)
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const nextUser = ()=>{
      // const randomNumber = Math.floor(Math.random() * 2) + 1;
      setresumeIndex(1)

  }

  // Show a loading message or spinner while data is being fetched
  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[80%] h-[100%] m-auto ">
      <Header />
      <Resume data={data[resumeIndex]} />
      <div className="flex gap-4 justify-center ">
        <button onClick={nextUser} className=' rounded-full p-3 bg-green-700'>Save</button>
        <button className=' rounded-full p-3 bg-red-700'>Next</button>
      </div>
    </div>
  );
}

export default App;