<script setup>
import { onMounted, ref } from "vue";
import PageHeader from "./components/PageHeader.vue";
import axiosClient from "./utils/axios";

const countries = ref([]);

const fetchCountries = async () => {
    try {
        const { data } = await axiosClient.get("/all");
        countries.value = data;
    } catch (error) {
        console.error(error);
    }
};

onMounted(() => {
    fetchCountries();
});
</script>

<template>
    <PageHeader />
    <div v-for="country in countries">
        {{ country.name.common }}
    </div>
</template>
