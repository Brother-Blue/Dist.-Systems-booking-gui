<template>
  <div id="app">
    <nav
      id="navbar"
      class="navbar navbar-light justify-content-between"
      style="background-color: #e98d58;"
    >
      <a id="navbar-text" class="navbar-brand" href="/">Dentistimo</a>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap");

#navbar {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#available {
  font-style: italic;
}

#decription {
  margin: 2em;
}

#navbar-text {
  color: #fff;
  font-family: "Libre Baskerville", serif;
}

.btn:hover {
  color: #e98d58;
}

</style>
