<template>
  <div>
    <div class="conatiner md:px-10 px-2 md:py-10 py-6">
      <div>
        <div class="bg-white rounded-xl p-3 md:p-4 md:w-3/6 md:mx-auto">
          <div>
            <img src="~/assets/image/logo-komfaktek.png" alt="" class="w-16" />
          </div>
          <div class="text-4xl font-bold text-hijau-button mt-4">Register</div>

          <!-- error validasi -->
          <div class="text-red-600 mt-4" v-if="errors">
            <div class="font-medium">Perhatikan!</div>
            <div v-for="(error, index) in errors" :key="index" class="text-sm">
              {{ error[0] }}
            </div>
          </div>
          <!-- enderror validasi -->

          <div class="mx-auto mt-6">
            <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-2">
              <div class="mt-2">
                <div class="mb-2">
                  <label for="email" class="">Nama</label>
                </div>
                <input
                  type="text"
                  class="
                    rounded-full
                    py-1
                    px-2
                    w-full
                    focus:ring-2 focus:ring-hijau-button focus:text-hijau-button
                    border border-gray-500
                    focus:border-transparent focus:outline-none
                  "
                  v-model="user.name"
                  placeholder="Input Nama"
                />
              </div>
              <div class="mt-2">
                <div class="mb-2">
                  <label for="email" class="">Email</label>
                </div>
                <input
                  type="email"
                  class="
                    rounded-full
                    py-1
                    px-2
                    w-full
                    focus:ring-2 focus:ring-hijau-button focus:text-hijau-button
                    border border-gray-500
                    focus:border-transparent focus:outline-none
                  "
                  placeholder="Input Email"
                  v-model="user.email"
                />
              </div>
            </div>
            <div
              class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-2 mt-4"
            >
              <div class="mt-2 relative">
                <div class="mb-2">
                  <label for="email" class="">Password</label>
                </div>
                <input
                  :type="showPassword ? 'text' : 'password'"
                  class="
                    rounded-full
                    py-1
                    px-2
                    w-full
                    focus:ring-2 focus:ring-hijau-button focus:text-hijau-button
                    border border-gray-500
                    focus:border-transparent focus:outline-none
                  "
                  placeholder="Input Password"
                  v-model="user.password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 my-auto absolute right-4 top-9 cursor-pointer"
                  @click="lihatPassword"
                  v-show="!showPassword"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 my-auto absolute right-4 top-9 cursor-pointer"
                  @click="lihatPassword"
                  v-show="showPassword"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <div class="mt-2 relative">
                <div class="mb-2">
                  <label for="password" class="">Confirm Password</label>
                </div>
                <input
                  :type="showPassword ? 'text' : 'password'"
                  class="
                    rounded-full
                    py-1
                    px-2
                    w-full
                    focus:ring-2 focus:ring-hijau-button focus:text-hijau-button
                    border border-gray-500
                    focus:border-transparent focus:outline-none
                  "
                  placeholder="Input Password"
                  v-model="user.c_password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 my-auto absolute right-4 top-9 cursor-pointer"
                  @click="lihatPassword"
                  v-show="!showPassword"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 my-auto absolute right-4 top-9 cursor-pointer"
                  @click="lihatPassword"
                  v-show="showPassword"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <div v-if="user.c_password.length > 0">
                  <div
                    class="text-sm text-red-500"
                    v-if="user.c_password !== user.password"
                  >
                    password tidak sama
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full mt-8">
              <div
                class="
                  bg-hijau-button
                  py-2
                  block
                  text-center text-white
                  rounded-full
                  hover:bg-hijau-header
                  cursor-pointer
                "
                @click="userRegister"
              >
                Register
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Bergabung | event | HMI Komfaktek Melangkah Maju ',
      meta: [
        {
          name: 'description',
          content: 'bergabung bersama HMI Komfaktek ',
        },
        {
          name: 'title',
          content: 'Bergabung | event | HMI Komfaktek Melangkah Maju ',
        },
        {
          itemprop: 'title',
          name: 'title',
          content: 'Bergabung | event | HMI Komfaktek Melangkah Maju ',
        },
        {
          itemprop: 'image',
          name: 'image',
          content: 'https://gustirizkia.my.id/logo-komfaktek14.jpg',
        },
        {
          name: 'og:title',
          property: 'og:title',
          content: 'Bergabung | event | HMI Komfaktek Melangkah Maju ',
        },
        {
          property: 'og:image',
          content: 'https://gustirizkia.my.id/logo-komfaktek14.jpg',
        },
        {
          name: 'og:site_name',
          property: 'og:site_name',
          content: ' HMI Komfaktek Melangkah Maju',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'article',
        },

        {
          name: 'instagram:card',
          property: 'instagram:card',
          content: 'article',
        },
        {
          name: 'description',
          itemprop: 'description',
          content: ' | event | HMI Komfaktek Melangkah Maju ',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Bergabung | event | HMI Komfaktek Melangkah Maju Terkoneksi Dengan Seluruh Cabang HMI Se Indonesia',
        },
        {
          name: 'og:description',
          itemprop: 'og:description',
          content: 'Bergabung | event | HMI Komfaktek Melangkah Maju ',
        },
      ],
    }
  },
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        c_password: '',
      },
      errors: null,
      showPassword: false,
    }
  },
  mounted() {},
  methods: {
    async userLogin() {
      this.$store.commit('setLoading', true)
      let data = await this.$auth
        .loginWith('local', {
          data: {
            email: this.user.email,
            password: this.user.password,
          },
        })
        .then((ress) => {
          this.$store.commit('setLoading', false)
        })
    },
    async userRegister() {
      let regis = await this.$axios
        .post('register', {
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
        })
        .then((ress) => {
          console.log(ress)
          this.userLogin()
        })
        .catch((e) => {
          this.errors = e.response.data.message
          console.log(e.response.data.message)
        })
    },
    lihatPassword() {
      if (this.showPassword) {
        this.showPassword = false
      } else {
        this.showPassword = true
      }
    },
  },
}
</script>
