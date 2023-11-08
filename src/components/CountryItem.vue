<script setup lang="ts">
import { defineProps } from "vue";
import { Country } from "../models/country.model";
interface Props {
    country: Country;
}
defineProps<Props>();
</script>
<template>
    <div>
        <h3 class="text-xl font-bold sm:text-2xl">
            {{ country.translations.spa.official }}
        </h3>
        <span class="flex items-center space-x-2">
            {{ country.flag }}&nbsp;
            <img
                v-if="country.coatOfArms.png"
                :src="country.coatOfArms.png"
                alt=""
                style="width: 16px; height: 16px; display: inline"
            />
        </span>
        <div class="text-sm py-1">
            <p class="my-1 font-medium">Continente: {{ country.region }}</p>
            <p v-if="country.subregion" class="my-1 font-medium">
                Subregion: {{ country.subregion }}
            </p>
            <p class="my-1 font-medium">
                Población: {{ country.population?.toLocaleString() }} habitantes
            </p>
            <p class="my-1 font-medium">
                Extension Territorial: {{ country.area?.toLocaleString() }} km²
            </p>

            <p v-for="capital in country.capital" class="my-1 font-medium">
                Capital: {{ capital }}
                <template> </template>
            </p>
            <span
                v-if="country.cca2"
                class="mx-1 inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
            >
                <p class="whitespace-nowrap text-sm">{{ country.cca2 }}</p>
            </span>
            <span
                v-if="country.ccn3"
                class="mx-1 inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
            >
                <p class="whitespace-nowrap text-sm">{{ country.ccn3 }}</p>
            </span>
            <span
                v-if="country.cca3"
                class="mx-1 inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
            >
                <p class="whitespace-nowrap text-sm">{{ country.cca3 }}</p>
            </span>

            <span
                v-if="country.cioc"
                class="mx-1 inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
            >
                <p class="whitespace-nowrap text-sm">{{ country.cioc }}</p>
            </span>
        </div>

        <div class="my-2">
            <a
                class="inline-flex items-center rounded border border-green-600 bg-green-400 px-2 py-3 text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-indigo-500"
                :href="country.maps.googleMaps"
            >
                <span class="text-sm font-medium">Google Maps&nbsp;</span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
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
            </a>
        </div>
    </div>
</template>
