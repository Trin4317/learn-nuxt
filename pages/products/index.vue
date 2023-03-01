<template>
    <div class="grid grid-cols-4 gap-5">
        <div v-for="p in products">
            <ProductCard :product="p" />
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "products",
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')

// overwrite head with useHead
useHead({
    title: 'Nuxt Store | Products',
            meta: [
                { name: 'description', content: 'Nuxt Products.'}
            ]
})
</script>
