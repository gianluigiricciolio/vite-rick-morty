<script>
import axios from 'axios';

// import components
import CharacterCard from './assets/components/CharacterCard.vue';

export default {
  data() {
    return {
      url: 'https://rickandmortyapi.com/api/character',
      characters: []
    }
  },

  components: {
    CharacterCard
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
  <div class="container-md text-center">
    <h1>Rick and Morty characters</h1>
    <ul class="row row-cols-4">
      <CharacterCard v-for="character in characters" :character="character"></CharacterCard>
    </ul>

  </div>
</template>

<style scoped lang="scss">
.character-card {
  text-align: center;
}

img {
  border-radius: 50%;
  max-width: 100%;
}

h1 {
  margin: 40px 0;
}
</style>
