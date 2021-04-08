<template>
  <header class="container site-header">
    <h1 class="site-logo">Cool App</h1>

    <nav class="site-navigation">
      <router-link class="site-navigation__link" to="/">Home</router-link>
      <router-link class="site-navigation__link" :to="{ name: 'TodoApp' }">Todo List</router-link>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  margin: 5rem auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-logo {
  font-size: var(--text-h6);
  color: var(--color-black);
  font-weight: 900;
}

.site-navigation {
  flex: 0 1 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.site-navigation__link {
  margin-left: 2rem;
  text-transform: uppercase;
  font-weight: 600;
}

.site-navigation__link:first-child {
  margin-left: 0;
}

.router-link-active {
  color: var(--color-red);
}
</style>
