import { Repo } from "../../../api/src/models/Repo"

type ListItemProps = {
  repo: Repo,
  languageFilter: string
}

export default function ListItem({repo, languageFilter}: ListItemProps) {
  const {name, description, language, forks, created_at} = repo

  const visible = languageFilter === 'all' || languageFilter === language ? true : false;

  return (
    <tr>
      {visible &&
        <>
          <td>{name}</td>
          <td>{description}</td> 
          <td>{language}</td>
          <td>{forks}</td>
          <td>{created_at}</td>
        </>
      }
    </tr>
  )
}
