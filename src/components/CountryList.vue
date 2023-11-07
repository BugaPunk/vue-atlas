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
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-black">
        <a
            href=""
            v-for="country in countries"
            class="group relative block h-64 sm:h-80 lg:h-96"
        >
            <span
                class="absolute inset-0 border-2 border-dashed border-zinc-200"
            ></span>

            <div
                class="relative flex h-full transform items-end border-2 border-zinc-600 bg-zinc-300 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
            >
                <div
                    class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                >
                    <div class="pb-2 sm:py-5 md:py-6">
                        <img
                            :alt="country.flags.alt"
                            :src="country.flags.png"
                            class="h-32 sm:h-44 w-full object-cover"
                        />
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 sm:h-12 sm:w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <h2 class="mt-4 text-xl font-medium sm:text-xl">
                        {{ country.name.common }}
                    </h2>
                </div>

                <div
                    class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                >
                    <CountryItem :country="country" />

                    <p class="mt-4 text-sm sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate, praesentium voluptatem omnis atque culpa
                        repellendus.
                    </p>

                    
                </div>
            </div>
        </a>
    </div>
</template>
