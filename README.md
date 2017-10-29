<h1 align="center">manjula</h1>

<h5 align="center">
A proof-of-concept Apollo loading query counter.
</h5>

### Build the Library

```
yarn build
```

### Run the Tests

```
yarn test
```

### Example

```js
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import manjulaReducer from 'manjula';

import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { ApolloProvider } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'localhost:3000/graphql',
})

const client = new ApolloClient({
    networkInterface,
});

const store = createStore(
  combineReducers({
    manjula: manjulaReducer,
    apollo: client.reducer(),
  }),
  {},
  compose(
    applyMiddleware(client.middleware())
  )
);

const rootElement = document.getElementById('app');

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <AppContainer />
  </ApolloProvider>,
  rootElement
);
```

Now, your Redux state should contain a `manjula` object with following structure:

```json
manjula: {
  "numberOfApolloQueriesLoading": 0,
  "isApolloLoadingAnyQueries": false
}
```

### TODO

Integrate mutations, subscriptions, store resets, stops, and errors.

### License

Dual CC0 and MIT (choose the one that suits you better and use it for good, not evil ;)).

