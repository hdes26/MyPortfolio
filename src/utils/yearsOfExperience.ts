import moment from 'moment'

export const calculateYearsOfExperience = () => {
  const years = moment().diff(moment([2022, 1, 11]), 'years')
  return years
}
