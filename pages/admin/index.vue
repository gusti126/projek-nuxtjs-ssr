<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 grid-flow-row mt-4">
      <div class="shadow-md rounded bg-white pb-2">
        <div class="bg-gradient-to-r from-blue-500 rounded-t p-4 to-green-500">
          <div class="text-lg text-white font-medium flex">
            Jumlah Pendaftar LK 1
          </div>
        </div>
        <div class="p-4">
          {{ countPesertaLk }}
        </div>
        <nuxt-link to="/admin/peserta" class="p-4">Lihat Detail</nuxt-link>
      </div>
      <div class="shadow-md rounded bg-white">
        <div
          class="bg-gradient-to-r from-yellow-500 rounded-t p-4 to-green-500"
        >
          <div class="text-lg text-white font-medium flex">Jumlah User</div>
        </div>
        <div class="p-4">
          {{ user }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'admin',
  layout: 'admin',
  data() {
    return {
      countPesertaLk: 0,
      user: 0,
    }
  },
  mounted() {
    this.pesertaLk()
  },
  methods: {
    async pesertaLk() {
      await this.$axios.get('admin/peserta-lk').then((ress) => {
        this.countPesertaLk = ress.data.data.length
      })
      await this.$axios.get('admin/user').then((ress) => {
        this.user = ress.data.data.length
      })
    },
  },
}
</script>
