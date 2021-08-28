<template>
  <div>
    <div class="conatiner px-2 md:px-10 py-6">
      <div>
        <div class="bg-white rounded-xl p-4 md:w-3/6 md:mx-auto">
          <div>
            <img src="~/assets/image/logo-komfaktek.png" alt="" class="w-48" />
          </div>
          <div class="text-4xl font-bold text-hijau-button mt-4">Login</div>

          <!-- error validasi -->
          <div class="text-red-600 mt-4" v-if="errors">
            <div class="font-medium">Perhatikan!</div>
            <div
              v-for="(error, index) in errors"
              :key="index"
              class="text-xs md:text-sm"
            >
              {{ error[0] }}
            </div>
          </div>
          <!-- enderror validasi -->

          <div class="md:w-96 mx-auto mt-6">
            <div>
              <label for="email" class="text-xl">Email</label>
            </div>
            <div class="w-full mt-2">
              <input
                type="text"
                v-model="login.email"
                class="
                  rounded-full
                  p-2
                  w-full
                  focus:ring-2 focus:ring-hijau-button focus:text-hijau-button
                  border border-gray-500
                  focus:border-transparent focus:outline-none
                "
                placeholder="Email Address"
              />
            </div>
            <div class="mt-4">
              <label for="password" class="text-xl">Password</label>
            </div>
            <div class="w-full mt-2 flex relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="login.password"
                class="
                  rounded-full
                  p-2
                  w-full
                  focus:ring-2 focus:ring-hijau-button focus:text-hijau-button
                  border border-gray-500
                  focus:border-transparent focus:outline-none
                "
                @keyup.enter="userLogin"
                placeholder="Input Password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 my-auto absolute right-4 top-2"
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
                class="h-6 w-6 my-auto absolute right-4 top-2"
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
            <div class="w-full mt-4 text-right">
              <a href="" class="text-hijau-button">Lupa Password ?</a>
            </div>
            <div class="w-full mt-4">
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
                @click="userLogin"
              >
                Login
              </div>
            </div>
            <div class="w-full mt-4">
              <nuxt-link
                to="register"
                class="
                  border border-hijau-button
                  py-2
                  block
                  text-center text-hijau-button
                  rounded-full
                  hover:bg-hijau-header
                "
                >Register</nuxt-link
              >
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
      title:
        'Bergabung | event | HMI Komfaktek Melangkah Maju dari function asycn',
      meta: [
        {
          name: 'description',
          content: 'bergabung bersama HMI Komfaktek ',
        },
        {
          name: 'title',
          content:
            'Bergabung | event | HMI Komfaktek Melangkah Maju dari function asycn',
        },
        {
          itemprop: 'title',
          name: 'title',
          content:
            'Bergabung | event | HMI Komfaktek Melangkah Maju dari function asycn',
        },
        {
          itemprop: 'image',
          name: 'image',
          content:
            'https://hmi-komfaktek.vercel.app/_nuxt/img/logo-komfaktek.822fb18.png',
        },
        {
          name: 'og:title',
          property: 'og:title',
          content:
            'Bergabung | event | HMI Komfaktek Melangkah Maju dari function asycn',
        },
        {
          property: 'og:image',
          content:
            'https://hmi-komfaktek.vercel.app/_nuxt/img/logo-komfaktek.822fb18.png',
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
          content:
            ' | event | HMI Komfaktek Melangkah Maju dari function asycn',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Bergabung | event | HMI Komfaktek Melangkah Maju dari function asycn',
        },
        {
          name: 'og:description',
          itemprop: 'og:description',
          content:
            'Bergabung | event | HMI Komfaktek Melangkah Maju dari function asycn',
        },
      ],
    }
  },
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
      errors: null,
      showPassword: false,
    }
  },
  methods: {
    async userLogin() {
      let response = await this.$auth
        .loginWith('local', { data: this.login })
        .then((ress) => {
          console.log(ress)
        })
        .catch((e) => {
          this.errors = e.response.data.message
          console.log(e.response.data.message)
          if (e.response.data.message == 'unathorized') {
            let salah = [['email atau password tidak benar']]
            this.errors = salah
            console.log(salah)
            console.log(this.errors)
          }
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
