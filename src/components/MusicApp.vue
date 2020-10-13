<template>
  
  <div id="app">

  	<header>
  		<h1>Music App</h1>
  	</header>

  	<main>
      <section class="player">
        <h2 class="song-title">{{ current.title }} - <span>{{ current.artist }}</span></h2>
        <div class="control">
          <img class="prev" @click="prev" src="https://img.icons8.com/windows/64/000000/circled-chevron-right.png"/>
          <img class="play" v-if="!isPlaying" @click="play" src="https://img.icons8.com/windows/64/000000/play.png"/>
          <img class="pause" v-else @click="pause" src="https://img.icons8.com/windows/64/000000/pause.png"/>
          <img class="next" @click="next" src="https://img.icons8.com/windows/64/000000/circled-chevron-right.png"/>
        </div>
      </section>
  		<section class="playlist">
  			<h3>The Playlist</h3>
  			<button v-for="song in songs" :key="song.src" @click="play(song)" :class="(song.src == current.src) ? 'song playing' : 'song'">
  				{{ song.title }} - {{ song.artist }}
  			</button>
  		</section>
  	</main>

  	<footer>Canserbero tribute by @luisjoselopezd</footer>

  </div>

</template>


<script>
export default {
  name: 'home',
  // cualquier dato cambiado cambiará en la clase song-title
  data () {
  	return {
  		current: {},
  		index: 0,
  		isPlaying: false,
  		songs: [
  			{
  				title: 'Y en un espejo ví',
  				artist: 'Canserbero',
  				src: require('../assets/y_en_un_espejo_vi.mp3')
  			},
  			{
  				title: 'Sin mercy',
  				artist: 'Canserbero',
  				src: require('../assets/sin_mercy.mp3')
  			}
  				],
  				player: new Audio()
  			}
  		},

  	//stop music when routes changes

  	beforeRouteLeave (to, from, next) {
		this.player.pause();
		this.isPlaying = false;
		next();
		},	

  methods: {
  	play (song) {
  		if (typeof song.src != "undefined"){
  			this.current = song;
  			this.player.src = this.current.src;
  		}
  		this.player.play();

  		//cuando termine la canción comience una nueva

  		this.player.addEventListener('ended', function (){
  			this.index++;
  			if (this.index > this.songs.length -1){
  			this.index = 0;
  			}

	  		this.current = this.songs[this.index];
	  		this.play(this.current);
  		}.bind(this));

  		this.isPlaying = true;
  	},

  	pause () {
  		this.player.pause();
  		this.isPlaying = false;
  	},
  	next () {
  		this.index++;
  		if (this.index > this.songs.length -1){
  			this.index = 0;
  		}

  		this.current = this.songs[this.index];
  		this.play(this.current);
  	},
  	prev () {
  		this.index--;
  		if (this.index < 0){
  			this.index = this.songs.length -1;
  		}

  		this.current = this.songs[this.index];
  		this.play(this.current);
  	},
  },		

  created () {
  	this.current = this.songs[this.index];
  	this.player.src = this.current.src;
  	// this.player.play();
  }	
  	
}
</script>

<style>

	* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	}

	body {
		font-family: sans-serif;
	}

	header {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 15px;
		background-color: #212121;
		color: #FFF;
	}

	main {
		width: 100%;
		max-width: 768px;
		margin: 0 auto;
		padding: 25px;
	}

	.song-title {
		color: #53565A;
		font-size: 32px;
		font-weight: 700;
		text-transform: uppercase;
		text-align: center;
	}

	.song-title span {
		font-weight: 400;
		font-style: italic;
	}

	.control {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 30px 15px;
	}

	button {
		appearance: none;
		background: none;
		border: none;
		outline: none;
		cursor: pointer;
	}

	button:hover {
		opacity: 0.8;
	}

	.play, .pause, .next {
		cursor: pointer;
	}	

	.prev {
		-webkit-transform: scaleX(-1);
	    -moz-transform: scaleX(-1);
	    transform: scaleX(-1);
	    filter: FlipH;
	    -ms-filter: "FlipH";
	    cursor: pointer;		
	}

	.playlist {
		padding: 0px 30px;
	}

	.playlist h3 {
		color: #212121;
		font-size: 28px;
		font-weight: 600;
		margin-bottom: 30px;
		text-align: center;
	}

	.playlist .song {
		display: block;
		width: 100%;
		padding: 15px;
		font-size: 20px;
		font-weight: 700;
		cursor: pointer;
	}

	.playlist .song.playing {
		color: #FFF;
		background-color: #1db954;
		border-radius: 8px;
	}

	footer {
		padding: 20px;
		text-align: center;
		font-size: 12px;
		color: #212121;
	}

</style>

