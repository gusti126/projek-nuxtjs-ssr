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

    <div class="container md:px-10 px-4 md:my-10 py-10 mt-2 bg-white">
      <div class="md:text-2xl text-xl text-gray-700 font-semibold">
        Event Terbaru
      </div>

      <!-- loading skeleton -->
      <div class="grid grid-flow-row grid-cols-12 gap-6 mt-4" v-if="isLoading">
        <div class="col-span-12 md:col-span-4" v-for="p of 6">
          <div class="border p-4 rounded">
            <div class="animate-pulse">
              <div
                class="
                  bg-gray-300
                  h-28
                  w-full
                  rounded
                  flex flex-wrap
                  content-center
                "
              >
                <div class="font-semibold text-gray-500 mx-auto">
                  memuat data sebentar...
                </div>
              </div>
              <div class="bg-gray-300 h-4 w-full mt-3 rounded-full"></div>
              <div class="bg-gray-300 h-4 md:w-44 mt-3 rounded-full"></div>
              <div class="bg-gray-300 h-4 md:w-32 mt-3 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- endloading skeleton -->

      <div v-else>
        <!-- card event desktop view -->
        <div class="grid grid-flow-row grid-cols-12 gap-6 mt-6">
          <div
            class="
              col-span-12
              md:col-span-3
              p-4
              rounded-lg
              bg-white
              border
              md:block
              hidden
            "
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
        <!-- endcard event desktop view -->

        <!-- card event mobile view -->
        <div class="grid grid-flow-row grid-cols-12 gap-6 md:hidden">
          <div
            class="col-span-12 md:col-span-3 p-4 rounded-lg bg-white border"
            v-for="item in items"
            :key="item.id"
          >
            <nuxt-link
              :to="'/event-detail/' + item.id"
              class="grid grid-flow-row grid-cols-12 gap-4"
            >
              <div class="col-span-4">
                <img
                  :src="item.image"
                  alt=""
                  class="rounded-lg object-cover md:h-40 h-full w-full"
                />
              </div>
              <div class="col-span-8">
                <div
                  class="font-semibold text-gray-700 mt-2"
                  v-if="item.nama.length > 50"
                >
                  {{ item.nama.substring(0, 30) + '..' }}
                </div>
                <div class="font-semibold text-gray-700 mt-2" v-else>
                  {{ item.nama }}
                </div>
                <div class="mt-4">
                  <div class="flex mb-4">
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
              </div>
            </nuxt-link>
          </div>
        </div>
        <!-- endcard event mobile view -->
      </div>
    </div>

    <div>
      <Flicking :options="{ align: 'prev', circular: true }">
        <div class="panel">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          corporis in pariatur nam, veritatis dignissimos excepturi sed fugit
          itaque, eaque quas atque saepe? In, nulla. Animi nisi iusto excepturi
          dolorem?
        </div>
        <div class="panel">2</div>
        <div class="panel">3</div>
      </Flicking>
    </div>

    <cfooter />
  </div>
</template>

<script>
export default {
  layout: 'default',
  head() {
    return {
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          itemprop: 'image',
          content: 'https://gustirizkia.my.id/logo-komfaktek14.jpg',
        },
        {
          hid: 'image',
          name: 'image',
          itemprop: 'image',
          property: 'image',
          content: 'https://gustirizkia.my.id/logo-komfaktek14.jpg',
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
          content: 'https://gustirizkia.my.id/logo-komfaktek14.jpg',
        },
      ],
    }
  },
  data() {
    return {
      items: [],
      isLoading: true,
    }
  },
  mounted() {
    this.fetchEvent()
  },
  methods: {
    async fetchEvent() {
      let resposnes = await this.$axios.get('event').then((ress) => {
        this.items = ress.data.data
        this.isLoading = false
      })
    },
  },
}
</script>
