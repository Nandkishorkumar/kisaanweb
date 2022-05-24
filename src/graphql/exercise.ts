import * as Queries from './queries';
import * as Mutations from './mutations';
import write from 'write'

export const getCombinedQueriesAndMutations = () => {
  const { ...queries } = Queries;
  const queryValues = Object.values(queries);
  let combinedQueries = ''
  queryValues.map(val => { combinedQueries += val })
  // console.log({ combinedQueries })


  const { ...mutations } = Mutations;
  const mutationValues = Object.values(mutations);
  let combinedMutations = ''
  mutationValues.map(val => { combinedMutations += val })
  // console.log({ combinedMutations })

  const allCombined = combinedQueries + "\n" + combinedMutations;
  console.log({ allCombined })
  // write.sync('./product.graphql', allCombined, { overwrite: true })
}