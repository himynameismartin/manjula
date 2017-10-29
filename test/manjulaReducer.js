import chai from 'chai';
const should = chai.should();

import manjulaReducer from '../src/';
import * as types from '../src/constants/ManjulaTypes';
import INITIAL_STATE from '../src/constants/InitialState';

const LOADING_STATE = {
  numberOfApolloQueriesLoading: 1,
  isApolloLoadingAnyQueries: true,
};

describe('Manjula Reducer', () => {
  describe('Create an instance', () => {
    it('it should init', (done) => {
      const firstStep = manjulaReducer(INITIAL_STATE, {type: 'NO'});
      firstStep.should.be.a('object');
      firstStep.should.be.eql(INITIAL_STATE);
      done();
    });
  });
  describe('APOLLO_QUERY_INIT', () => {
    it('it should return object with one loading query', (done) => {
      const firstStep = manjulaReducer(INITIAL_STATE, {type: types.APOLLO_QUERY_INIT});
      firstStep.should.be.a('object');
      firstStep.should.be.eql(LOADING_STATE);
      done();
    });
  });
  describe('APOLLO_QUERY_RESULT after APOLLO_QUERY_INIT', () => {
    it('it should return object with no loading query', (done) => {
      const firstStep = manjulaReducer(INITIAL_STATE, {type: types.APOLLO_QUERY_INIT});
      const secondStep = manjulaReducer(firstStep, {type: types.APOLLO_QUERY_RESULT});
      secondStep.should.be.a('object');
      secondStep.should.be.eql(INITIAL_STATE);
      done();
    });
  });
});
