<script setup lang="ts">
import { POSTS_QUERY } from './graphql';
import { type PostsQuery } from './graphql.generated';
import { useQuery } from '@vue/apollo-composable'

const { result, loading, error } = useQuery<PostsQuery>(POSTS_QUERY);
</script>

<template>
  <p v-if="error">Something went wrong...</p>
  <p v-if="loading">Loading...</p>
  <p v-else v-for="post in result?.posts" :key="post.id">
    {{ post.title }} {{ post.id }}
  </p>
  <div></div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
