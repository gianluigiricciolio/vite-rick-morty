<script>
import axios from 'axios';

// import components
import CharacterCard from './assets/components/CharacterCard.vue';
import SearchBar from './assets/components/SearchBar.vue';

export default {
  data() {
    return {
      url: 'https://rickandmortyapi.com/api/character',
      characters: []
    }
  },

  components: {
    CharacterCard,
    SearchBar,
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
  <header>
    <div class="container text-center">
      <h1 class="my-5">Rick and Morty characters</h1>
      <SearchBar></SearchBar>
    </div>

  </header>
  <main>
    <div class="container text-center">
      <ul class="row row-cols-4">
        <CharacterCard v-for="character in characters" :character="character"></CharacterCard>
      </ul>
    </div>

  </main>
</template>

<style scoped lang="scss">
.character-card {
  text-align: center;
}

img {
  border-radius: 50%;
  max-width: 100%;
}
</style>
