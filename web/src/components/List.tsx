import { useState } from "react";
import { Repo } from "../../../api/src/models/Repo";
import ListItem from "./ListItem";

type ListProps = {
  data: Repo[]
}

export default function List({data}: ListProps) {

  const [languageFilter, setLanguageFilter] = useState('all')

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>
            Language 
            <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setLanguageFilter(e.currentTarget.value)} >
              <option value='all'>All</option>
              <option value='PHP'>PHP</option>
              <option value='English'>English</option>
              <option value='French'>French</option>
              <option value='TypeScript'>TypeScript</option>
            </select>
          </th>
          <th>Forks count</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((element, index) => {
          return(
            <ListItem repo={element} key={index} languageFilter={languageFilter}/>
          )
        })}
      </tbody>
    </table>
  )
}
