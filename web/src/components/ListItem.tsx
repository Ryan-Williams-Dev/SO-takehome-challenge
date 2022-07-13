import { Repo } from "../../../api/src/models/Repo"

type ListItemProps = {
  repo: Repo
}

export default function ListItem({repo}: ListItemProps) {
  const {name, description, language, forks, created_at} = repo

  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td> 
      <td>{language}</td>
      <td>{forks}</td>
      <td>{created_at}</td>
    </tr>
  )
}
