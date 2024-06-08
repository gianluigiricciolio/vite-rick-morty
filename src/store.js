import { reactive } from "vue"

export const store = reactive({
    apiUrl: 'https://rickandmortyapi.com/api/character', //indirizzo api 
    characters: [],
    userInput: '',
    selectedStatus: '',
    page: 1,
    totalPages: 
});

