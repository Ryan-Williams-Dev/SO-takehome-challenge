import { Router, Request, Response } from 'express';
import { Repo } from '../models/Repo';
const fetch = require('node-fetch');
const fs = require('fs').promises;

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!

  const dataFetch = await fetch(
    'https://api.github.com/users/silverorange/repos'
  );
  const fetchedData = await dataFetch.json();

  const localDataRaw = await fs.readFile('data/repos.json');
  const localData = JSON.parse(localDataRaw);

  let nonForkRepos = [];

  if (fetchedData && localData) {
    nonForkRepos = [...fetchedData, ...localData].filter((repo: Repo) => {
      return repo.fork === false ? true : false;
    });
  }

  res.json(nonForkRepos);
});
