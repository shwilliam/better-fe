import React from 'react'
import {RECENT_PROBLEMS} from '../context'
import {ProblemList} from './'

export const RecentProblemList = () => (
  <ProblemList title="Recent problems" query={RECENT_PROBLEMS} />
)
