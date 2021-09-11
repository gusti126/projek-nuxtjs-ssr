<template>
  <div class="pb-32 min-h-screen">
    <navmobile />

    <div class="bg-hero-galang-dana bg-center bg-cover">
      <navbar />
      <div class="grid grid-flow-row grid-cols-12 md:px-10 px-4 pb-20 md:pb-10">
        <div class="col-span-12 mt-8 md:col-span-6 md:hidden">
          <img src="~/assets/presiden-jokowi.png" alt="" class="" />
        </div>
        <div class="col-span-12 md:col-span-6">
          <div class="conatiner">
            <div
              class="
                md:text-5xl md:pt-10
                pt-10
                lg:text-left
                text-center
                sm:w-full
                text-gray-50
                md:font-medium
                text-2xl
              "
            >
              Melangkah <span class="">Maju Bersama HMI</span> Komfaktek
            </div>
            <div
              class="
                md:mt-6
                sm:mt-2
                text-gray-200
                font-light
                text-center
                md:text-left
                hidden
                md:block md:w-10/12
              "
            >
              Himpunan Mahasiswa Islam (HMI) adalah organisasi mahasiswa yang
              didirikan di Yogyakarta pada tanggal 14 Rabiul Awal 1366 H
              bertepatan dengan tanggal 5 Februari 1947, atas prakarsa Lafran
              Pane beserta 14 orang mahasiswa Sekolah Tinggi Islam
            </div>
            <div class="md:mt-10 mt-6 text-center md:text-left">
              <nuxt-link
                to="/galang-dana"
                class="
                  bg-hijau-button
                  hover:bg-opacity-0 hover:border-opacity-100
                  border-opacity-0 border-2 border-white
                  text-white
                  rounded-full
                  py-2
                  px-8
                  mr-6
                  hidden
                "
                >Get Started</nuxt-link
              >
              <nuxt-link
                to="register"
                v-if="this.$store.state.auth.loggedIn == null"
                class="
                  border-2 border-white border-opacity-100
                  hover:bg-hijau-button hover:border-opacity-0
                  text-white
                  rounded-full
                  py-2
                  px-8
                "
                >Sign Up</nuxt-link
              >
            </div>
          </div>
        </div>
        <div class="col-span-6 hidden md:block">
          <img src="~/assets/presiden-jokowi.png" alt="" class="" />
        </div>
      </div>
    </div>

    <div class="md:px-10 px-4 my-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 grid-flow-row mt-4">
        <div class="shadow-md rounded bg-white">
          <div
            class="bg-gradient-to-r from-blue-500 rounded-t p-4 to-green-500"
          >
            <div class="text-lg text-white font-medium flex">
              Verfikasi berkas
            </div>
          </div>
          <div class="p-4">
            Persiapan berkas : kartu tanda mahasiswa, foto 3x4 formal,
            pembayaran registrasi Rp.30.000
          </div>
        </div>
        <div class="shadow-md rounded bg-white">
          <div
            class="bg-gradient-to-r from-purple-500 rounded-t p-4 to-indigo-500"
          >
            <div class="text-white font-medium flex">
              Masa Penerimaan Calon Anggota Baru
            </div>
          </div>
          <div class="p-4">
            Masa Perkenalan Calon Anggota atau biasa di singkat MAPERCA
            merupakan kegiatan sebelum melaksanakan Basic Training.
          </div>
        </div>
        <div class="shadow-md rounded bg-white">
          <div
            class="bg-gradient-to-r from-yellow-500 rounded-t p-4 to-red-500"
          >
            <div class="text-white font-medium flex">Screening</div>
          </div>
          <div class="p-4">
            Pada tahap ini calon anggota akan melakukan tes, materi dasar ke
            organisasian HMI
          </div>
        </div>
        <div class="shadow-md rounded bg-white">
          <div
            class="bg-gradient-to-r from-blue-500 rounded-t p-4 to-green-500"
          >
            <div class="text-white font-medium flex">
              Pelaksanaan Basic Training
            </div>
          </div>
          <div class="p-4">
            Latihan kader I (Basic Traning) merupakan jenjang training formal
            dasar pada organisasi Himpunan Mahasiswa Islam (HMI)
          </div>
        </div>
      </div>
    </div>

    <div class="md:px-10 px-4">
      <div class="border border-gray-300 bg-white rounded-lg p-4">
        <div class="font-semibold text-center">Form Pendaftaran</div>
        <div
          class="grid grid-flow-row grid-cols-3 md:grid-cols-12 gap-4 mt-6"
          v-if="!isDafatrLk"
        >
          <div class="col-span-12 md:col-span-4">
            <div class="">
              <label for="">Nama Lengkap</label>
            </div>
            <input
              type="text"
              class="
                rounded-lg
                px-2
                py-1
                focus:ring-2 focus:ring-hijau-button focus:text-hijau-button
                border border-gray-500
                focus:border-transparent focus:outline-none
                mt-1
                w-full
              "
              v-model="dataDaftarLk.nama"
            />
          </div>
          <div class="col-span-12 md:col-span-4">
            <div class="">
              <label for="">Email Aktif</label>
            </div>
            <input
              type="email"
              class="
                rounded-lg
                px-2
                py-1
                focus:ring-2 focus:ring-hijau-button focus:text-hijau-button
                border border-gray-500
                focus:border-transparent focus:outline-none
                mt-1
                w-full
              "
              v-model="dataDaftarLk.email"
            />
          </div>
          <div class="col-span-12 md:col-span-4">
            <div class="">
              <label for="">Nomor WhatsApp</label>
            </div>
            <input
              type="number"
              class="
                rounded-lg
                px-2
                py-1
                focus:ring-2 focus:ring-hijau-button focus:text-hijau-button
                border border-gray-500
                focus:border-transparent focus:outline-none
                mt-1
                w-full
              "
              v-model="dataDaftarLk.wa"
            />
          </div>
          <div class="col-span-12 md:col-span-4">
            <div class="">
              <label for="">Nomor Induk Mahasiswa</label>
            </div>
            <input
              type="number"
              class="
                rounded-lg
                px-2
                py-1
                focus:ring-2 focus:ring-hijau-button focus:text-hijau-button
                border border-gray-500
                focus:border-transparent focus:outline-none
                mt-1
                w-full
              "
              v-model="dataDaftarLk.nim"
            />
          </div>
          <div class="col-span-12 md:col-span-4">
            <div class="">
              <label for="">Program Studi </label>
            </div>
            <input
              type="text"
              class="
                rounded-lg
                px-2
                py-1
                focus:ring-2 focus:ring-hijau-button focus:text-hijau-button
                border border-gray-500
                focus:border-transparent focus:outline-none
                mt-1
                w-full
              "
              v-model="dataDaftarLk.prodi"
              placeholder="Contoh : Teknik Informatika"
            />
          </div>
          <div class="col-span-12 md:col-span-4">
            <div class="">
              <label for="">Semester Sekarang </label>
            </div>
            <input
              type="number"
              class="
                rounded-lg
                px-2
                py-1
                focus:ring-2 focus:ring-hijau-button focus:text-hijau-button
                border border-gray-500
                focus:border-transparent focus:outline-none
                mt-1
                w-full
              "
              v-model="dataDaftarLk.semester"
              placeholder="Contoh : semester 4"
            />
          </div>
          <div class="col-span-12 md:col-span-4">
            <div class="">
              <label for="">ALamat </label>
            </div>
            <input
              type="text"
              class="
                rounded-lg
                px-2
                py-1
                focus:ring-2 focus:ring-hijau-button focus:text-hijau-button
                border border-gray-500
                focus:border-transparent focus:outline-none
                mt-1
                w-full
              "
              v-model="dataDaftarLk.alamat"
              placeholder="Contoh : Contoh Tangerang Selatan"
            />
          </div>
          <div class="col-span-12 md:col-span-4">
            <div class="">
              <label for="">TGL Lahir </label>
            </div>
            <input
              type="date"
              class="
                rounded-lg
                px-2
                py-1
                focus:ring-2 focus:ring-hijau-button focus:text-hijau-button
                border border-gray-500
                focus:border-transparent focus:outline-none
                mt-1
                w-full
              "
              v-model="dataDaftarLk.tgl_lhr"
              placeholder="Contoh : Teknik Informatika"
            />
          </div>
          <div class="col-span-12 md:col-span-4">
            <div class="">
              <label for="">Jenis Kelamin</label>
            </div>
            <input
              type="text"
              class="
                rounded-lg
                px-2
                py-1
                focus:ring-2 focus:ring-hijau-button focus:text-hijau-button
                border border-gray-500
                focus:border-transparent focus:outline-none
                mt-1
                w-full
              "
              v-model="dataDaftarLk.jenis_kl"
              placeholder="Laki-laki atau Perempuan "
            />
          </div>
          <div class="col-span-12 md:col-span-4">
            <div class="">
              <label for="">Rekning Tujuan</label>
            </div>
            <select
              class="
                rounded-lg
                px-2
                py-1
                focus:ring-2 focus:ring-hijau-button focus:text-hijau-button
                border border-gray-500
                focus:border-transparent focus:outline-none
                mt-1
                w-full
              "
              v-model="dataDaftarLk.rekeni_tujuan"
            >
              <option :value="rek.id" v-for="rek in rekening" :key="rek.id">
                {{ rek.nomor_bank }} {{ rek.nama_bank }} {{ rek.atas_nama }}
              </option>
            </select>
          </div>

          <!-- refs image -->
          <div class="hidden">
            <input
              type="file"
              class="bg-gray-700 cursor-pointer hidden"
              ref="fotodiri"
              @change="onFotodiri"
              accept="image/*"
            />
            <input
              type="file"
              class="bg-gray-700 cursor-pointer hidden"
              ref="fotoktm"
              @change="onFotoKtm"
              accept="image/*"
            />
            <input
              type="file"
              class="bg-gray-700 cursor-pointer hidden"
              ref="fotoByr"
              @change="onFotoByr"
              accept="image/*"
            />
            <input
              type="file"
              class="bg-gray-700 cursor-pointer hidden"
              ref="fotoKtp"
              @change="onFotoKtp"
              accept="image/*"
            />
          </div>
          <!-- endrefs image -->
          <!-- image input -->
          <div class="col-span-12">
            <div class="grid grid-flow-row grid-cols-12 gap-4">
              <div class="col-span-12 md:col-span-3">
                <div class="">Foto diri 3x4</div>
                <div
                  class="
                    bg-gray-300
                    w-full
                    h-24
                    rounded-lg
                    text-center
                    flex flex-wrap
                    content-center
                  "
                  v-if="!selectedFiles.fotoDiri"
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
                    @click="$refs.fotodiri.click()"
                  >
                    Pilih Image
                  </div>
                </div>
                <div
                  class="
                    bg-gray-300
                    w-full
                    h-24
                    rounded-lg
                    text-center
                    flex flex-wrap
                    content-center
                  "
                  v-else
                >
                  <img
                    :src="dataDaftarLk.foto_diri"
                    alt=""
                    class="object-contain mx-auto h-24"
                  />
                </div>
              </div>
              <div class="col-span-12 md:col-span-3">
                <div class="">Foto KTM</div>
                <div
                  class="
                    bg-gray-300
                    w-full
                    h-24
                    rounded-lg
                    text-center
                    flex flex-wrap
                    content-center
                  "
                  v-if="!selectedFiles.fotoKtm"
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
                    @click="$refs.fotoktm.click()"
                  >
                    Pilih Image
                  </div>
                </div>
                <div
                  class="
                    bg-gray-300
                    w-full
                    h-24
                    rounded-lg
                    text-center
                    flex flex-wrap
                    content-center
                  "
                  v-else
                >
                  <img
                    :src="dataDaftarLk.foto_ktm"
                    alt=""
                    class="object-contain mx-auto h-24"
                  />
                </div>
              </div>
              <div class="col-span-12 md:col-span-3 hidden">
                <div class="">Foto KTP</div>
                <div
                  class="
                    bg-gray-300
                    w-full
                    h-24
                    rounded-lg
                    text-center
                    flex flex-wrap
                    content-center
                  "
                  v-if="!selectedFiles.fotoKtp"
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
                    @click="$refs.fotoKtp.click()"
                  >
                    Pilih Image
                  </div>
                </div>
                <div
                  class="
                    bg-gray-300
                    w-full
                    h-24
                    rounded-lg
                    text-center
                    flex flex-wrap
                    content-center
                  "
                  v-else
                >
                  <img
                    :src="dataDaftarLk.foto_ktp"
                    alt=""
                    class="object-contain mx-auto h-24"
                  />
                </div>
              </div>
              <div class="col-span-12 md:col-span-3">
                <div class="">Foto Bukti Pembayaran 30.000</div>
                <div
                  class="
                    bg-gray-300
                    w-full
                    h-24
                    rounded-lg
                    text-center
                    flex flex-wrap
                    content-center
                  "
                  v-if="!selectedFiles.fotoBayar"
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
                    @click="$refs.fotoByr.click()"
                  >
                    Pilih Image
                  </div>
                </div>
                <div
                  class="
                    bg-gray-300
                    w-full
                    h-24
                    rounded-lg
                    text-center
                    flex flex-wrap
                    content-center
                  "
                  v-else
                >
                  <img
                    :src="dataDaftarLk.foto_bukti_by"
                    alt=""
                    class="object-contain mx-auto h-24"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- end image input -->
          <!-- button submit -->
          <div class="col-span-12">
            <div
              class="
                bg-hijau-button
                py-2
                px-2
                rounded-lg
                text-white text-center
                font-medium
                cursor-pointer
                hover:bg-hijau-header
              "
              @click="daftarLksatu"
            >
              Daftar LK 1 HMI Komfaktek
            </div>
          </div>
        </div>
        <div class="mt-4" v-else>
          <div>
            <img
              src="~assets/image/logo-komfaktek.png"
              alt=""
              class="mx-auto w-32"
            />
          </div>
          <div class="text-center mt-4">
            <div class="text-lg font-semibold text-green-800">
              Terimakasih sudah mendaftar basic training (lk-1) <br />
              HMI Komfaktek Cabang Ciputat <br />
              Periode 2021-2022 <br />
              <div
                class="
                  bg-hijau-button
                  text-white
                  px-3
                  py-2
                  rounded-full
                  inline-block
                  text-base
                  font-normal
                  cursor-pointer
                "
                @click="tautanGrupWa"
              >
                Gabung Grup WhatsApp Calon Anggota
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
  middleware: 'auth',
  head() {
    return {
      title: 'Basic Training LK 1 HMI Komfaktek Melangkah Maju ',
      meta: [
        {
          name: 'description',
          content: 'Basic Training LK 1 bersama HMI Komfaktek 2021',
        },
        {
          name: 'title',
          content: 'Daftar | Basic Training | HMI Komfaktek Melangkah Maju ',
        },
        {
          itemprop: 'title',
          name: 'title',
          content: 'Daftar | Basic Training | HMI Komfaktek Melangkah Maju ',
        },
        {
          itemprop: 'image',
          name: 'image',
          content: 'https://gustirizkia.my.id/logo-komfaktek14.jpg',
        },
        {
          name: 'og:title',
          property: 'og:title',
          content: 'Daftar | Basic Training | HMI Komfaktek Melangkah Maju ',
        },
        {
          property: 'og:image',
          itemprop: 'image',
          content: 'https://gustirizkia.my.id/logo-komfaktek14.jpg',
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
          content: 'website',
        },

        {
          name: 'instagram:card',
          property: 'instagram:card',
          content: 'article',
        },
        {
          name: 'description',
          itemprop: 'description',
          content: 'Daftar | Basic Training | HMI Komfaktek Melangkah Maju ',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: 'Daftar | Basic Training | HMI Komfaktek Melangkah Maju ',
        },
        {
          name: 'og:description',
          itemprop: 'og:description',
          content: 'Daftar | Basic Training | HMI Komfaktek Melangkah Maju ',
        },
      ],
    }
  },
  data() {
    return {
      rekening: [],
      isDafatrLk: false,
      dataDaftarLk: {
        nama: this.$store.state.auth.user.name,
        email: this.$store.state.auth.user.email,
        wa: 0,
        nim: 0,
        prodi: '',
        semester: 0,
        alamat: '',
        tgl_lhr: null,
        jenis_kl: '',
        foto_diri: undefined,
        foto_ktm: undefined,
        foto_ktp: undefined,
        foto_bukti_by: undefined,
        rekeni_tujuan: 1,
      },
      selectedFiles: {
        fotoDiri: undefined,
        fotoKtm: undefined,
        fotoKtp: undefined,
        fotoBayar: undefined,
      },
    }
  },

  mounted() {
    this.$store.commit('setLoading', true)
    this.getRekening()
    this.cekDaftarLk()
    console.log(this.dataDaftarLk)
  },

  methods: {
    tautanGrupWa() {
      window.location.replace(
        'https://chat.whatsapp.com/EgNbVLH3rN5E5ml9n1HP4G'
      )
    },
    async getRekening() {
      this.$store.commit('setLoading', true)
      let response = await this.$axios.get('rekening').then((ress) => {
        this.rekening = ress.data.data
        console.log(this.rekening)
      })
    },
    async cekDaftarLk() {
      let response = await this.$axios
        .get('cek-daftar-lk')
        .then((ress) => {
          this.isDafatrLk = true
          this.$swal({
            icon: 'info',
            title: 'Sudah pernah mengisi form pendaftaran',
            text: 'Anda sudah mengirim form pendaftaran selanjutnya akan di followup oleh tim HMI komfaktek. Tenang saja proses ini tidak lama',
          })
        })
        .catch((e) => {
          console.log(e.response.data.message)
          this.isDafatrLk = false
        })
      this.$store.commit('setLoading', false)
    },
    onFotodiri(e) {
      if (e.target.files.length !== 0) {
        const file = e.target.files[0]
        this.dataDaftarLk.foto_diri = URL.createObjectURL(file)
        console.log(this.dataDaftarLk.foto_diri)
        this.selectedFiles.fotoDiri = this.$refs.fotodiri.files
        console.log('foto diri')
      }
    },
    onFotoKtm(e) {
      if (e.target.files.length !== 0) {
        const file = e.target.files[0]
        this.dataDaftarLk.foto_ktm = URL.createObjectURL(file)
        this.selectedFiles.fotoKtm = this.$refs.fotoktm.files
        console.log('foto Ktm')
      }
    },
    onFotoKtp(e) {
      if (e.target.files.length !== 0) {
        const file = e.target.files[0]
        this.dataDaftarLk.foto_ktp = URL.createObjectURL(file)
        this.selectedFiles.fotoKtp = this.$refs.fotoKtp.files
        console.log('foto ktp')
      }
    },
    onFotoByr(e) {
      if (e.target.files.length !== 0) {
        const file = e.target.files[0]
        this.dataDaftarLk.foto_bukti_by = URL.createObjectURL(file)
        this.selectedFiles.fotoBayar = this.$refs.fotoByr.files
        console.log('foto bayar')
      }
    },
    async daftarLksatu() {
      if (
        !this.dataDaftarLk.nama ||
        !this.dataDaftarLk.email ||
        this.dataDaftarLk.wa.length < 1 ||
        this.dataDaftarLk.nim.length < 1 ||
        !this.dataDaftarLk.prodi ||
        this.dataDaftarLk.semester === 0 ||
        !this.dataDaftarLk.tgl_lhr ||
        !this.dataDaftarLk.jenis_kl ||
        !this.dataDaftarLk.foto_diri ||
        !this.dataDaftarLk.foto_ktm ||
        !this.dataDaftarLk.foto_bukti_by
      ) {
        this.$swal({
          icon: 'error',
          title: 'Gagal Daftar Basic Training',
          text: 'Ada Form yang kosong silahkan isi terlebih dahulu',
        })
        console.log(this.dataDaftarLk)
        return
      }
      this.$store.commit('setLoading', true)
      let formData = new FormData()
      formData.append('foto_diri', this.selectedFiles.fotoDiri.item(0))
      formData.append('foto_ktm', this.selectedFiles.fotoKtm.item(0))
      formData.append('foto_ktp', this.selectedFiles.fotoKtp.item(0))
      formData.append('foto_bukti_byr', this.selectedFiles.fotoBayar.item(0))
      formData.append('alamat', this.dataDaftarLk.alamat)
      formData.append('nama', this.dataDaftarLk.nama)
      formData.append('prodi', this.dataDaftarLk.prodi)
      formData.append('nomor_mhs', this.dataDaftarLk.nim)
      formData.append('smstr', this.dataDaftarLk.semester)
      formData.append('nomor_wa', this.dataDaftarLk.wa)
      formData.append('email', this.dataDaftarLk.email)
      formData.append('rekening_id', this.dataDaftarLk.rekeni_tujuan)
      formData.append('jk', this.dataDaftarLk.jenis_kl)
      formData.append('tgl_lahir', this.dataDaftarLk.tgl_lhr)

      let submitData = await this.$axios
        .post('daftarlk/create', formData)
        .then((ress) => {
          console.log(ress)
          this.isDafatrLk = true
          this.$store.commit('setLoading', false)
          this.$swal({
            icon: 'success',
            title: 'Berhasil Kirim Form',
            text: 'Form pendaftaran berhasil di kirim selanjutnya akan di periksa oleh TIM HMI Komfaktek update selanjutnya akan di kirim via email dan nomor whatsApp',
          })
        })
        .catch((e) => {
          console.log(e.response.data.message)
        })
    },
  },
}
</script>
