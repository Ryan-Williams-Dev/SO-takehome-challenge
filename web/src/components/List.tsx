import { Repo } from "../../../api/src/models/Repo";
import ListItem from "./ListItem";

type ListProps = {
  data: Repo[]
}

export default function List({data}: ListProps) {

  

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Language</th>
          <th>Forks count</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((element, index) => {
          return(
            <ListItem repo={element} key={index} />
          )
        })}
      </tbody>
    </table>
  )
}
