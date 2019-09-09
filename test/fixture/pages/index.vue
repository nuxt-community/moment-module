<template>
  <div>
    <p v-text="$moment(date)" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: new Date()
    }
  },
  mounted () {
    this._interval = setInterval(() => {
      this.date = new Date()
    })
  },
  beforeDestroy () {
    clearInterval(this._interval)
  }
}
</script>
