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
      ],
    }
  },
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
