<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home" class="link">Home</router-link> |
    </div>
    <!-- Render the content of the current page view -->
    <router-view/>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

@media (max-width: 480px) {
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (min-width: 1025px) {
}

#app {
  font-family: 'Poppins', sans-serif;
  background: #66A182;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  height:100%;
  overflow:hidden;
}

#nav {
  background: linear-gradient(180deg, #fff, rgb(58, 36, 36)) ;
  opacity: 0.8;
  margin: 0;
  margin-bottom: 2em;
  padding: 1em;
  font-size: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.link {
  color: #ffffff;
}

.link:hover {
  color: #a9a7a7;
}
</style>
