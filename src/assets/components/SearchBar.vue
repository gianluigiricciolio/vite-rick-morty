<script>

import { store } from '../../store';
// import components

export default {
    name: 'SearchBar',
    data() {
        return {
            store,
        }
    },

    emits: [
        'refresh'
    ],

    methods: {
        search() {
            this.store.page = 1;
            this.$emit('refresh');
        },

        resetValues() {
            this.store.page = 1;
            this.store.userInput = '';
            this.store.selectedStatus = '';
            this.$emit('refresh');
        }
    }
}



</script>

<template>
    <div>
        <input @keyup.enter="search" class="mb-5" type="text" v-model="store.userInput">
        <select name="" id="" v-model="store.selectedStatus">
            <option value="" selected disabled hidden>Choose Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>
        <button @click="search">Search</button>
        <button @click="resetValues">Reset</button>
    </div>
</template>

<style scoped lang="scss"></style>
