<template>
  <router-link to="/">Home</router-link>
  <router-link :to="{ name: 'TodoApp' }">Todo App</router-link>
  <router-view />
</template>
