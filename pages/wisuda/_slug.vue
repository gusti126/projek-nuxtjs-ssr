<template>
  <div class="">
    <navmobile />
    <img
      :src="'https://komfaktek.nusacitateknologi.my.id/' + data.thumbnail"
      alt="Kader HMI komfaktek"
      class=""
    />
    <div
      class="
        p-4
        my-4
        pb-32
        bg-white
        rounded-t-xl
        -mt-14
        z-10
        relative
        min-h-screen
      "
    >
      <div class="text-xl mb-6">
        Selamat atas wisudanya kader Himpunan Mahasiswa Islam Komisariat
        Fakultas Teknik Cabang Ciputat, "<span class="font-bold">{{
          data.nama
        }}</span
        >". Semoga ilmunya dapat bermanfaat, dan semoga semakin mudah menemukan
        simpul-simpul keberhasilan kedepannya.
      </div>
      <div class="my-4" v-for="item in ucapan" :key="ucapan.id">
        <div class="flex align-top items-start">
          <img
            :src="item.user.image_profile"
            alt=""
            class="rounded-full w-14 h-14 object-cover"
          />
          <div class="ml-3">
            <div class="font-semibold">{{ item.user.name }}</div>
            <p class="mt-1 text-sm text-gray-600">
              {{ item.body }}
            </p>
          </div>
        </div>
        <div class="mt-4">
          <hr />
        </div>
      </div>

      <div class="mt-4">
        <textarea
          rows="4"
          class="
            p-2
            w-full
            focus:ring-2 focus:ring-hijau-button focus:text-hijau-button
            border border-gray-500
            focus:border-transparent focus:outline-none
            rounded-lg
          "
          v-model="body"
          placeholder="Ucapan . . . "
        ></textarea>
        <div
          class="
            mt-2
            bg-hijau-button
            py-2
            block
            text-center text-white
            rounded-lg
            hover:bg-hijau-header
            cursor-pointer
          "
          @click="handleSubmit"
        >
          Kirim
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.data.nama + ' Wisuda | Kader HMI KOMFAKTEK',
      meta: [
        {
          name: 'description',
          content:
            'Happy Graduation untuk kader HMI Komfaktek ' + this.data.nama,
        },
        {
          name: 'title',
          content: this.data.nama + ' Wisuda | Kader HMI KOMFAKTEK',
        },
        {
          itemprop: 'title',
          name: 'title',
          content:
            this.data.nama + ' ' + this.data.title + ' | Kader HMI KOMFAKTEK',
        },
        {
          name: 'og:title',
          property: 'og:title',
          content: this.data.nama + ', ' + this.data.title,
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
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://hmikomfaktek.com/wisuda/' + this.$route.params.slug,
        },
        {
          name: 'og:image',
          property: 'og:image',
          content:
            'https://komfaktek.nusacitateknologi.my.id/' + this.data.image,
        },
        {
          name: 'image',
          property: 'image',
          content:
            'https://komfaktek.nusacitateknologi.my.id/' + this.data.image,
        },
        {
          name: 'instagram:title',
          property: 'instagram:title',
          content: 'instagram title' + this.data.nama,
        },
        {
          name: 'instagram:card',
          property: 'instagram:card',
          content: 'article',
        },
        {
          name: 'image',
          itemprop: 'image',
          content:
            'https://komfaktek.nusacitateknologi.my.id/' + this.data.image,
        },
        {
          name: 'description',
          itemprop: 'description',
          content:
            'Happy Graduation untuk kader HMI Komfaktek ' + this.data.nama,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Happy Graduation untuk kader HMI Komfaktek ' + this.data.nama,
        },
        {
          name: 'og:description',
          itemprop: 'og:description',
          content:
            'Happy Graduation untuk kader HMI Komfaktek ' + this.data.nama,
        },
      ],
    }
  },
  data() {
    return {
      body: null,
    }
  },
  mounted() {
    console.log('this.$auth.loggedIn', this.$auth.loggedIn)
  },
  methods: {
    async handleSubmit() {
      if (!this.body) {
        this.$swal({
          icon: 'error',
          title: 'Gagal!',
          text: 'Form ucapan harus diisi terlebih dahulu',
          timer: 8000,
        })
      } else if (!this.$auth.loggedIn) {
      } else {
        this.$store.commit('setLoading', true)
        await this.$axios
          .post('ucapanWisuda', {
            body: this.body,
            wisuda_id: this.data.id,
          })
          .then((res) => {
            console.log('res', res.data.data)
            this.ucapan = res.data.data
            this.$store.commit('setLoading', false)
          })
          .catch((err) => {
            this.$store.commit('setLoading', false)
          })
      }
    },
  },
  async asyncData({ $axios, params }) {
    const response = await $axios.$get('wisuda?slug=' + params.slug)

    let data = response.data
    let ucapan = response.ucapan
    return { data, ucapan }
  },
}
</script>
