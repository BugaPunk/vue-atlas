<script setup lang="ts">
import { defineProps } from "vue";
import { Country } from "../models/country.model";
import CountryItem from "./CountryItem.vue";
interface Props {
    countries: Country[];
}
defineProps<Props>();
</script>

<template>
    <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 text-black"
    >
        <a
            href=""
            v-for="country in countries"
            class="group relative block h-max sm:h-full md:h-max lg:h-max"
        >
            <span
                class="absolute inset-0 border-2 border-dashed border-zinc-200"
            ></span>

            <div
                class="relative flex flex-col h-full transform items-start border-2 border-zinc-600 bg-zinc-300 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
            >
                <div
                    class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                >
                    <div class="py-6 sm:py-5 md:py-8">
                        <img
                            :alt="country.flags.alt"
                            :src="country.flags.png"
                            class="h-28 sm:h-44 w-full"
                        />
                    </div>

                    <div class="py-auto my-auto">
                        <h2 class="mt-2 mb-5 text-xl font-medium sm:text-xl">
                            {{ country.translations.spa.common }}
                        </h2>
                    </div>
                </div>

                <div
                    class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                >
                    <CountryItem :country="country" />
                </div>
            </div>
        </a>
    </div>
</template>
