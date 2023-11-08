<script setup lang="ts">
import { defineProps, ref } from "vue";
import { Country } from "../models/country.model";
import CountryItem from "./CountryItem.vue";

interface Props {
    countries: Country[];
    showPopup: boolean;
}
const selectedCountry = ref(null);

const showModal = (country) => {
    selectedCountry.value = country;
    showPopup.value = true;
};

const closePopup = () => {
    showPopup.value = false;
};

defineProps<Props>();
</script>
<template>
    <div
        v-if="showPopup"
        class="fixed inset-0 flex items-center justify-center bg-slate-950 bg-opacity-95 z-50"
    >
        <section
            class="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3"
        >
            <!-- Contenido del popup aquí -->
            <img
                alt="Trainer"
                src="https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                class="h-32 w-full object-cover md:h-full"
            />
            <div class="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
                <p class="text-sm font-semibold uppercase tracking-widest">
                    Run with the pack
                </p>
                <h2 class="mt-6 font-black uppercase">
                    <span class="text-4xl font-black sm:text-5xl lg:text-6xl">
                        Get 20% off
                    </span>
                    <span class="mt-2 block text-sm"
                        >On your next order over $50</span
                    >
                </h2>
                <a
                    class="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
                    href=""
                >
                    Get Discount
                </a>
                <p class="mt-8 text-xs font-medium uppercase text-gray-400">
                    Offer valid until 24th March, 2021 *
                </p>
                <button
                    @click="closePopup"
                    class="absolute top-4 right-4 text-2xl text-white"
                >
                    &times;
                </button>
            </div>
        </section>
    </div>
</template>
