import axios from 'axios';
import { useEffect, useState } from 'react';
import {Repo} from '../../api/src/models/Repo'
import './App.css';

export function App() {

  const [data, setData] = useState<any>(null)


  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await axios.get('http://localhost:4000/repos')
      setData(fetchedData)
    }
    
    fetchData()
      .catch(err => {
        console.log(err)
      })
  }, [])
  

  return (
    <div className="App">
      <p>{data}</p>
      
    </div>
  );
}
