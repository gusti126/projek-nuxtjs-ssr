<template>
  <div>
    <div class="md:px-20 px-6 py-6">
      <div class="md:mt-20 mt-12">
        <img
          src="~/assets/success-join-event.png"
          alt=""
          class="w-96 mx-auto"
        />
      </div>
      <div class="mt-8 text-center">
        <div class="text-gray-800 font-semibold text-3xl">Berhasil Join</div>
        <div>{{ item.nama }}</div>
        <div>Waktu Pelaksanaan {{ item.mulai }}</div>
      </div>
      <div class="flex justify-center mt-6">
        <nuxt-link
          to="/dashboard/event-saya"
          class="
            bg-hijau-button
            border-2 border-hijau-button
            px-4
            py-1
            rounded
            text-white
            mr-6
          "
          >Dashboard</nuxt-link
        >
        <nuxt-link
          to="/"
          class="
            border-2 border-hijau-button
            px-4
            py-1
            rounded
            text-hijau-button
            hover:bg-hijau-button hover:text-white
          "
          >Event Lain</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      item: [],
    }
  },
  mounted() {
    this.getEventDetail()
    this.joinEvent()
  },
  methods: {
    async getEventDetail() {
      this.$store.commit('setLoading', true)
      let data = await this.$axios
        .get('event/' + this.$route.params.id)
        .then((ress) => {
          this.item = ress.data.data
        })
    },
    async joinEvent() {
      let data = await this.$axios
        .post('/event/join/create', {
          event_id: this.$route.params.id,
        })
        .then((ress) => {
          console.log(ress)
          this.$store.commit('setLoading', false)
        })
    },
  },
}
</script>
