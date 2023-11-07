<script setup lang="ts">
import { defineProps } from "vue";
import { Country } from "../models/country.model";
interface Props {
    country: Country;
}
defineProps<Props>();
</script>
<template>
    <h3 class="text-xl font-bold sm:text-2xl">
        {{ country.name.common }}
    </h3>
    <div class="text-sm py-1">
        <p class="my-1 font-medium">
            Población: {{ country.population?.toLocaleString() }}
        </p>
        <p class="my-1 font-medium">Region: {{ country.region }}</p>
        <p v-for="capital in country.capital" class="my-1 font-medium">
            Capital: {{ capital }}
            <template> </template>
        </p>
    </div>
</template>
