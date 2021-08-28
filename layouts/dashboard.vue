<template>
  <div class="font-poppins md:bg-green-50 min-h-screen">
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
      style="background: rgba(0, 0, 0, 0.3)"
      v-show="this.$store.state.loading"
    >
      <div
        class="bg-white border py-2 px-5 rounded-lg flex items-center flex-col"
      >
        <div class="loader-dots block relative w-20 h-5 mt-2">
          <div
            class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"
          ></div>
          <div
            class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"
          ></div>
          <div
            class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"
          ></div>
          <div
            class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"
          ></div>
        </div>
        <div class="text-gray-500 text-xs font-light mt-2 text-center">
          loading sebentar....
        </div>
      </div>
    </div>
    <!-- endloading state -->
    <navmobile />
    <div class="">
      <!-- konten -->
      <div class="grid grid-flow-row grid-cols-10">
        <!-- sidebar -->
        <sidebar />
        <!-- endsidebar -->

        <div class="col-span-12 md:col-span-8 z-10">
          <!-- topbar -->
          <div class="mb-4 shadow">
            <section class="hidden md:block">
              <nav
                class="
                  container
                  mx-auto
                  px-4
                  md:flex
                  justify-between
                  py-4
                  bg-white
                  font-normal
                  text-lg
                  subpixel-antialiased
                  hidden
                "
              >
                <div>
                  <nuxt-link to="/">
                    <img
                      src="~/assets/image/logo-komfaktek.png"
                      alt="logo"
                      class="h-8 w-auto"
                    />
                  </nuxt-link>
                </div>
                <div class="flex my-auto">
                  <a
                    href="reward.html"
                    class="
                      ml-8
                      hover:text-green-700
                      my-auto
                      text-gray-700 text-sm
                    "
                    >Reward</a
                  >
                  <a
                    href="tulisan.html"
                    class="
                      ml-8
                      hover:text-green-700
                      my-auto
                      text-gray-700 text-sm
                    "
                    >Tulisan</a
                  >
                  <a
                    href="galang.html"
                    class="
                      ml-8
                      hover:text-green-700
                      my-auto
                      text-gray-700 text-sm
                    "
                    >Galang Dana</a
                  >
                  <a
                    href="gabung.html"
                    class="
                      ml-8
                      hover:text-green-700
                      my-auto
                      text-gray-700 text-sm
                    "
                    >Gabung HMI</a
                  >
                </div>
              </nav>
            </section>
          </div>
          <!-- endtopbar -->

          <!-- konten -->
          <div class="md:px-4 rounded">
            <div class="bg-white w-full p-4 md:pb-0 pb-28"><Nuxt /></div>
          </div>
          <!-- endkonten -->
        </div>
      </div>
    </div>
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
