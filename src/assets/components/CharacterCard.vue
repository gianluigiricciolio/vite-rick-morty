<script>

// import components

export default {
  name: 'CharacterCard',
  data() {
    return {
    }
  },
  props: ['character']
}



</script>

<template>
  <div class="col">
    <div class="character-card">
      <img :src="character.image" alt="">
      <h4>{{ character.name }}</h4>
      <div>{{ character.status }}</div>
      <div>{{ character.species }}</div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.character-card {
  margin-bottom: 20px;
  text-align: center;
}

img {
  border-radius: 50%;
  max-width: 100%;
}
</style>
