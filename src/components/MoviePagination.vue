<template>
    <div>
        <nav v-if="pageCount > 1" aria-label="Page navigation example" >
            <ul class="pagination">
                <li class="page-item"
                 v-for="page in pageCount"
                 :key="page"
                :class="{ 'active': pageNumber === page }">
                    <a @click="changePage(page)"  class="page-link">{{ page }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        pageNumber: {
            type: Number,
            required: true,
            default: 0
        },
        pageCount: {
            type: Number,
            required: true,
            default: 0
        }
    },

    methods: {
        changePage(page){
            this.$emit('changePage', page)
        }
    }
}
</script>
