<template>
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
    <div class="md:px-20 px-6 bg-white min-h-screen py-8">
      <div class="text-right md:w-1/2 md:mx-auto">
        <div class="text-4xl text-center font-bold mb-12">
          {{ response.bismillah.arab }}
        </div>
        <div
          class="text-3xl mb-16"
          v-for="(ayat, index) in response.ayahs"
          :key="index"
        >
          <div class="flex justify-end md:items-center">
            <div
              class="
                text-sm
                rounded-full
                p-2
                flex
                text-hijau-button
                md:justify-center md:items-center
                flex-col
                mr-4
              "
            >
              {{ ayat.number.inSurah }}
            </div>
            {{ ayat.arab }}
          </div>
          <div class="text-left text-xs md:text-base mt-4 md:mt-0 inline-block">
            {{ GetArabicNumber(ayat.translation) }}
          </div>
          <hr class="my-8" />
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
  async asyncData({ $axios, params }) {
    let response = await $axios.$get(
      'https://quran-api-id.vercel.app/surahs/' + params.id
    )
    return { response }
  },
  methods: {
    GetArabicNumber(number) {
      var charIndex = 0
      var NumericArabic = ''

      while (charIndex < number.length) {
        switch (number[charIndex]) {
          case '.':
            NumericArabic += '.'
            break

          case 0:
            NumericArabic += '٠'
            break

          case 1:
            NumericArabic += '١'
            break

          case 2:
            NumericArabic += '٢'
            break

          case 3:
            NumericArabic += '٣'
            break

          case 4:
            NumericArabic += '٤'
            break

          case '5':
            NumericArabic += '٥'
            break

          case '6':
            NumericArabic += '٦'
            break

          case '7':
            NumericArabic += '٧'
            break

          case '8':
            NumericArabic += '٨'
            break

          case '9':
            NumericArabic += '٩'
            break

          default:
            NumericArabic += number[charIndex]
            break
        }

        charIndex++
      }

      return NumericArabic
    },
  },
}
</script>
