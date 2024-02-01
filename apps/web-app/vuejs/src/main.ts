import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import App from './App.vue'

const cache = new InMemoryCache()

const httpLink = new HttpLink({
  uri: 'http://localhost:9001',
});

const apolloClient = new ApolloClient({
  cache,
  link: httpLink,
})

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.mount('#app');