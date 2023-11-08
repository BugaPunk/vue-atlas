<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import PageHeader from "./components/PageHeader.vue";
import CountryList from "./components/CountryList.vue";
import Footer from "./components/Footer.vue";
import axiosClient from "./utils/axios";
import { Country } from "./models/country.model";

const countries = ref<Country[]>([]);
const search = ref("");
const filteredCountries = ref<Country[]>([]);
const page = ref(1);
const itemPerPage = ref(12);
const paginatedCountries = ref<Country[]>([]);
const totalItems = ref(0);

const fetchCountries = async () => {
    try {
        const { data } = await axiosClient.get("/all");
        countries.value = data;
        totalItems.value = countries.value.length;
    } catch (error) {
        console.error(error);
    }
};

const filterCountries = () => {
    filteredCountries.value = countries.value.filter((country) =>
        country.translations.spa.official
            .toLowerCase()
            .includes(search.value.toLowerCase())
    );
};
//Paginacion
const sliceCountries = (currentCountries: Country[]) => {
    const start = (page.value - 1) * itemPerPage.value;
    const end = page.value * itemPerPage.value;
    paginatedCountries.value = currentCountries.slice(start, end);
};

const changePage = (newPage: number) => {
    page.value = newPage;
};

onMounted(() => {
    fetchCountries();
});
watch([countries, page, filteredCountries], () => {
    sliceCountries(
        filteredCountries.value.length <= 0 && search.value === ""
            ? countries.value
            : filteredCountries.value
    );
});
</script>

<template>
    <PageHeader />
    <!--InputBuscar-->
    <div class="container pb-10 mx-auto px-20 md:px-80">
        <div class="relative">
            <label for="Search" class="sr-only"> Search for... </label>

            <input
                type="text"
                id="Search"
                placeholder="Busqueda por nombre de país"
                v-model="search"
                @input="filterCountries"
                class="px-5 w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm dark:border-gray-700 dark:bg-neutral-700 dark:text-white sm:text-sm"
            />

            <span
                class="absolute inset-y-0 end-0 grid w-10 place-content-center"
            >
                <button
                    type="button"
                    class="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                    <span class="sr-only">Search</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-4 w-4"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </button>
            </span>
        </div>
    </div>
    <!--InputBuscar-->
    <!-- Paginacion -->
    <div class="flex items-center justify-center gap-3 pb-8">
        <!-- Cambia inline-flex a flex -->
        <button
            :disabled="page <= 1"
            :class="{ 'opacity-50': page <= 1 }"
            @click="($event) => changePage(page - 1)"
        >
            <a
                class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 dark:border-stone-800 dark:bg-stone-900 dark:text-white"
            >
                <span class="sr-only">Next Page</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                    />
                </svg>
            </a>
        </button>

        <p class="text-xs text-gray-900 dark:text-white">
            {{ page }}
            <span class="mx-0.25">/</span>
            21
        </p>

        <button
            :disabled="page >= totalItems / itemPerPage"
            :class="{ 'opacity-50': page >= totalItems / itemPerPage }"
            @click="($event) => changePage(page + 1)"
        >
            <a
                class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 dark:border-stone-800 dark:bg-stone-900 dark:text-white"
            >
                <span class="sr-only">Next Page</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                    />
                </svg>
            </a>
        </button>
    </div>
    <!-- Paginacion -->

    <!--Paises-->
    <div class="container mx-auto px-auto gap-5 ">
        <CountryList :countries="paginatedCountries" />
    </div>
    <!--Paises-->

    <!-- Paginacion -->
    <div class="flex items-center justify-center gap-3 py-16">
        <!-- Cambia inline-flex a flex -->
        <button
            :disabled="page <= 1"
            :class="{ 'opacity-50': page <= 1 }"
            @click="($event) => changePage(page - 1)"
        >
            <a
                class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 dark:border-stone-800 dark:bg-stone-900 dark:text-white"
            >
                <span class="sr-only">Next Page</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                    />
                </svg>
            </a>
        </button>

        <p class="text-xs text-gray-900 dark:text-white">
            {{ page }}
            <span class="mx-0.25">/</span>
            21
        </p>

        <button
            :disabled="page >= totalItems / itemPerPage"
            :class="{ 'opacity-50': page >= totalItems / itemPerPage }"
            @click="($event) => changePage(page + 1)"
        >
            <a
                class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 dark:border-stone-800 dark:bg-stone-900 dark:text-white"
            >
                <span class="sr-only">Next Page</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                    />
                </svg>
            </a>
        </button>
    </div>
    <!-- Paginacion -->

    <div class="mt-6 pt-12 gap-2">
        <Footer />
    </div>
</template>
