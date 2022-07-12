import { Router, Request, Response } from 'express';
import { Repo } from '../models/Repo';
const fetch = require('node-fetch')

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!

  const dataFetch = await fetch('https://api.github.com/users/silverorange/repos')
  const data = await dataFetch.json()
  const nonForkRepos = data.filter((repo: Repo) => {
    if (repo.fork === false) return repo
  })
  res.send(nonForkRepos)

  // res.json([]);
});
