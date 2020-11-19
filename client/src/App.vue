<template>
  <div id="app">
    <nav id="navbar" class="navbar navbar-light justify-content-between" style="background-color: #e98d58;">
      <a id="navbar-text" class="navbar-brand" href="/">Dentistimo</a>
      
      <form id="large-screen" class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">

        <button id="search-button" type="button" class="btn btn-outline-light">Search</button>
      </form>

    <div id="small-screen">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Features</a>
            <a class="nav-item nav-link" href="#">Pricing</a>
            <a class="nav-item nav-link disabled" href="#">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap');

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
  font-family: 'Libre Baskerville', serif;
}

.btn:hover {
  color:#e98d58;
}

@media (max-width: 600px) {
  #large-screen{
    display: none;
  }
  #small-screen{
    display: inline;
  }
}

@media (min-width: 600px) {
  #large-screen{
    display: inline;
  }
  #small-screen{
    display: none;
  }
}

</style>
