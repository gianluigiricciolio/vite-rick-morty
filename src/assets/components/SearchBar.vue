<script>

// import components

export default {
    name: 'SearchBar',
    data() {
        return {
        }
    },
}



</script>

<template>
    <div>
        <input class="mb-5" type="text">
        <select name="" id="">
            <option value="" selected disabled hidden>Choose Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>
        <button>Search</button>
        <button>Reset</button>
    </div>
</template>

<style scoped lang="scss"></style>
