<template>
  <div>
    Works!
    <p v-text="str"/>
  </div>
</template>

<script>
export default {
  asyncData(ctx) {
    return {
      str: ctx.app.$moment('12-25-1995', 'MM-DD-YYYY').format('MMMM')
    }
  }
}
</script>
