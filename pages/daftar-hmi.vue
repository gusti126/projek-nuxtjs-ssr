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
        <div class="font-semibold">Form Pendaftaran</div>
        <div class="grid grid-flow-row grid-cols-1 md:grid-cols-12 gap-4 mt-6">
          <div class="col-span-4">
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
            />
          </div>
          <div class="col-span-4">
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
            />
          </div>
          <div class="col-span-4">
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
            />
          </div>
          <div class="col-span-4">
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
            />
          </div>
          <div class="col-span-4">
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
              placeholder="Contoh : Teknik Informatika"
            />
          </div>
          <div class="col-span-4">
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
              placeholder="Contoh : Teknik Informatika"
            />
          </div>
          <div class="col-span-4">
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
              placeholder="Contoh : Teknik Informatika"
            />
          </div>
          <div class="col-span-4">
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
              placeholder="Laki-laki atau Perempuan "
            />
          </div>
          <div class="col-span-4">
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
            >
              <option value="">11992878 BCA GUSTI MAULANA RIZKIA</option>
              <option value="">009899756 BRI HMI KOMFAKTEK</option>
            </select>
          </div>

          <div class="col-span-3">
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
              >
                Pilih Image
              </div>
            </div>
          </div>
          <div class="col-span-3">
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
              >
                Pilih Image
              </div>
            </div>
          </div>
          <div class="col-span-3">
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
              >
                Pilih Image
              </div>
            </div>
          </div>
          <div class="col-span-3">
            <div class="">Foto Bukti Pembayaran 20.000</div>
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
              >
                Pilih Image
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
      title: 'Bergabung | event | HMI Komfaktek Melangkah Maju ',
      meta: [
        {
          name: 'description',
          content: 'bergabung bersama HMI Komfaktek 2021',
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
          content: 'Bergabung | event | HMI Komfaktek Melangkah Maju ',
        },
        {
          name: 'og:description',
          itemprop: 'og:description',
          content: 'Bergabung | event | HMI Komfaktek Melangkah Maju ',
        },
      ],
    }
  },
}
</script>
