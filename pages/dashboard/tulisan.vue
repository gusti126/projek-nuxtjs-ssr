<template>
  <div class="">
    <nuxt-link to="/dashboard/tulisan-tambah">
      <div
        class="bg-green-800 text-white px-3 py-2 rounded-lg inline-block mb-6"
      >
        Tambah Tulisan
      </div>
    </nuxt-link>
    <div class="grid grid-flow-row grid-cols-12 gap-4">
      <div class="col-span-4" v-for="tulisan in tulisans" :key="tulisan.id">
        <img
          :src="tulisan.image"
          alt=""
          class="h-48 w-full object-cover rounded-lg"
        />
        <div class="p-2">
          <div class="font-semibold text-gray-700">{{ tulisan.judul }}</div>
          <div class="flex justify-between items-center">
            <div class="text-gray-500 text-sm">{{ tulisan.kategori.nama }}</div>
            <div class="text-gray-500 text-sm">{{ tulisan.created_at }}</div>
          </div>
        </div>
      </div>
    </div>
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

  data() {
    return {
      tulisans: [],
    }
  },
  mounted() {
    this.fetchArtikel()
  },
  methods: {
    async fetchArtikel() {
      await this.$axios.get('tulisan-saya').then((res) => {
        console.log('res', res.data.data)
        this.tulisans = res.data.data
      })
    },
  },
}
</script>
