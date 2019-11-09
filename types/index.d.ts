import { Moment, MomentFormatSpecification, MomentInput } from 'moment'
import Vue from 'vue'

declare module '@nuxt/vue-app' {
  interface Context {
    $moment(input?: MomentInput, format?: MomentFormatSpecification, language?: string, strict?: boolean): Moment
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface Context {
    $moment(input?: MomentInput, format?: MomentFormatSpecification, language?: string, strict?: boolean): Moment
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $moment(input?: MomentInput, format?: MomentFormatSpecification, language?: string, strict?: boolean): Moment
  }
}

declare module 'vuex' {
  interface Store<S> {
    $moment(input?: MomentInput, format?: MomentFormatSpecification, language?: string, strict?: boolean): Moment
  }
}
  
