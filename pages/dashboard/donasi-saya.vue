<template>
  <div class="pb-20">
    <div class="font-medium text-lg">Donasi Saya</div>
    <!-- loading skeleton -->
    <div class="grid grid-flow-row grid-cols-12 gap-6 mt-4" v-if="isLoading">
      <div class="col-span-12 md:col-span-4" v-for="p of 6">
        <div class="border p-4 rounded">
          <div class="animate-pulse">
            <div
              class="
                bg-gray-300
                h-28
                w-full
                rounded
                flex flex-wrap
                content-center
              "
            >
              <div class="font-semibold text-gray-500 mx-auto">
                memuat data sebentar...
              </div>
            </div>
            <div class="bg-gray-300 h-4 w-full mt-3 rounded-full"></div>
            <div class="bg-gray-300 h-4 md:w-44 mt-3 rounded-full"></div>
            <div class="bg-gray-300 h-4 md:w-32 mt-3 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- endloading skeleton -->
    <div class="grid grid-flow-row grid-cols-12 gap-6 mt-4" v-else>
      <div
        class="col-span-12 md:col-span-4 border p-4 rounded"
        v-for="item in dataMyDonasi"
        :key="item.id"
      >
        <div>
          <img :src="item.fund.thumbnail" alt="" class="rounded" />
        </div>
        <div class="mt-2 text-gray-800">
          donasi Rp.{{ item.current_amout | currency }}
        </div>
        <div class="text-sm font-semibold text-green-700">
          {{ item.status_pembayaran }}
        </div>
        <div class="text-sm font-semibold text-green-700">id {{ item.id }}</div>
        <div
          class="
            border border-hijau-button
            text-center
            py-1
            text-hijau-button
            hover:bg-hijau-button hover:text-white
            mt-2
            rounded
            cursor-pointer
            font-medium
          "
          @click="linkPembayaran(item.snap_url)"
        >
          link pembayaran
        </div>
      </div>
    </div>
    <!-- <div class="text-sm font-semibold text-center" v-if="!dataAcara.length">
      Tidak ada riwayat donasi
    </div> -->
    <div class="mt-6 text-center">
      <nuxt-link to="/galang-dana" class="text-hijau-button font-semibold"
        >Founding Peduli Umat Lainnya</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  head() {
    return {
      title: this.title,
      dataMyDonasi: [],
    }
  },
  data() {
    return {
      title: 'Donasi saya',

      isLoading: true,
    }
  },
  mounted() {
    this.fetchEvent()
  },
  methods: {
    async fetchEvent() {
      let data = await this.$axios.get('my-donasi').then((ress) => {
        this.dataMyDonasi = ress.data.data
        this.isLoading = false
      })
    },
    linkPembayaran(data) {
      //   console.log(data)
      window.location.replace(data)
    },
  },
}
</script>
