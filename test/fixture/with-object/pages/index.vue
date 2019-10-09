<template>
  <div>
    <p v-text="str" />
    {{ $moment('19951225', 'YYYYMMDD').format('YYYY') }}
  </div>
</template>

<script>
export default {
  asyncData (ctx) {
    return {
      str: ctx.app.$moment('19951225', 'YYYYMMDD').format('MMMM')
    }
  }
}
</script>
