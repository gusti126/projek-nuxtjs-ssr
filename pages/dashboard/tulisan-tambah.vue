<template>
  <div class="pb-10">
    <div class="hidden">
      <input
        type="file"
        class="bg-gray-700 cursor-pointer hidden"
        ref="img_artikel"
        accept="image/*"
        @change="onImageArtikel"
      />
    </div>
    <div class="grid mb-10">
      <div class="col-span-12 md:col-span-3">
        <div
          class="
            bg-gray-300
            w-full
            h-24
            rounded-lg
            text-center
            flex flex-wrap
            content-center
            cursor-pointer
          "
          @click="$refs.img_artikel.click()"
          v-if="!selectedFiles"
        >
          <div
            class="
              font-semibold
              text-center
              border border-hijau-button
              rounded-lg
              inline-block
              px-2
              py-1
              text-sm
              mx-auto
              cursor-pointer
              bg-hijau-button
              text-white
            "
            @click="$refs.img_artikel.click()"
          >
            Masukan Image Artikel
          </div>
        </div>
        <div
          class="
            bg-gray-300
            w-full
            h-full
            py-4
            rounded-lg
            text-center
            flex flex-wrap
            content-center
          "
          @click="$refs.img_artikel.click()"
          v-else
        >
          <img :src="imageUrl" alt="" class="object-contain mx-auto h-24" />
        </div>
      </div>
    </div>
    <div class="mb-8 grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4">
      <div class="">
        <div class="">Pilih Kategori</div>
        <select class="border p-2 rounded-lg w-full" v-model="kategori_id">
          <option value="0">Pilih Kategori Tulisan</option>
          <option :value="item.id" v-for="item in kategori" :key="item.id">
            {{ item.nama }}
          </option>
        </select>
      </div>
      <div class="">
        <div class="">Judul</div>
        <input
          type="text"
          v-model="judul"
          placeholder="masuka judul artikel"
          class="border rounded-lg w-full p-2"
        />
      </div>
    </div>
    <client-only placeholder="loading...">
      <ckeditor-nuxt
        v-model="contentHolder"
        :config="editorConfig"
        class="px-10"
      />
    </client-only>
    <button
      class="
        bg-hijau-button
        mt-8
        px-6
        py-2
        rounded-lg
        text-white
        hover:bg-green-500
      "
      @click="uploadArtikel"
    >
      Upload
    </button>
  </div>
</template>

<script>
export default {
  components: {
    'ckeditor-nuxt': () => {
      if (process.client) {
        return import('@blowstack/ckeditor-nuxt')
      }
    },
  },
  middleware: 'auth',
  layout: 'dashboard',

  head() {
    return {
      title: 'Dashboard Tulisan',
    }
  },
  data() {
    return {
      editorConfig: {
        removePlugins: ['Title'],
        // plugins: ['Bold', 'Link', 'List', 'FontSize'],
        width: 'auto',
        addPlugins: ['List', 'Image'],
      },
      contentHolder: null,
      selectedFiles: null,
      imageUrl: null,
      kategori: [],
      kategori_id: 0,
      judul: '',
    }
  },

  mounted() {
    this.fetchKategori()
  },

  methods: {
    async fetchKategori() {
      let response = await this.$axios.get('kategori-tulisan').then((res) => {
        this.kategori = res.data.data
      })
    },

    async uploadArtikel() {
      if (
        this.kategori_id < 1 ||
        !this.contentHolder ||
        this.imageUrl === null
      ) {
        this.$swal({
          icon: 'error',
          title: 'Gagal! data belum lengkap',
        })
        return
      }
      this.$store.commit('setLoading', true)
      let formData = new FormData()
      formData.append('image', this.selectedFiles[0])
      formData.append('kategori_tulisan_id', this.kategori_id)
      formData.append('teks', this.contentHolder)
      formData.append('judul', this.judul)

      let response = await this.$axios
        .post('tulisan/create', formData)
        .then((res) => {
          this.$swal({
            toast: true,
            position: 'top',
            icon: 'success',
            title: 'Selemat Tulisan Anda Berhasil di Buat',
            showConfirmButton: false,
            timer: 8000,
          })
          // location.reload()
          this.selectedFiles = null
          this.kategori_id = 0
          this.contentHolder = null
          this.judul = ''
          this.$router.push('/dashboard/tulisan')
        })
        .catch((err) => {
          this.$swal({
            icon: 'error',
            title: 'Gagal Upload artikel, telah terjadi kesalahan',
            timer: 8000,
          })
          console.log('ada error', err)
        })

      this.$store.commit('setLoading', false)
    },

    onImageArtikel(e) {
      if (e.target.files.length !== 0) {
        const file = e.target.files[0]
        this.imageUrl = URL.createObjectURL(file)
        this.selectedFiles = this.$refs.img_artikel.files
        console.log('foto artikel')
      }
    },
  },
}
</script>
