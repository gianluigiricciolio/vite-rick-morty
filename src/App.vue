<script>
import axios from 'axios';
import { store } from './store';

// import components
import CharacterCard from './assets/components/CharacterCard.vue';
import SearchBar from './assets/components/SearchBar.vue';
import Pagination from './assets/components/Pagination.vue';

export default {
  data() {
    return {
      store,
    }
  },

  components: {
    CharacterCard,
    SearchBar,
    Pagination
  },

  methods: {
    apiCall() {
      const params = {
        name: this.store.userInput,
        status: this.store.selectedStatus,
        page: this.store.page,
      }

      axios
        .get(this.store.apiUrl, { params })
        .then((response) => {
          this.store.totalPages = response.data.info.pages;
          this.store.characters = response.data.results;
          console.log((this.store.characters));
        })
        .catch(error => {
          this.store.characters = [];
          console.log(error);
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
      <SearchBar @refresh="apiCall"></SearchBar>
    </div>

  </header>
  <main>
    <Pagination @search="apiCall"></Pagination>
    <div class="container text-center">
      <div v-if="store.characters.length != 0" class="row row-cols-4">
        <CharacterCard v-for="character in store.characters" :character="character"></CharacterCard>
      </div>
      <div v-else class="not-found">Nessun risultato trovato</div>
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
