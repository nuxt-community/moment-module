import moment from 'moment'
import Vue from 'vue'

declare module '@nuxt/vue-app' {
  interface Context {
    $moment: typeof moment
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface Context {
    $moment: typeof moment
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $moment: typeof moment
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $moment: typeof moment
  }
}
  
