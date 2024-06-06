<script>
import axios from 'axios';

// import components
export default {
  data() {
    return {
      url: 'https://rickandmortyapi.com/api/character',
      characters: [],
    }
  },

  methods: {
    apiCall() {
      axios
        .get(this.url)
        .then((response) => {
          this.characters = response.data.results;
          console.log(JSON.parse(JSON.stringify(this.characters)));
        })

    }
  },

  created() {
    this.apiCall();
  }
}



</script>

<template>
  <div class="container text-center">
    <h1>Rick and Morty characters</h1>
    <ul>
      <li v-for="character in characters">
        <img :src="character.image" alt="">
        <h3>{{ character.name }}</h3>
      </li>
    </ul>

  </div>
</template>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

img {
  max-width: 200px;
  border-radius: 50%;
  border: 10px solid white;
}
</style>
