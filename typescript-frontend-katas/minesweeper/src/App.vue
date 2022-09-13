<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
:root {
  --windows-grey: #e3dfd1;
  --windows-blue: #245edb;
  --windows-bar-gradient: linear-gradient(
      to bottom,
      var(--windows-blue) 0%,
      #3f8cf3 9%,
      var(--windows-blue) 18%,
      var(--windows-blue) 92%,
      #333 100%
    )
    center/cover no-repeat;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html,
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}
</style>
