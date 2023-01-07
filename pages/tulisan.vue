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
      <div class="container md:-mt-40 md:px-10 mt-2 z-40">
        <div class="owl-carousel owl-theme">
          <div class="item">
            <img
              src="~/assets/image/carousel-tulisan1.svg"
              alt="tulisan"
              class=""
            />
          </div>
        </div>
      </div>
    </section>
    <!-- endhedaer -->

    <!-- filter -->
    <section class="container md:px-10 px-2">
      <div class="flex mt-4">
        <div class="my-auto md:my-0">
          <input
            type="text"
            class="
              md:h-8
              border border-gray-400
              rounded-xl
              focus:outline-none
              focus:ring-2
              focus:ring-hijau-button
              focus:border-transparent
              focus:text-green-800
              px-4
              md:w-96
              w-64
            "
          />
        </div>
        <div class="hidden">
          <select
            name="kategori"
            id=""
            class="
              h-8
              border border-gray-400
              rounded-xl
              focus:outline-none
              focus:ring-2
              focus:ring-hijau-button
              focus:text-green-800
              text-gray-800
              focus:border-transparent
              md:w-32
              w-10
              px-4
              ml-4
            "
          >
            <option value="">All</option>
            <option value="">Puisi</option>
            <option value="">Sejarah</option>
            <option value="">Politik</option>
          </select>
        </div>
        <div class="hidden md:block">
          <select
            name="kategori"
            id=""
            class="
              h-8
              border border-gray-400
              rounded-xl
              focus:outline-none
              focus:ring-2
              focus:ring-hijau-button
              focus:text-green-800
              text-gray-800
              focus:border-transparent
              w-32
              px-4
              ml-4
            "
          >
            <option value="">All</option>
            <option value="">Puisi</option>
            <option value="">Sejarah</option>
            <option value="">Politik</option>
          </select>
        </div>
        <div class="my-auto">
          <a
            href=""
            class="
              md:rounded-full
              rounded-full
              bg-hijau-button
              md:shadow-hijau-hmi2
              hover:bg-hijau-header
              md:px-10
              px-4
              py-1
              md:text-lg md:ml-6
              ml-2
              text-white
              w-full
              block
              text-center
            "
            >Cari</a
          >
        </div>
      </div>
    </section>
    <!-- endfilter -->
    <!-- konten -->
    <section class="container md:px-10 px-2 mt-6">
      <div class="grid md:grid-cols-3 grid-cols-1 grid-flow-row gap-2 md:gap-4">
        <a
          href="detailartikel.html"
          v-for="tulisan in tulisans"
          :key="tulisan.id"
        >
          <div
            class="
              bg-white
              p-5
              shadow-lg
              rounded-3xl
              hover:border-gray-500
              border
            "
          >
            <!-- header card -->
            <div class="flex">
              <div class="">
                <img
                  :src="tulisan.user.profile_photo_url"
                  alt=""
                  class="rounded-full w-14 h-12 object-cover object-center"
                />
              </div>
              <div class="ml-4 w-full">
                <div class="text-lg font-medium">{{ tulisan.user.name }}</div>
                <div class="flex w-full">
                  <div
                    class="
                      w-full
                      d-none
                      text-right text-gray-600
                      font-normal
                      text-sm
                    "
                  >
                    Pamulang
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5">
              <div>
                <img
                  :src="
                    'https://komfaktek.m-andreansaefudin.com/' + tulisan.image
                  "
                  alt=""
                  class="rounded-2xl w-full h-48 object-cover"
                />
              </div>
              <div class="mt-2 text-lg font-semibold">
                {{ tulisan.judul }}
              </div>
              <div class="flex mt-2">
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
                <div class="ml-1 text-gray-700">100</div>
                <div class="ml-1 text-gray-700 w-full text-right">
                  22/09/2020
                </div>
              </div>
            </div>
          </div>
        </a>
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
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      let resposne = await this.$axios.get('tulisan').then((res) => {
        this.tulisans = res.data.data
      })
    },
  },
}
</script>
