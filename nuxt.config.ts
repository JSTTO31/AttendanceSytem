// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@invictus.codes/nuxt-vuetify'
    ],
    imports: {
        dirs: ['./stores'],
    },
    pinia: {
        autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs'],
    },
    runtimeConfig: {
        public: {
            baseUrl: 'http://127.0.0.1:8000/api/'
        }
    },

    vuetify: {
        /* vuetify options */
        vuetifyOptions: {
          // @TODO: list all vuetify options
          
        },
        moduleOptions: {
          /* nuxt-vuetify module options */
          treeshaking: true ,
          useIconCDN: true ,
          /* vite-plugin-vuetify options */
          styles: true,
          autoImport: true ,
        },

        
      }
    
})
