<template>
  <div class="pb-4">
    <nuxt-link to="/dashboard/tulisan-tambah">
      <div
        class="bg-green-800 text-white px-3 py-2 rounded-lg inline-block mb-6"
      >
        Tambah Tulisan
      </div>
    </nuxt-link>
    <div class="grid grid-flow-row grid-cols-12 gap-4">
      <div
        class="md:col-span-4 col-span-12"
        v-for="tulisan in tulisans"
        :key="tulisan.id"
      >
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
          <div class="flex justify-between mt-4">
            <div class="bg-blue-600 text-white rounded-lg px-3 py-2 text-xs">
              Edit
            </div>
            <div
              class="
                bg-red-600
                text-white
                rounded-lg
                px-3
                py-2
                text-xs
                cursor-pointer
                hover:bg-red-800
              "
              @click="confirmDelete(tulisan.id)"
            >
              Hapus
            </div>
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

    confirmDelete(id) {
      this.$swal({
        title: 'Kamu yakin?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'ya, hapus!',
      }).then((res) => {
        if (res.isConfirmed) {
          this.hapusTulisan(id)
        }
      })
    },

    async hapusTulisan(id) {
      this.$store.commit('setLoading', true)
      await this.$axios.delete('tulisan/' + id).then((res) => {
        const objWithIdIndex = this.tulisans.findIndex((obj) => obj.id === id)
        if (objWithIdIndex > -1) {
          this.tulisans.splice(objWithIdIndex, 1)
        }
        this.$swal({
          toast: true,
          position: 'top',
          icon: 'success',
          title: 'Berhasil hapus tulisan',
          showConfirmButton: false,
          timer: 8000,
        })
      })

      this.$store.commit('setLoading', false)
      // location.reload()
    },
  },
}
</script>
