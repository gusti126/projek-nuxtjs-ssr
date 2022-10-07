<template>
  <div class="">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aspernatur
    recusandae beatae voluptates quo ut, ad ipsum quisquam porro, aperiam aut
    corrupti. Ea qui perspiciatis laborum ipsam illum corrupti recusandae?
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'dashboard',

  head() {
    return {
      title: 'Dashboard Tulisan',
    }
  },
}
</script>
