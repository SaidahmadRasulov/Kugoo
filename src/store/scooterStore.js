import { defineStore } from "pinia";

import { SCOOTER_CATALOG, SCOOTER_META } from "../assets/Scooter_Date";

export const useScooterStore = defineStore("scooter", {
  state: () => ({
    allProducts: SCOOTER_CATALOG,
    query: {
      category: null,
      filters: {},
      search: "",
      place: null,
    },
    results: SCOOTER_CATALOG,
    isLoading: false,
    lastUpdated: null,
  }),

  getters: {
    categories() {
      return SCOOTER_META.categories;
    },
    filteredByCategory: (state) => {
      if (!state.query.category) {
        return state.allProducts;
      }
      return state.allProducts.filter(
        (product) => product.categoryKey === state.query.category
      );
    },
    topSellers: (state) =>
      state.allProducts.filter(
        (product) =>
          product.topSeller &&
          (product.categoryKey === "elo_scoot" ||
            product.categoryKey === "scoot" ||
            product.categoryKey === "elo_bike")
      ),
    filteredByType: (state) => (filter) => {
      const personalMobilityProducts = state.allProducts.filter(
        (product) =>
          product.categoryKey === "elo_scoot" ||
          product.categoryKey === "scoot" ||
          product.categoryKey === "elo_bike"
      );

      if (!filter) {
        return personalMobilityProducts;
      }

      return personalMobilityProducts.filter(
        (product) => Array.isArray(product.audience) && product.audience.includes(filter)
      );
    },
  },

  actions: {
    setQuery({ category, filters = {}, search = "", place = null } = {}) {
      this.query = {
        category: category ?? this.query.category,
        filters: Object.keys(filters).length ? filters : this.query.filters,
        search: search ?? this.query.search,
        place: place ?? this.query.place,
      };
      this.findProducts();
    },
    findProducts() {
      this.isLoading = true;

      const normalizedSearch = this.query.search.trim().toLowerCase();
      const activeFilters = this.query.filters || {};
      const categoryFilter = this.query.category;

      const result = this.allProducts.filter((product) => {
        if (categoryFilter && product.categoryKey !== categoryFilter) {
          return false;
        }

        if (normalizedSearch.length > 0) {
          const haystack = `${product.title} ${product.description}`.toLowerCase();
          if (!haystack.includes(normalizedSearch)) {
            return false;
          }
        }

        return Object.entries(activeFilters).every(([group, values]) => {
          if (!Array.isArray(values) || values.length === 0) {
            return true;
          }

          const productValues = product[group];
          if (!productValues) {
            return false;
          }

          const productArray = Array.isArray(productValues)
            ? productValues
            : [productValues];

          return values.some((value) => productArray.includes(value));
        });
      });

      this.results = result;
      this.isLoading = false;
      this.lastUpdated = new Date().toISOString();
    },
    resetQuery() {
      this.query = {
        category: null,
        filters: {},
        search: "",
        place: null,
      };
      this.results = this.allProducts;
    },
  },
});