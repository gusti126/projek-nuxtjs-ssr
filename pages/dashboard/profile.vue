<template>
  <div class="md:pb-0 pb-16">
    <div>
      <input
        type="file"
        class="bg-gray-700 cursor-pointer hidden"
        ref="file"
        @change="onFileChange"
        accept="image/*"
      />
      <div class="" v-if="imgUrl">
        <img
          :src="imgUrl"
          alt="profile image"
          class="
            w-32
            h-32
            object-cover
            rounded-full
            mx-auto
            border-hijau-button border-2
            cursor-pointer
            p-2
          "
          @click="$refs.file.click()"
        />
      </div>
      <div class="" v-else>
        <img
          src="~assets/image/profile-default.png"
          alt=""
          class="
            w-32
            h-32
            object-cover
            rounded-full
            mx-auto
            border-hijau-button border-2
            cursor-pointer
            p-2
          "
          @click="$refs.file.click()"
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="
          cursor-pointer
          h-10
          w-10
          mx-auto
          text-hijau-button
          relative
          -mt-6
          border border-hijau-button
          rounded-full
          bg-white
          p-2
        "
        @click="$refs.file.click()"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <div class="text-center text-gray-400 text-xs mt-2">
        untuk ganti klik di gambar
      </div>
    </div>

    <div class="grid grid-flow-row grid-cols-12 gap-4 mt-4">
      <div class="col-span-12 md:col-span-6">
        <label for="" class="text-gray-600 text-sm">Nama</label>
        <input
          type="text"
          class="
            bg-gray-0
            mt-2
            border
            rounded
            focus:outline-none
            border-hijau-button
            text-hijau-button
            py-1
            px-2
            w-full
          "
          v-model="user.name"
          placeholder="masukan nama ..."
        />
      </div>
      <div class="col-span-12 md:col-span-6">
        <label for="" class="text-gray-600 text-sm">Profesi</label>
        <input
          type="text"
          v-model="user.profesi"
          class="
            bg-gray-0
            mt-2
            border
            rounded
            focus:outline-none
            border-hijau-button
            text-hijau-button
            py-1
            px-2
            w-full
          "
          placeholder="masukan profesi ..."
        />
      </div>
      <div class="col-span-12 md:col-span-6">
        <label for="" class="text-gray-600 text-sm">Alamat</label>
        <input
          type="text"
          class="
            bg-gray-0
            mt-2
            border
            rounded
            focus:outline-none
            border-hijau-button
            text-hijau-button
            py-1
            px-2
            w-full
          "
          v-model="user.alamat"
          placeholder="masukan alamat ..."
        />
      </div>
      <div class="col-span-12 md:col-span-6">
        <label for="" class="text-gray-600 text-sm">Tanggal lahir</label>
        <input
          type="date"
          class="
            bg-gray-0
            mt-2
            border
            rounded
            focus:outline-none
            border-hijau-button
            text-hijau-button
            py-1
            px-2
            w-full
            bg-white
          "
          v-model="user.tgl_lahir"
          placeholder="tanggal lahir"
        />
      </div>
      <div class="col-span-12">
        <div
          class="
            bg-hijau-button
            px-6
            cursor-pointer
            hover:bg-hijau-header
            py-2
            rounded-lg
            inline-block
            text-white
          "
          @click="userUpdate"
        >
          Simpan
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
      title: 'Profile - ' + this.user.name,
    }
  },
  data() {
    return {
      user: {
        name: this.$store.state.auth.user.name,
        profesi: this.$store.state.auth.user.user_detail.profesi,
        alamat: this.$store.state.auth.user.user_detail.alamat,
        tgl_lahir: this.$store.state.auth.user.user_detail.tgl_lahir,
      },
      updateImage: false,
      selectedFiles: undefined,
      imgUrl: this.$store.state.auth.user.user_detail.image,
    }
  },

  methods: {
    onFileChange(e) {
      if (e.target.files.length !== 0) {
        const file = e.target.files[0]
        this.imgUrl = URL.createObjectURL(file)
        this.selectedFiles = this.$refs.file.files
        this.updateImage = true
      }
    },
    async userUpdate() {
      this.$store.commit('setLoading', true)
      let formData = new FormData()
      if (this.updateImage) {
        formData.append('image', this.selectedFiles.item(0))
      }
      formData.append('name', this.user.name)
      formData.append('profesi', this.user.profesi)
      formData.append('alamat', this.user.alamat)
      formData.append('tgl_lahir', this.user.tgl_lahir)
      let data = await this.$axios
        .post('profile/update', formData)
        .then((ress) => {
          console.log(ress)
          this.$swal({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Berhasil update profile',
            showConfirmButton: false,
            timer: 2000,
          })
        })
        .catch((e) => {
          this.$swal({
            text: 'masih ada kolom yang kosong, di isi dulu',
          })
        })

      await this.$auth.fetchUser()
      this.$store.commit('setLoading', false)
    },
  },
}
</script>
