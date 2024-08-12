<!-- src/App.vue -->
<template>
  <div id="app">
    <header>
      <h1>性格診断テスト</h1>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <p>&copy; 2024 Your Company Name. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background-color: #4caf50;
  color: white;
  padding: 1rem;
  text-align: center;
}

main {
  flex-grow: 1;
  padding: 2rem;
}

footer {
  background-color: #f8f8f8;
  color: #666;
  padding: 1rem;
  text-align: center;
  font-size: 0.8rem;
}
</style>
