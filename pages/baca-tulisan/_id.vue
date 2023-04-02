<template>
  <div class="">
    <navmobile />
    <!-- header -->
    <section class="pb-12">
      <!-- header background and nav -->
      <div
        class="
          bg-center bg-cover
          sm:bg-left-top
          lg:bg-center
          bg-hijau-header
          rounded-b-3xl
          h-60
          hidden
          md:block
        "
      >
        <navbar />

        <!-- <div class="conatiner px-2 md:px-10 md:mt-20 h-32"></div> -->
      </div>
      <!-- endheader background and nav -->
      <div class="md:-mt-40 md:px-20 mt-2 z-40">
        <div class="grid grid-flow-row grid-cols-12 gap-6">
          <div class="md:col-span-9 col-span-12">
            <div class="item bg-white rounded-xl">
              <img
                :src="response.data.image"
                alt="tulisan"
                class="md:rounded-t-xl w-full"
              />
              <div class="md:mt-4 mt-1 p-4">
                <div
                  class="md:text-4xl text-xl text-gray-800 font-semibold mb-4"
                >
                  {{ response.data.judul }}
                </div>
                <div
                  class="
                    mb-5
                    flex
                    justify-items-center
                    align-middle
                    items-center
                  "
                >
                  <img
                    :src="
                      response.data.user.image_profile
                        ? response.data.user.image_profile
                        : response.data.user.profile_photo_url
                    "
                    alt=""
                    class="rounded-full w-14 h-12 object-cover object-center"
                  />
                  <div class="ml-4">
                    <div class="text-lg font-medium">
                      {{ response.data.user.name }}
                    </div>
                    <div class="flex w-full">
                      <div
                        class="
                          w-full
                          d-none
                          text-left text-gray-600
                          font-normal
                          text-sm
                        "
                      >
                        {{ response.data.user.email }}
                      </div>
                    </div>
                  </div>
                  <div class="flex ml-4">
                    <nuxt-link
                      :to="
                        '/whatsapp://send?text=https://hmikomfaktek.com/baca-tulisan/' +
                        response.data.id
                      "
                      class=""
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-10 h-10 bg-green-700 rounded-lg text-white p-2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                        />
                      </svg>
                    </nuxt-link>
                  </div>
                </div>
                <hr class="mb-4" />
                <div class="" v-html="response.data.teks"></div>
              </div>
            </div>
          </div>
          <div class="md:col-span-3 col-span-12 md:px-0 px-4 md:mb-0 mb-12">
            <div class="">
              <nuxt-link
                :to="'/baca-tulisan/' + tulisan.id"
                v-for="tulisan in response.lainnya"
                :key="tulisan.id"
              >
                <div
                  class="
                    bg-white
                    p-5
                    rounded-3xl
                    hover:border-gray-500
                    border
                    mb-4
                  "
                >
                  <!-- header card -->
                  <div class="flex">
                    <div class="">
                      <img
                        :src="
                          tulisan.user.image_profile
                            ? tulisan.user.image_profile
                            : tulisan.user.profile_photo_url
                        "
                        alt=""
                        class="
                          rounded-full
                          w-14
                          h-12
                          object-cover object-center
                        "
                      />
                    </div>
                    <div class="ml-4 w-full">
                      <div class="text-lg font-medium">
                        {{ tulisan.user.name }}
                      </div>
                      <div class="flex w-full">
                        <div
                          class="
                            w-full
                            d-none
                            text-left text-gray-600
                            font-normal
                            text-sm
                          "
                        >
                          {{ tulisan.user.email }}
                        </div>
                      </div>
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
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- endhedaer -->
    <div class="md:px-20 px-6">
      <div class="">
        <div class="col-span-8"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      item: [],
      tulisans: [],
    }
  },
  mounted() {
    // this.fetchData()
  },

  async asyncData({ $axios, params }) {
    let response = await $axios.$get('tulisan/' + params.id)

    return { response }
  },
  methods: {},

  head() {
    return {
      title: this.response.data.judul + '| HMI KOMFAKTEK Cabang Ciputat',
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'HMI KOMFAKTEK | ' + this.response.data.judul,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: 'Baca Tulisan ' + this.response.data.judul,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          itemprop: 'image',
          content: this.response.data.image,
        },
        {
          hid: 'image',
          name: 'image',
          itemprop: 'image',
          property: 'image',
          content: this.response.data.image,
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
          content: this.response.data.image,
        },
      ],
    }
  },
}
</script>
