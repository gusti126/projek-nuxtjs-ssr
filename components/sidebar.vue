<template>
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
    <div class="" v-if="this.$store.state.auth.user.user_detail.image">
      <img
        :src="this.$store.state.auth.user.user_detail.image"
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
      <div class="text-lg font-semibold text-gray-700">
        {{ this.$store.state.auth.user.name }}
      </div>
      <div class="mt-1 text-sm text-gray-600">
        {{ this.$store.state.auth.user.user_detail.profesi }}
      </div>
    </div>
    <div class="mt-8">
      <nuxt-link
        to="/dashboard/profile"
        class="
          flex
          rounded-lg
          px-3
          py-2
          mb-4
          hover:bg-green-400 hover:text-white
        "
        :class="
          this.$route.path == '/dashboard/profile'
            ? 'bg-hijau-button text-white'
            : 'text-gray-400 bg-white'
        "
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        Profile
      </nuxt-link>
      <nuxt-link
        to="/dashboard/event-saya"
        class="
          flex
          rounded-lg
          px-3
          py-2
          mb-4
          hover:bg-green-400 hover:text-white
        "
        :class="
          this.$route.path == '/dashboard/event-saya'
            ? 'bg-hijau-button text-white'
            : 'text-gray-400 bg-white'
        "
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
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        Event saya
      </nuxt-link>
      <nuxt-link
        to="/dashboard/donasi-saya"
        class="
          flex
          rounded-lg
          px-3
          py-2
          mb-4
          hover:bg-green-400 hover:text-white
        "
        :class="
          this.$route.path == '/dashboard/donasi-saya'
            ? 'bg-hijau-button text-white'
            : 'text-gray-400 bg-white'
        "
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        Donasi saya
      </nuxt-link>
      <nuxt-link
        to="/dashboard/tulisan"
        class="
          flex
          bg-white
          rounded-lg
          px-3
          py-2
          mb-4
          hover:bg-green-400 hover:text-white
        "
        :class="
          this.$route.path == '/dashboard/tulisan'
            ? 'bg-hijau-button text-white'
            : 'text-gray-400 bg-white'
        "
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
        Tulisan saya</nuxt-link
      >
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
</template>

<script>
export default {
  data() {
    return {}
  },

  methods: {
    async logoutUser() {
      await this.$auth.logout()
    },
  },
}
</script>
