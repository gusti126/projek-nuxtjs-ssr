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
