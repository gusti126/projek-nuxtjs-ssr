<template>
  <div>
    <!-- cekberkas -->
    <!-- <div class="relative" v-if="isCekBerkas">
      <div
        class="
          p-4
          bg-white
          border
          shadow-lg
          w-full
          z-50
          flex
          justify-center
          items-center
        "
      >
        <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <img :src="cekData.foto_diri" alt="" />
          </div>
          <div>
            <img :src="cekData.ktm" alt="" />
          </div>
          <div>
            <img :src="cekData.foto_bukti_byr" alt="" />
          </div>
          <div>
            <img :src="cekData.ktm" alt="" />
          </div>
        </div>
      </div>
    </div> -->
    <!-- endcekberkas -->
    <div>
      <label class="inline-flex items-center mt-3">
        <input
          type="radio"
          class="form-radio h-5 w-5 text-gray-600"
          v-model="cekStatus"
          value="pending"
        /><span class="text-gray-700 mx-2">Pending</span>
      </label>
      <label class="inline-flex items-center mt-3">
        <input
          type="radio"
          class="form-radio h-5 w-5 text-gray-600"
          v-model="cekStatus"
          value="sukses"
        /><span class="text-gray-700 mx-2">Sukses</span>
      </label>
      <label class="inline-flex items-center mt-3">
        <input
          type="radio"
          class="form-radio h-5 w-5 text-gray-600"
          v-model="cekStatus"
          value="gagal"
        /><span class="text-gray-700 mx-2">Gagal</span>
      </label>
    </div>
    <div class="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div
        class="p-2 shadow-sm rounded border"
        v-for="(peser, index) in peserta"
        :key="index"
        v-if="cekStatus === peser.status"
      >
        <div class="mt-2">
          {{ peser.nama }} <br />
          <span class="ml-auto text-gray-600">{{ peser.email }}</span>
        </div>
        <div class="flex mt-2">
          {{ peser.nomor_wa }} <span class="ml-auto">{{ peser.status }}</span>
        </div>

        <div
          class="grid grid-flow-row grid-cols-1 gap-3 mt-3"
          v-if="cekDataId === peser.id"
        >
          <div class="flex">
            Nim : <span class="ml-auto"> {{ peser.nomor_mhs }}</span>
          </div>
          <div class="flex">
            Prodi : <span class="ml-auto"> {{ peser.prodi }}</span>
          </div>
          <div class="flex">
            Semester : <span class="ml-auto"> {{ peser.smstr }}</span>
          </div>
          <div>
            <img
              :src="
                'https://komfaktek.myflower.online/storage/' + peser.foto_diri
              "
              alt=""
            />
          </div>
          <div>
            <img
              :src="
                'https://komfaktek.myflower.online/storage/' + peser.foto_ktm
              "
              alt=""
            />
          </div>
          <div>
            <img
              :src="
                'https://komfaktek.myflower.online/storage/' +
                peser.foto_bukti_byr
              "
              alt=""
            />
          </div>
        </div>
        <div
          class="
            bg-hijau-button
            py-1
            rounded
            text-white text-center
            mt-3
            cursor-pointer
          "
          :class="cekDataId === peser.id ? 'hidden' : ''"
          @click="cekBerkas(peser.id)"
        >
          Cek Berkas
        </div>
        <div
          class="flex text-center justify-between mt-4"
          :class="cekDataId === peser.id ? '' : 'hidden'"
        >
          <div
            class="
              border-2 border-hijau-button
              bg-hijau-button
              px-2
              py-1
              rounded
              text-white
              cursor-pointer
            "
            :class="peser.status === 'sukses' ? 'hidden' : ''"
            v-if="!tolak"
            @click="hendleVerify(peser.user_id)"
          >
            Verifikasi
          </div>
          <div class="flex" v-if="!tolak">
            <div
              class="
                border-2 border-hijau-button
                hover:bg-hijau-button hover:text-white
                px-2
                py-1
                rounded
                text-hijau-button
                cursor-pointer
              "
              @click="hendleTolak"
            >
              Tolak
            </div>
            <div
              class="
                border-2 border-hijau-button
                hover:bg-hijau-button hover:text-white
                px-2
                py-1
                rounded
                text-hijau-button
                cursor-pointer
                ml-4
              "
              @click="cancle"
            >
              Cancle
            </div>
          </div>
          <div class="flex-none w-full" v-else>
            <div class="w-full">
              <textarea
                class="w-full rounded border border-gray-600 px-2 block mb-3"
                rows="2"
                placeholder="masukan pesan kenapa di tolak"
                v-model="pesan"
              ></textarea>
            </div>
            <div class="flex">
              <div
                class="
                  border-2 border-hijau-button
                  bg-hijau-button
                  text-white
                  px-2
                  py-1
                  rounded
                  cursor-pointer
                "
                @click="hendleSubmit(peser.user_id)"
              >
                Submit
              </div>
              <div
                class="
                  border-2 border-hijau-button
                  hover:bg-hijau-button hover:text-white
                  px-2
                  py-1
                  rounded
                  text-hijau-button
                  cursor-pointer
                  ml-4
                "
                @click="cancle"
              >
                Cancle
              </div>
            </div>
          </div>
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
      cekStatus: 'pending',
      peserta: [],
      cekDataId: 0,
      tolak: false,
      pesan: '',
    }
  },
  mounted() {
    this.getDataPeserta()
  },
  methods: {
    async getDataPeserta() {
      let response = await this.$axios.get('admin/peserta-lk').then((ress) => {
        this.peserta = ress.data.data
      })
    },
    cekBerkas(id) {
      this.cekDataId = id
      console.log(id)
    },
    cancle() {
      this.cekDataId = 0
      this.tolak = false
    },
    hendleTolak() {
      this.tolak = true
    },
    async hendleVerify(userId) {
      let data = await this.$axios
        .post('admin/peserta-lk/setsukses', {
          user_id: userId,
        })
        .then((ress) => {
          console.log(ress)
          this.getDataPeserta()
          this.cekDataId = 0
          this.$swal({
            icon: 'success',
            title: 'Verifikasi berkas sukses mantap kanda',
          })
        })
    },
    async hendleSubmit(userId) {
      this.$store.commit('setLoading', true)
      let data = await this.$axios
        .post('admin/peserta-lk/setgagal', {
          user_id: userId,
          pesan: this.pesan,
        })
        .then((ress) => {
          this.getDataPeserta()
          console.log(ress)
          this.$store.commit('setLoading', false)
          this.$swal({
            icon: 'success',
            title: 'Penolakan berkas berhasil',
          })
        })
    },
  },
  watch: {
    cekStatus(val) {
      console.log(val)
    },
  },
}
</script>
