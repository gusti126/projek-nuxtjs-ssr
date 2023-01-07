<template>
  <div>
    <div
      class="
        container
        justify-between
        fixed
        bottom-0
        bg-white
        flex
        mx-auto
        lg:px-10
        rounded-t-2xl
        border-t
        py-3
        px-6
        shadow
        text-center
        md:hidden
        z-40
      "
    >
      <nuxt-link to="/" class="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 hover:text-red-600 mx-auto"
          :class="this.$route.path === '/' ? 'text-green-700' : 'text-gray-500'"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <div
          class="font-semibold text-sm"
          :class="this.$route.path === '/' ? 'text-green-700' : 'text-gray-500'"
        >
          Home
        </div>
      </nuxt-link>
      <nuxt-link to="/daftar-hmi" class="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 mx-auto"
          :class="
            this.$route.path === '/daftar-hmi'
              ? 'text-green-700'
              : 'text-gray-500'
          "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <div
          class="font-semibold text-sm"
          :class="
            this.$route.path === '/galang-dana'
              ? 'text-green-700'
              : 'text-gray-500'
          "
        >
          LK 1
        </div>
      </nuxt-link>
      <nuxt-link to="/tulisan" class="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 text-gray-500 mx-auto"
          :class="
            this.$route.path === '/tulisan' ? 'text-green-700' : 'text-gray-500'
          "
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
        <div
          class="font-semibold text-sm"
          :class="
            this.$route.path === '/tulisan' ? 'text-green-700' : 'text-gray-500'
          "
        >
          Tulisan
        </div>
      </nuxt-link>
      <nuxt-link to="/mobile/menu" class="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 mx-auto"
          :class="
            this.$route.path === '/mobile/menu'
              ? 'text-green-700'
              : 'text-gray-500'
          "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div
          class="font-semibold text-sm"
          :class="
            this.$route.path === '/mobile/menu'
              ? 'text-green-700'
              : 'text-gray-500'
          "
        >
          Menu
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
