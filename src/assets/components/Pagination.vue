<script>
import { store } from '../../store';
export default {
    name: 'Pagination',
    data() {
        return {
            store,
        }
    },

    emits: [
        'search'
    ],

    methods: {
        prev() {
            if (this.store.page != 1) {
                this.store.page--;
                this.$emit('search');
            }

        },

        next() {
            if (this.store.page != this.store.totalPages) {
                this.store.page++;
                this.$emit('search');
            }
        }
    }
}

</script>

<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li @click="prev" class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li @click="next" class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
    </nav>
</template>

