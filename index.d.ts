import { Moment, MomentFormatSpecification, MomentInput } from 'moment'
import Vue from 'vue'

declare module '@nuxt/vue-app' {
  interface Context {
    $moment(input?: MomentInput, format?: MomentFormatSpecification, language?: string, strict?: boolean): Moment
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $moment(input?: MomentInput, format?: MomentFormatSpecification, language?: string, strict?: boolean): Moment
  }
}
