<template>
	<main>
		<DisplayHeader title="PROMOTION" desc="프로모션"/>
		<ProductList />
	</main>
</template>

<script setup>
	import DisplayHeader from '@/components/display/DisplayHeader.vue';
	import ProductList from '@/components/display/ProductList.vue';
	import {useRoute} from 'vue-router';
	import {useStoreProduct} from '@/store/useStoreProduct.js';
	
	const route = useRoute();
	const useProduct = useStoreProduct();
</script>
