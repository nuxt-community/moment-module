<template>
  <div>
    {{ $moment('2014-06-01T12:00:00Z').tz('America/Los_Angeles').format('ha z') }}
  </div>
</template>
