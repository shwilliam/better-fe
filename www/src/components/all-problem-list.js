import React from 'react'
import {ALL_PROBLEMS} from '../context'
import {ProblemList} from './'

export const AllProblemList = () => (
  <ProblemList title="All problems" query={ALL_PROBLEMS} />
)
