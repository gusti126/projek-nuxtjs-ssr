<template>
  <div>
    <navmobile />
    <section class="hidden md:block">
      <div
        class="
          bg-center bg-cover
          sm:bg-left-top
          lg:bg-center
          md:bg-hero-pattern
          from-green-700
          to-red-300
          md:min-h-hero-desktop
          pb-20
        "
      >
        <navbar />
        <div class="conatiner px-2 md:px-10 md:mt-20 md:w-6/12">
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
            bertepatan dengan tanggal 5 Februari 1947, atas prakarsa Lafran Pane
            beserta 14 orang mahasiswa Sekolah Tinggi Islam
          </div>
          <div class="md:mt-10 mt-6 text-center md:text-left">
            <a
              href=""
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
              >Peduli Umat</a
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
    </section>

    <!-- banner mobile  -->
    <div class="md:hidden">
      <div>
        <img src="~assets/banner-home-mobile.jpg" alt="" class="" />
      </div>
    </div>
    <!-- endbanner mobile  -->

    <!-- list menuprogram -->
    <div class="bg-white">
      <!-- mobile livst program -->
      <div class="grid grid-flow-row grid-cols-4 gap-4 md:hidden">
        <div class="p-2 text-center">
          <img src="~/assets/image/training.svg" alt="" class="w-9 mx-auto" />
          <div class="text-xs mt-1">LK 1</div>
        </div>
        <div class="p-2 text-center">
          <img src="~/assets/image/founding.png" alt="" class="w-9 mx-auto" />
          <div class="text-xs mt-1">Peduli</div>
        </div>
        <div class="p-2 text-center">
          <img
            src="~/assets/image/discussion-1900781 1.svg"
            alt=""
            class="w-9 mx-auto"
          />
          <div class="text-xs mt-1">Diskusi</div>
        </div>
        <div class="p-2 text-center">
          <img src="~/assets/image/reward.svg" alt="" class="w-9 mx-auto" />
          <div class="text-xs mt-1">Reward</div>
        </div>
      </div>
      <!-- endmobile livst program -->
    </div>
    <section class="container md:px-10 px-4 md:my-10 bg-cover md:py-7 pt-2">
      <div class="text-3xl text-gray-800 text-center md:block hidden">
        Program
      </div>
      <div
        class="
          hidden
          md:grid
          grid-flow-col grid-cols-12
          auto-cols-max
          md:mt-8
          gap-4
          justify-center
        "
      >
        <div class="lg:col-start-3 lg:col-span-4 col-span-6">
          <div
            class="
              bg-white
              hover:bg-green-500 hover:text-white
              p-4
              rounded-xl
              shadow
              lg:flex
              h-full
            "
          >
            <div class="lg:mr-4">
              <img
                src="~/assets/image/training.svg"
                alt=""
                class="lg:w-36 w-16 h-auto mx-auto"
              />
            </div>
            <div class="lg:text-left text-center">
              <span class="font-semibold text-sm md:text-base"
                >LATIHAN KADER 1</span
              ><br />
              <span class="text-sm hidden md:block">
                Pendidikan HMI dengan materi HMI konstitusi, Sejarah Perjuangan
                HMI, Nilai Dasar Perjuangan, Mission HMI, KMO
              </span>
            </div>
          </div>
        </div>
        <div class="lg:col-span-4 col-span-6">
          <div
            class="
              bg-white
              hover:bg-green-500 hover:text-white
              p-4
              rounded-xl
              shadow
              lg:flex
              h-full
            "
          >
            <div class="lg:mr-4">
              <img
                src="~/assets/image/founding.png"
                alt=""
                class="lg:w-36 w-16 h-auto mx-auto"
              />
            </div>
            <div class="text-center lg:text-left">
              <span class="font-semibold text-sm md:text-base">Peduli Umat</span
              ><br />
              <span class="lg:text-sm hidden md:block">
                Donasi & galang dana online bersama HMI Komfaktek. Peduli
                bersama HMI Komfaktek
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="
          md:grid
          grid-flow-col grid-cols-12
          auto-cols-max
          mt-4
          gap-4
          justify-center
          hidden
        "
      >
        <div class="lg:col-start-3 lg:col-span-4 col-span-6">
          <div
            class="
              bg-white
              hover:bg-green-500 hover:text-white
              p-4
              rounded-xl
              shadow
              lg:flex
              h-full
            "
          >
            <div class="lg:mr-4">
              <img
                src="~/assets/image/reward.svg"
                alt=""
                class="lg:w-36 w-16 h-auto mx-auto"
              />
            </div>
            <div class="lg:text-left text-center">
              <span class="font-semibold text-sm md:text-base">REWARD</span
              ><br />
              <span class="text-sm hidden md:block">
                Penghargaan untuk kader HMI atas pencapain prestasinya dalam
                berproses
              </span>
            </div>
          </div>
        </div>
        <div class="lg:col-span-4 col-span-6">
          <div
            class="
              bg-white
              hover:bg-green-500 hover:text-white
              p-4
              rounded-xl
              shadow
              lg:flex
              h-full
            "
          >
            <div class="lg:mr-4">
              <img
                src="~/assets/image/discussion-1900781 1.svg"
                alt=""
                class="lg:w-36 w-16 h-auto mx-auto"
              />
            </div>
            <div class="text-center lg:text-left">
              <span class="font-semibold text-sm md:text-base">DISKUSI </span
              ><br />
              <span class="lg:text-sm hidden md:block">
                HMI selalu mengajarkan kadernya berdiskusi untuk melatih dalam
                menganalisa realita sosial
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="md:relative bg-white py-14">
      <section
        class="
          md:px-10
          px-4
          grid grid-flow-row grid-cols-12
          md:gap-8
          gap-4
          z-20
        "
      >
        <div class="col-span-12 md:col-span-6 z-20">
          <div><img src="~assets/image/anies.png" alt="" /></div>
        </div>
        <div class="col-span-12 md:col-span-6 md:mt-6 z-20">
          <div class="text-3xl font-medium text-gray-700">
            Himpunan
            <span class="text-green-700 font-semibold"
              >Mahasiswa Islam Melahirkan</span
            >
            Banyak Pemimpin
          </div>
          <div class="my-4">
            Sudah tidak di ragukan lagi Himpunan Mahasiswa Islam memang banyak
            melahirkan pemimpin dari sejak HMI di dirikan hingga sampai saat
            ini.
            <br />
            Kader HMI berkontribusi penuh terhadap pembangunan bangsa tidak
            hanya di ranah pemerintahan HMI juga hadir sebagi
            <span class="font-semibold">Agent control off social</span>
          </div>
          <div
            class="
              bg-hijau-button
              hover:bg-gray-600
              px-5
              py-2
              rounded-full
              inline-block
              text-white text-center
            "
          >
            Gabung HMI
          </div>
        </div>
      </section>
      <!-- bg-icon -->
      <div class="absolute top-14 right-0 z-0">
        <img
          src="~/assets/image/circle-line2.svg"
          alt="line"
          class="md:block hidden"
        />
      </div>
      <div class="absolute top-60 right-20 z-0">
        <img
          src="~/assets/image/Dot Grid.svg"
          alt="line"
          class="md:block hidden"
        />
      </div>
      <!-- endbg-icon -->
    </div>

    <div class="container md:px-10 px-4 md:my-10 py-10 mt-6">
      <div class="text-2xl text-gray-700 font-semibold">Event Terbaru</div>
      <div class="grid grid-flow-row grid-cols-12 gap-6 mt-6">
        <div
          class="col-span-12 md:col-span-3 p-4 rounded-lg bg-white"
          v-for="item in items"
          :key="item.id"
        >
          <nuxt-link :to="'/event-detail/' + item.id">
            <div>
              <img
                :src="item.image"
                alt=""
                class="rounded-lg w-full object-cover h-40"
              />
            </div>
            <div
              class="font-semibold text-gray-700 mt-2"
              v-if="item.nama.length > 50"
            >
              {{ item.nama.substring(0, 50) + '..' }}
            </div>
            <div class="font-semibold text-gray-700 mt-2" v-else>
              {{ item.nama }}
            </div>
            <div class="mt-4 flex justify-between">
              <div class="flex">
                <div>
                  <img
                    src="~/assets/image/icon/emojione-v1-alarm-clock.svg"
                    alt=""
                    class="w-4 mr-2"
                  />
                </div>
                <div class="my-auto text-gray-700 text-xs">
                  {{ item.mulai }}
                </div>
              </div>
              <div class="flex">
                <div>
                  <img
                    src="~/assets/image/icon/whh_student.svg"
                    alt=""
                    class="w-4 mr-2"
                  />
                </div>
                <div class="my-auto text-gray-700 text-xs">100 Peserta</div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>

    <cfooter />
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: 'https://hmi-komfaktek.vercel.app/logo-komfaktek.png',
        },
        {
          hid: 'image',
          name: 'image',
          property: 'image',
          content: 'https://hmi-komfaktek.vercel.app/logo-komfaktek.png',
        },
        {
          itemprop: 'image',
          name: 'image',
          content: 'https://hmi-komfaktek.vercel.app/logo-komfaktek.png',
        },
      ],
    }
  },
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    this.fetchEvent()
  },
  methods: {
    async fetchEvent() {
      let resposnes = await this.$axios.get('event').then((ress) => {
        this.items = ress.data.data
        console.log(this.items)
      })
    },
  },
}
</script>
