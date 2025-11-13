import { defineStore } from "pinia";

const SCOOTER_CATALOG = Object.freeze([
  {
    id: "kugoo-g1",
    title: "Kugoo G1",
    category: "elo_scoot",
    features: ["offroad", "with-seat"],
    audience: ["adults"],
    price: 89900,
    stock: 12,
    description: "Мощный электросамокат для загородных поездок",
  },
  {
    id: "kugoo-s3",
    title: "Kugoo S3",
    category: "elo_scoot",
    features: ["city", "without-seat"],
    audience: ["adults"],
    price: 34900,
    stock: 25,
    description: "Лёгкий городской самокат с запасом хода до 30 км",
  },
  {
    id: "kugoo-mini-s",
    title: "Kugoo Mini S",
    category: "elo_scoot",
    features: ["city", "without-seat"],
    audience: ["kids"],
    price: 25900,
    stock: 8,
    description: "Компактный самокат для детей и подростков",
  },
  {
    id: "citycoco-rapid",
    title: "Citycoco Rapid",
    category: "scoot",
    features: ["with-seat", "city"],
    audience: ["adults"],
    price: 129900,
    stock: 6,
    description: "Электроскутер с комфортным сиденьем и широкими колёсами",
  },
  {
    id: "x-motion-cargo",
    title: "X-Motion Cargo",
    category: "elo_bike",
    features: ["offroad", "with-seat"],
    audience: ["adults"],
    price: 159900,
    stock: 4,
    description: "Грузовой электровелосипед с большим запасом хода",
  },
  {
    id: "robovac-lite",
    title: "RoboVac Lite",
    category: "robot_vac",
    features: ["city"],
    audience: ["seniors", "adults"],
    price: 19900,
    stock: 40,
    description: "Робот-пылесос с поддержкой мобильного приложения",
  },
  {
    id: "smartscale-pro",
    title: "SmartScale Pro",
    category: "scales",
    features: ["city"],
    audience: ["adults", "seniors"],
    price: 9900,
    stock: 30,
    description: "Умные весы с анализом состава тела и синхронизацией по Bluetooth",
  },
]);

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
      return [...new Set(this.allProducts.map((product) => product.category))];
    },
    filteredByCategory: (state) => {
      if (!state.query.category) {
        return state.allProducts;
      }
      return state.allProducts.filter(
        (product) => product.category === state.query.category
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
        if (categoryFilter && product.category !== categoryFilter) {
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