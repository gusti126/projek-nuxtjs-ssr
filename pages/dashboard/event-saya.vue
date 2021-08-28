<template>
  <div class="pb-20">
    <div class="font-medium text-lg">Event Saya</div>
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
        class="col-span-12 md:col-span-4 rounded border p-4"
        v-for="item in dataAcara"
        :key="item.id"
      >
        <nuxt-link :to="'/event-detail/' + item.id">
          <div>
            <img
              :src="item.acara.image"
              class="h-32 object-cover w-full rounded"
            />
          </div>
          <div class="mt-2 font-medium text-gray-800">
            {{ item.acara.nama }}
          </div>
          <div class="mt-4">
            <div class="text-xs text-gray-600">
              <div class="text-gray-800">Waktu</div>
              <div>{{ item.acara.mulai }}</div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="text-sm font-semibold text-center" v-if="!dataAcara.length">
      Kamu belum bergabung pada event apapun
    </div>
    <div class="mt-6 text-center">
      <nuxt-link to="/event" class="text-hijau-button font-semibold"
        >Lihat event lainnya</nuxt-link
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
    }
  },
  data() {
    return {
      title: 'Event saya',
      dataAcara: [],
      isLoading: true,
    }
  },
  mounted() {
    this.fetchEvent()
  },
  methods: {
    async fetchEvent() {
      let resposnes = await this.$axios.get('event-saya').then((ress) => {
        this.dataAcara = ress.data.data
        console.log(this.dataAcara.length)
        this.isLoading = false
      })
      let aku = this.dataAcara.map((a) => a.acara)
    },
  },
}
</script>
