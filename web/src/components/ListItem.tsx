import { TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import { Repo } from "../../../api/src/models/Repo"
import ExtraInfoCard from "./ExtraInfoCard";

type ListItemProps = {
  repo: Repo,
  languageFilter: string
}

export default function ListItem({repo, languageFilter}: ListItemProps) {
  const {name, description, language, forks, created_at} = repo

  const visible = languageFilter === 'all' || languageFilter === language ? true : false;
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      {visible &&
        <>
          <TableRow onClick={() => setExpanded(!expanded)} >
            <TableCell>{name}</TableCell>
            <TableCell>{description}</TableCell> 
            <TableCell>{language}</TableCell>
            <TableCell>{forks}</TableCell>
            <TableCell>{created_at}</TableCell>
          </TableRow>
          {expanded &&
            <ExtraInfoCard repo={repo} />
          }
        </>
      }
    </>
  )
}
