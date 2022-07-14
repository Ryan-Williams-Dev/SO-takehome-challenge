import { MenuItem, Select, SelectChangeEvent, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useState } from "react";
import { Repo } from "../models/Repo";
import ListItem from "./ListItem";

type ListProps = {
  data: Repo[]
}

export default function List({data}: ListProps) {

  const [languageFilter, setLanguageFilter] = useState('all')

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>
            Language 
            <Select label="Filter" value={languageFilter} onChange={(e: SelectChangeEvent) => setLanguageFilter(e.target.value)} >
              <MenuItem value='all'>All</MenuItem>
              <MenuItem value='PHP'>PHP</MenuItem>
              <MenuItem value='English'>English</MenuItem>
              <MenuItem value='French'>French</MenuItem>
              <MenuItem value='TypeScript'>TypeScript</MenuItem>
            </Select>
          </TableCell>
          <TableCell>Forks count</TableCell>
          <TableCell>Created At</TableCell>
          <TableCell>Expand</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data && data.map((element, index) => {
          return(
            <ListItem repo={element} key={index} languageFilter={languageFilter}/>
          )
        })}
      </TableBody>
    </Table>
  )
}
