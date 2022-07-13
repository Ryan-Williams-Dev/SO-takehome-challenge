import axios from "axios"
import { useEffect, useState } from "react"
import { Repo } from "../../../api/src/models/Repo"
import { Commit } from "../../../api/src/models/Commit"
import { TableCell, TableRow } from "@mui/material"
import MuiMarkdown from 'mui-markdown';

type ExtraInfoCardProps = {
  repo: Repo
}

export default function ExtraInfoCard({repo}: ExtraInfoCardProps) {

  const [latestCommit, setLatestCommit] = useState<Commit | null>(null)
  const [readMe, setReadMe] = useState(null)

  useEffect(() => {
    const fetchCommits = async () => {
      const response = await axios.get(`https://api.github.com/repos/silverorange/${repo.name}/commits`)
      setLatestCommit(response.data[0])
    }

    const fecthReadMe = async () => {
      const response = await axios.get(`https://raw.githubusercontent.com/${repo.full_name}/master/README.md`)
      setReadMe(response.data)
    }
    
    fetchCommits()
    .catch(err => {
      console.log(err)
    })
    fecthReadMe()
    .catch(err => {
      console.log(err)
    })
  }, [])
  
  console.log(latestCommit)
  return (
    <>
      <TableRow>
        <TableCell>
          <strong>Most Recent Commit</strong>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell><strong>Date</strong></TableCell>
        <TableCell><strong>Author</strong></TableCell>
        <TableCell><strong>Message</strong></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>{latestCommit?.commit.author.date}</TableCell>
        <TableCell>{latestCommit?.commit.author.name}</TableCell>
        <TableCell>{latestCommit?.commit.message}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <strong>Read Me</strong>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          {readMe &&
            <MuiMarkdown>
              {readMe}
            </MuiMarkdown>
          }
        </TableCell>
      </TableRow>
    </>
  )
}
