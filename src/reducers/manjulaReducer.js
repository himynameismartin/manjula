import * as types from '../constants/ManjulaTypes';
import INITIAL_STATE from '../constants/InitialState';

function isApolloLoadingAnyQueries(numberOfApolloQueriesLoading) {
  return numberOfApolloQueriesLoading ? true : false;
}

function manjulaQueryStateDiff(numberOfApolloQueriesLoading) {
  return {
    numberOfApolloQueriesLoading: numberOfApolloQueriesLoading,
    isApolloLoadingAnyQueries: isApolloLoadingAnyQueries(numberOfApolloQueriesLoading),
  }
}

export default function (state = INITIAL_STATE, action) {
  const numberOfApolloQueriesLoading = state.numberOfApolloQueriesLoading;

  switch (action.type) {
    case types.APOLLO_QUERY_INIT: {
      return Object.assign({}, state, {
        ...manjulaQueryStateDiff(numberOfApolloQueriesLoading + 1),
      });
    }
    case types.APOLLO_QUERY_RESULT:
    case types.APOLLO_QUERY_RESULT_CLIENT: {
      return Object.assign({}, state, {
        ...manjulaQueryStateDiff(numberOfApolloQueriesLoading - 1),
      });
    }
    default: {
      return state;
    }
  }
}
