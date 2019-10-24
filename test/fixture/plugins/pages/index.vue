<template>
  <div>
    <p v-text="str" />
    {{ $moment('19951225', 'YYYYMMDD').fquarter() }}
  </div>
</template>

<script>
export default {
  asyncData (ctx) {
    return {
      str: ctx.app.$moment('19951225', 'YYYYMMDD').strftime('%m/%d/%Y')
    }
  }
}
</script>
