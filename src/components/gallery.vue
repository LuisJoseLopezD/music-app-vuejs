<template>
  
  <div id="app">

  	<!-- Photo Grid -->
<div class="row"> 
  <div class="column">
    <img src="../assets/8.jpg">
    <img src="../assets/2.jpg" style="width:100%">

  </div>
  <div class="column">
    <img src="../assets/3.jpg" style="width:100%">
    <img src="../assets/4.jpg" style="width:100%">
  </div>  
  <div class="column">
    <img src="../assets/5.jpg" style="width:100%">
    <img src="../assets/6.jpg" style="width:100%">
  </div>
  <div class="column">
    <img src="../assets/7.jpg" style="width:100%">
    <img src="../assets/1.jpg" style="width:100%">
  </div>
</div>

  </div>

</template>


<script>
export default {
  name: 'about'
}
</script>

<style>

	* {
	  box-sizing: border-box;
	}

	body {
	  margin: 0;
	  font-family: Arial;
	}

	.header {
	  text-align: center;
	  padding: 32px;
	}

	.row {
	  display: -ms-flexbox; /* IE10 */
	  display: flex;
	  -ms-flex-wrap: wrap; /* IE10 */
	  flex-wrap: wrap;
	  padding: 0 4px;
	}

	/* Create four equal columns that sits next to each other */
	.column {
	  -ms-flex: 25%; /* IE10 */
	  flex: 25%;
	  max-width: 25%;
	  padding: 0 4px;
	}

	.column img {
	  margin-top: 8px;
	  vertical-align: middle;
	  width: 100%;
	}

	/* Responsive layout - makes a two column-layout instead of four columns */
	@media screen and (max-width: 800px) {
	  .column {
	    -ms-flex: 50%;
	    flex: 50%;
	    max-width: 50%;
	  }
	}

	/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
	@media screen and (max-width: 600px) {
	  .column {
	    -ms-flex: 100%;
	    flex: 100%;
	    max-width: 100%;
	  }
	}

</style>

