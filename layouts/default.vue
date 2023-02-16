<template>
  <div
    class="font-poppins min-h-screen"
    :class="this.$route.path == '/mobile/menu' ? 'bg-white' : 'bg-green-50'"
  >
    <!-- loading state -->
    <div
      class="
        fixed
        top-0
        left-0
        z-50
        w-screen
        h-screen
        flex
        items-center
        justify-center
      "
      style="background: rgba(0, 0, 0, 0.5)"
      v-show="this.$store.state.loading"
    >
      <div
        class="
          pb-2
          pt-3
          px-5
          rounded-lg
          flex
          items-center
          justify-center
          text-center
          flex-col
        "
      >
        <img src="~/assets/load.svg" alt="logo" class="w-40" />
        <div class="text-white text-base text-center font-semibold">
          loading sebentar....
        </div>
      </div>
    </div>
    <!-- endloading state -->
    <Nuxt />
  </div>
</template>

<style scoped>
.loader-dots div {
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.loader-dots div:nth-child(1) {
  left: 8px;
  animation: loader-dots1 0.6s infinite;
}
.loader-dots div:nth-child(2) {
  left: 8px;
  animation: loader-dots2 0.6s infinite;
}
.loader-dots div:nth-child(3) {
  left: 32px;
  animation: loader-dots2 0.6s infinite;
}
.loader-dots div:nth-child(4) {
  left: 56px;
  animation: loader-dots3 0.6s infinite;
}
@keyframes loader-dots1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes loader-dots3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes loader-dots2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
