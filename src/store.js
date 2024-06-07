import { reactive } from "vue"

export const store = reactive({
    apiUrl: '', //indirizzo api 
    apiKey: '', //chiave per accedere all api
    results: '',
    searchKey: '',
});