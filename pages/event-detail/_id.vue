<template>
  <div>
    <navmobile />
    <div
      class="
        bg-center bg-cover
        sm:bg-left-top
        lg:bg-center
        bg-hijau-header
        rounded-b-3xl
        h-52
        hidden
        md:block
      "
    >
      <navbar />
    </div>

    <!-- skeleton loading -->
    <div v-if="isLoading" class="md:px-10 px-6 py-4 md:-mt-32">
      <div class="grid grid-flow-row grid-cols-12 gap-4">
        <div class="col-span-12 md:col-span-8 bg-white p-4 rounded">
          <div
            class="
              animate-pulse
              bg-gray-300
              h-44
              w-full
              rounded
              flex flex-wrap
              content-center
            "
          >
            <div class="font-semibold text-gray-500 mx-auto">
              Sedang loading sebentar...
            </div>
          </div>
          <div
            class="animate-pulse bg-gray-300 h-5 mt-4 md:w-96 rounded-full"
          ></div>
          <div
            v-for="p of 4"
            class="animate-pulse bg-gray-300 h-5 mt-4 w-full rounded-full"
          ></div>
        </div>
        <div class="col-span-12 md:col-span-4 bg-white p-4 rounded">
          <div
            class="
              animate-pulse
              bg-gray-300
              h-44
              w-full
              rounded
              flex flex-wrap
              content-center
            "
          >
            <div class="font-semibold text-gray-500 mx-auto">
              Sedang loading sebentar...
            </div>
          </div>
          <div class="animate-pulse bg-gray-300 h-5 mt-4 rounded-full"></div>
          <div
            v-for="p of 4"
            class="animate-pulse bg-gray-300 h-5 mt-4 w-full rounded-full"
          ></div>
        </div>
      </div>
    </div>
    <!-- endskeleton loading -->

    <div class="md:-mt-32" v-if="!isLoading">
      <div class="grid grid-flow-row grid-cols-12 gap-4 md:px-10 px-2">
        <div class="col-span-12 md:col-span-8">
          <div class="bg-white rounded-lg p-6">
            <div>
              <img :src="items.image" alt="" class="w-full rounded-lg" />
            </div>
            <div class="text-2xl font-semibold text-gray-700 mt-4">
              {{ items.nama }}
            </div>
            <div
              class="mt-2 text-gray-700 leading-7 text-sm md:text-base"
              v-if="readMore"
            >
              {{ items.deskripsi }}
            </div>
            <div
              class="mt-2 text-gray-700 leading-7 text-sm md:text-base"
              v-else
            >
              {{ shortDesk }}
              <span
                class="font-semibold text-hijau-button cursor-pointer"
                @click="lihatSelengkapnya"
                >. . . Lebih selengkapnya</span
              >
            </div>
          </div>
          <div class="mt-4 bg-white rounded-lg p-6">
            <div class="text-gray-700 text-lg font-semibold mb-4">Pemateri</div>
            <div class="flex text-center justify-around">
              <div v-for="pemateri in items.pemateri" :key="pemateri.id">
                <img
                  :src="pemateri.image"
                  alt=""
                  class="
                    rounded-full
                    w-28
                    h-28
                    object-cover
                    p-2
                    border-hijau-header border-2
                    mx-auto
                  "
                />
                <div class="mt-2 text-gray-700 font-medium">
                  {{ pemateri.nama }}
                </div>
                <div class="text-gray-600 text-sm">{{ pemateri.title }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-12 md:col-span-4">
          <div class="bg-white p-6 rounded-lg sticky top-4">
            <div class="text-gray-700 text-lg font-semibold mb-4">
              Pelaksanaan
            </div>
            <div>
              <div class="flex justify-between">
                <img
                  src="~/assets/image/icon/whh_student.svg"
                  alt=""
                  class="w-7 mr-2"
                />
                {{ items.join_event_count }} Peserta
              </div>
              <div class="flex justify-between my-6">
                <img
                  src="~/assets/image/icon/emojione-v1-alarm-clock.svg"
                  alt=""
                  class="w-7 mr-2"
                />
                {{ items.mulai }}
              </div>
              <div class="flex justify-between my-6">
                <img
                  src="~/assets/image/icon/certificate.svg"
                  alt=""
                  class="w-7 mr-2"
                />
                Bersertifikat
              </div>
              <hr />
              <div class="my-6 flex">
                <img
                  src="https://images.unsplash.com/photo-1627691541764-85b6e9003bec?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc4fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                  alt=""
                  class="rounded-full object-cover w-14 h-14 mr-4"
                />
                <div class="my-auto">
                  <div class="font-medium text-gray-700">
                    {{ moderator.nama }}
                  </div>
                  <div class="text-gray-700 text-sm">Moderator</div>
                </div>
              </div>
              <hr />
              <div class="mt-6">
                <div
                  class="
                    bg-hijau-button
                    rounded-full
                    py-2
                    text-white text-center
                    cursor-not-allowed
                  "
                  v-if="pernahDaftar"
                >
                  Terdaftar dalam event
                </div>
                <nuxt-link :to="'/success-join-event/' + items.id" v-else>
                  <div
                    class="
                      bg-hijau-button
                      rounded-full
                      py-2
                      text-white text-center
                      hover:bg-hijau-header
                      cursor-pointer
                    "
                  >
                    Daftar Event
                  </div>
                </nuxt-link>
              </div>

              <!-- <div class="flex mt-6 justify-between">
              <div class="">
                <a href="">
                  <img
                    src="~/assets/image/icon/fa-solid_share.svg"
                    alt="Share"
                    class="w-6"
                  />
                </a>
              </div>
              <div class="">
                <a href="">
                  <img
                    src="~/assets/image/icon/logos_whatsapp.svg"
                    alt="Share"
                    class="w-6"
                  />
                </a>
              </div>
              <div class="">
                <a href="">
                  <img
                    src="~/assets/image/icon/bi_facebook.svg"
                    alt="Share"
                    class="w-6"
                  />
                </a>
              </div>
            </div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="md:px-10 px2 mt-4">
        <div class="rounded-lg bg-white p-6">
          <div class="font-semibold text-lg text-gray-700">Event Lainnya</div>

          <div class="grid grid-flow-row grid-cols-12 gap-6 mt-6">
            <div
              class="col-span-12 md:col-span-3 p-4 rounded-lg border"
              v-for="p of 4"
            >
              <nuxt-link to="">
                <div>
                  <img
                    src="https://lorempixel.com/200/200/technics/"
                    alt=""
                    class="rounded-lg w-full object-cover h-40"
                  />
                </div>
                <div class="text-lg font-semibold text-gray-700 mt-2">
                  Java Programming Master Class For Software
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
                    <div class="my-auto text-gray-700 text-xs">09/08/21</div>
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
      </div>
      <Cfooter />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.items.nama + ' | event | HMI Komfaktek Melangkah Maju',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.shortDesk,
        },
        {
          hid: 'title',
          name: 'title',
          content: this.items.nama + ' | event | HMI Komfaktek Melangkah Maju',
        },
        {
          itemprop: 'title',
          name: 'title',
          content: this.items.nama + ' | event | HMI Komfaktek Melangkah Maju',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: this.items.nama + ' | event | HMI Komfaktek Melangkah Maju',
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          property: 'og:site_name',
          content: ' HMI Komfaktek Melangkah Maju',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content:
            'https://hmi-komfaktek.vercel.app/event-detail/' +
            this.$route.params.id,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: this.items.image,
        },
        {
          hid: 'image',
          name: 'image',
          property: 'image',
          content: this.items.image,
        },
        {
          name: 'image',
          itemprop: 'image',
          content: this.items.image,
        },
        {
          name: 'description',
          itemprop: 'description',
          content: this.shortDesk,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: this.shortDesk,
        },
      ],
    }
  },
  data() {
    return {
      // loading skeleton
      isLoading: true,
      items: [],
      moderator: {
        image: '',
        nama: '',
        title: '',
      },
      shortDesk: '',
      pernahDaftar: false,
      readMore: false,
    }
  },
  mounted() {
    this.eventDetail()
    this.cekMyEvent()
  },
  methods: {
    async eventDetail() {
      let data = await this.$axios
        .get('event/' + this.$route.params.id)
        .then((ress) => {
          this.items = ress.data.data
          // console.log(this.items.moderator[0].user.user_detail.image)
          this.moderator.image = this.items.moderator[0].user.user_detail.image
          this.moderator.title =
            this.items.moderator[0].user.user_detail.profesi
          this.moderator.nama = this.items.moderator[0].user.name
          this.shortDesk = this.items.deskripsi.substring(0, 290)
          console.log(this.shortDesk)
          console.log(this.items)
          this.isLoading = false
        })
    },
    async cekMyEvent() {
      if (this.$auth.loggedIn == true) {
        let myEvent = []
        let data = await this.$axios.get('event-saya').then((ress) => {
          myEvent = ress.data.data
          this.isLoading = false
        })
        myEvent.forEach((element) => {
          if (element.event_id == this.items.id) {
            this.pernahDaftar = true
          }
        })
      }
    },
    lihatSelengkapnya() {
      if (this.readMore) {
        this.readMore = false
      } else {
        this.readMore = true
      }
    },
  },
}
</script>
