<script>

// import components

export default {
    name: 'SearchBar',
    data() {
        return {
            userInput: '',
            selectedStatus: '',
        }
    },

    methods: {
        search() {
            this.$emit('search', { text: this.userInput, status: this.selectedStatus })
        },

        resetValues() {
            this.$emit('reset');
            this.userInput = '';
            this.selectedStatus = ''
        }
    }
}



</script>

<template>
    <div>
        <input class="mb-5" type="text" v-model="userInput">
        <select name="" id="" v-model="selectedStatus">
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
