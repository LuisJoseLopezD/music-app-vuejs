<template>
  
  <div id="app">

    <!-- head -->

    <ul class="menu">

      <li><router-link to="/MusicApp" active-class="active" title="MusicApp">Music App</router-link></li>
      <li><router-link to="/artist" active-class="active" title="artist">Artist</router-link></li>
      <li><router-link to="/gallery" active-class="active" title="gallery">Gallery</router-link></li>

    </ul>

    <!-- load content with routes -->
    <router-view></router-view>

  </div>

</template>


<script>
export default {
  name: 'App'
}
</script>

<style>

body {
  font-size: 18px;
}

.menu {
  display: flex;
  justify-content: center;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 10px;
  overflow: hidden;
  background-color: #212121;
}

li {
  padding-left: 15px;
}

li a {
  display: block;
  color: #FFF;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #1db954;
  text-decoration: none;
  border-radius: 8px;
}

li a.active {
  color: white;
  background-color: #1db954;
  text-decoration: none;
  border-radius: 8px;
}

</style>

