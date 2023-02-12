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
        <div
          class="
            col-span-2
            bg-white
            shadow
            min-h-screen
            h-52
            w-full
            px-4
            py-6
            hidden
            md:block
            sticky
            top-0
          "
        >
          <div class="" v-if="this.$store.state.auth.user.image_profile">
            <img
              :src="this.$store.state.auth.user.image_profile"
              alt="profile image"
              class="
                w-32
                h-32
                object-cover
                rounded-full
                mx-auto
                border-hijau-button border-2
                p-2
              "
            />
          </div>
          <div class="" v-else>
            <img
              src="~assets/image/profile-default.png"
              alt=""
              class="
                w-32
                h-32
                object-cover
                rounded-full
                mx-auto
                border-hijau-button border-2
                p-2
              "
            />
          </div>
          <div class="text-center mt-4">
            <div class="font-semibold text-gray-700">
              Admin <br />
              {{ this.$store.state.auth.user.name }}
            </div>
          </div>
          <div class="mt-8 text-center">
            <nuxt-link
              to="/admin/peserta"
              class="
                flex
                text-center
                rounded-lg
                px-3
                py-2
                mb-4
                hover:bg-green-400 hover:text-white
              "
              :class="
                this.$route.path == '/admin/peserta'
                  ? 'bg-hijau-button text-white'
                  : 'text-gray-400 bg-white'
              "
            >
              Data Peserta LK 1
            </nuxt-link>

            <div
              class="
                flex
                bg-white
                rounded-lg
                px-3
                py-2
                mb-4
                text-gray-400
                hover:bg-green-400 hover:text-white
                cursor-pointer
              "
              @click="logoutUser"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </div>
          </div>
        </div>
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
                    href="tulisan.html"
                    class="
                      ml-8
                      hover:text-green-700
                      my-auto
                      text-gray-700 text-sm
                    "
                    >Tulisan</a
                  >
                  <nuxt-link
                    to="/galang-dana"
                    class="
                      ml-8
                      hover:text-green-700
                      my-auto
                      text-gray-700 text-sm
                    "
                    >Galang Dana</nuxt-link
                  >
                  <nuxt-link
                    to="/daftar-hmi"
                    class="
                      ml-8
                      hover:text-green-700
                      my-auto
                      text-gray-700 text-sm
                    "
                    >Gabung HMI</nuxt-link
                  >
                </div>
              </nav>
            </section>
          </div>
          <!-- endtopbar -->

          <!-- konten -->
          <div class="md:px-4 rounded">
            <div class="bg-white w-full p-4 md:pb-4 pb-28"><Nuxt /></div>
          </div>
          <!-- endkonten -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async logoutUser() {
      await this.$auth.logout()
    },
  },
}
</script>

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
