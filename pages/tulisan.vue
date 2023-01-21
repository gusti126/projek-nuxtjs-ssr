<template>
  <div>
    <navmobile />
    <!-- header -->
    <section class="">
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
      <div class="md:-mt-40 md:px-10 mt-2 z-40">
        <div class="item">
          <img src="~/assets/image/tulisan1.svg" alt="tulisan" class="w-full" />
        </div>
      </div>
    </section>
    <!-- endhedaer -->

    <!-- filter -->

    <!-- endfilter -->

    <!-- skeleton -->
    <div class="md:px-10 px-4 mt-6" v-if="isLoading">
      <div class="grid grid-flow-row grid-cols-12 gap-4">
        <div
          class="col-span-12 md:col-span-4 gap-4"
          v-for="(p, index) of 6"
          :key="index"
        >
          <div class="p-4 rounded-3xl animate-pulse bg-gray-100 border">
            <div
              class="
                animate-pulse
                bg-gray-500
                rounded-3xl
                h-44
                w-full
                flex flex-col
                justify-center
                items-center
              "
            >
              <div class="text-gray-800 text-3xl font-semibold">
                Loading Sebentar
              </div>
            </div>
            <div
              class="animate-pulse bg-gray-500 rounded-3xl h-4 mt-2 w-full"
            ></div>
            <div
              class="animate-pulse bg-gray-500 rounded-3xl h-4 mt-2 w-1/2"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!-- endskeleton -->

    <!-- konten -->
    <section class="md:px-10 px-4 mt-6">
      <div class="grid md:grid-cols-3 grid-cols-1 grid-flow-row gap-2 md:gap-4">
        <nuxt-link
          :to="'/baca-tulisan/' + tulisan.id"
          v-for="tulisan in tulisans"
          :key="tulisan.id"
        >
          <div class="bg-white p-5 rounded-3xl hover:border-gray-500 border">
            <!-- header card -->
            <div class="flex justify-items-center">
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
                <div class="w-full text-left text-gray-600 font-normal text-sm">
                  {{ tulisan.user.email }}
                </div>
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
    </section>
    <!-- endkonten -->
    <Cfooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tulisans: [],
      isLoading: true,
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      let resposne = await this.$axios.get('tulisan').then((res) => {
        this.tulisans = res.data.data
        this.isLoading = false
      })
    },
  },
}
</script>
