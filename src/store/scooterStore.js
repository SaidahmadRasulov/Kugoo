import { defineStore } from "pinia";

export const useScooterStore = defineStore('scooter', {
    state: () => ({
        scooters: [],
        
    }),
})