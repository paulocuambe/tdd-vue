<template>
  <main class="container">
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'TodoApp' }">Todo App</router-link>
    <router-view />
  </main>
</template>
