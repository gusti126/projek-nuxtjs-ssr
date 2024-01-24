<template>
  <div>
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
          <div class="container px-2 md:px-10 md:mt-20 md:w-6/12">
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
                >Peduli Umat</nuxt-link
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
          <nuxt-link to="/daftar-hmi">
            <div class="p-2 text-center">
              <img
                src="~/assets/image/training.svg"
                alt=""
                class="w-9 mx-auto"
              />
              <div class="text-xs mt-1">LK 1</div>
            </div>
          </nuxt-link>
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
      <section class="md:px-20 px-4 md:my-10 bg-cover md:py-7 pt-2">
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
                  Pendidikan HMI dengan materi HMI konstitusi, Sejarah
                  Perjuangan HMI, Nilai Dasar Perjuangan, Mission HMI, KMO
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
                <span class="font-semibold text-sm md:text-base"
                  >Peduli Umat</span
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
            <nuxt-link
              to="/daftar-hmi"
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
            </nuxt-link>
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

      <!-- konten -->
      <section class="md:px-10 px-4 mt-6">
        <div class="text-2xl text-gray-700 font-semibold mb-4">Tulisan</div>
        <div
          class="grid md:grid-cols-3 grid-cols-1 grid-flow-row gap-2 md:gap-4"
        >
          <nuxt-link
            :to="'/baca-tulisan/' + tulisan.id"
            v-for="tulisan in tulisans"
            :key="tulisan.id"
            class="
              bg-white
              h-full
              p-5
              rounded-3xl
              hover:border-gray-500
              border
              flex flex-col
              justify-between
            "
          >
            <div class="">
              <!-- header card -->
              <div class="flex justify-items-center items-center">
                <div class="">
                  <img
                    :src="
                      tulisan.user.image_profile
                        ? tulisan.user.image_profile
                        : tulisan.user.profile_photo_url
                    "
                    alt=""
                    class="rounded-full w-14 h-12 object-cover object-center"
                  />
                </div>
                <div class="ml-4 w-full">
                  <div class="text-lg font-medium">{{ tulisan.user.name }}</div>
                  <!-- <div class="w-full text-left text-gray-600 font-normal text-sm">
                  {{ tulisan.user.email }}
                </div> -->
                  <div class="flex w-full"></div>
                </div>
              </div>
              <div class="mt-5">
                <div>
                  <img
                    :src="tulisan.image"
                    alt=""
                    class="rounded-2xl w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>

            <div class="flex flex-col justify-between h-full">
              <div class="mt-2 text-lg font-semibold">
                {{ tulisan.judul }}
              </div>
              <div class="flex mt-2 justify-between">
                <div class="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div class="ml-1 text-gray-700">
                    {{ tulisan.kategori.nama }}
                  </div>
                </div>
                <div class="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>

                  <div class="ml-1 text-gray-700 w-full text-right">
                    {{ tulisan.created_at }}
                  </div>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </section>
      <!-- endkonten -->

      <cfooter />
    </div>
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
          itemprop: 'image',
          content:
            'https://hmi-komfaktek.vercel.app/_nuxt/img/logo-komfaktek1.822fb18.png',
        },
        {
          hid: 'image',
          name: 'image',
          itemprop: 'image',
          property: 'image',
          content:
            'https://hmi-komfaktek.vercel.app/_nuxt/img/logo-komfaktek1.822fb18.png',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          itemprop: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:image:width',
          name: 'og:image:width',
          itemprop: 'og:image:width',
          property: 'og:image:width',
          content: '300',
        },
        {
          hid: 'og:image:height',
          name: 'og:image:height',
          itemprop: 'og:image:height',
          property: 'og:image:height',
          content: '300',
        },
        {
          itemprop: 'width',
          content: '300',
        },
        {
          itemprop: 'height',
          content: '300',
        },
        {
          itemprop: 'image',
          name: 'image',
          content:
            'https://hmi-komfaktek.vercel.app/_nuxt/img/logo-komfaktek1.822fb18.png',
        },
      ],
    }
  },
  data() {
    return {
      list: [0, 1, 2, 3, 4],
      items: [],
      showModal: true,
      tulisans: [],
    }
  },
  mounted() {
    this.fetchData(1)
  },
  methods: {
    async fetchData(page) {
      this.isLoading = true
      this.current_page += 1
      let arrayData = []

      let resposne = await this.$axios
        .get('tulisan' + '?page=' + this.current_page)
        .then((res) => {
          // this.tulisans.push()
          if (this.tulisans.length > 0) {
            let newArray = res.data.data.data
            newArray.forEach((element) => {
              this.tulisans.push(element)
            })
          } else {
            this.tulisans = res.data.data.data
          }
          this.last_page = res.data.data.last_page
          this.isLoading = false
        })
    },
    handleShowModal() {
      if (this.showModal) {
        this.showModal = false
      } else {
        this.showModal = true
      }
    },
  },
}
</script>
