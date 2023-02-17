<template>
  <div class="">
    <navmobile />
    <!-- header background and nav -->
    <div class="">
      <div
        class="
          bg-center bg-cover
          sm:bg-left-top
          lg:bg-center
          bg-hijau-header
          hidden
          md:block
        "
      >
        <navbar />

        <!-- <div class="conatiner px-2 md:px-10 md:mt-20 h-32"></div> -->
      </div>
    </div>
    <!-- endheader background and nav -->
    <div class="px-6 md:px-32 py-6">
      <div class="grid grid-flow-row grid-cols-12 gap-4 md:gap-6">
        <div
          class="
            md:col-span-4
            col-span-12
            w-full
            p-6
            rounded-lg
            bg-white
            border
          "
          v-for="surah in tempData"
          :key="surah.number"
        >
          <nuxt-link :to="'/surah/' + surah.number">
            <div class="flex justify-between items-center">
              <div class="">
                <div class="text-xl font-medium">{{ surah.name }}</div>
                <div class="text-gray-500">{{ surah.translation }}</div>
              </div>
              <div
                class="
                  bg-hijau-button
                  text-white
                  p-4
                  py-2
                  rounded-lg
                  text-center
                "
              >
                {{ surah.numberOfAyahs }}
                <div class="text-center text-xs">Ayat</div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Al-Qur'an Online ",
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          itemprop: 'image',
          content: 'https://www.hmikomfaktek.com/logo-komfaktek.png',
        },
        {
          hid: 'image',
          name: 'image',
          itemprop: 'image',
          property: 'image',
          content: 'https://www.hmikomfaktek.com/logo-komfaktek.png',
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
          content: 'https://www.hmikomfaktek.com/logo-komfaktek.png',
        },
        {
          name: 'description',
          itemprop: 'description',
          content:
            "Al-Qur'an Online Terjemahan Bahasa Indonesia| HMI Komfaktek Melangkah Maju ",
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            " Al-Qur'an Online Terjemahan bahasa Indonesia| HMI Komfaktek Melangkah Maju ",
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: "Al-Qur'an Online",
        },
      ],
    }
  },
  data() {
    return {
      tempData: [],
    }
  },
  methods: {
    async fetchData() {
      await this.$axios
        .get('https://quran-api-id.vercel.app/surahs')
        .then((res) => {
          this.$store.commit('setLoading', false)
          this.tempData = res.data
        })
    },
  },

  mounted() {
    this.$store.commit('setLoading', true)
    this.fetchData()
  },
}
</script>
