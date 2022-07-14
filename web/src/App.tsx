import axios from 'axios';
import { useEffect, useState } from 'react';
import {Repo} from './models/Repo'
import './App.css';
import List from './components/List';
import "./styles.css"

export function App() {

  const [data, setData] = useState<Repo[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:4000/repos')
      const sortedData = response.data.sort((a: Repo ,b : Repo ) => {
        return Date.parse(b.created_at) - Date.parse(a.created_at)
      })
      setData(sortedData)
    }
    
    fetchData()
      .catch(err => {
        console.log(err)
        alert("Error, please try again shortly")
      })
  }, [])

  return (
    <div className="App">
      <List data={data} />
    </div>
  );
}
