<template>
  <div>
    <!-- navbar bottom mobile -->

    <div
      class="
        container
        justify-between
        fixed
        bottom-0
        bg-white
        mx-auto
        lg:px-10
        py-1
        px-2
        text-center
        shadow-sm
        md:hidden
        z-40
      "
    >
      <div class="mb-1">
        <input
          type="text"
          v-model="amountFund"
          class="border border-green-500 w-full rounded-lg px-2 py-1"
        />
        <div class="text-left font-medium">Rp.{{ amountFund | currency }}</div>
      </div>

      <div
        @click="createFund"
        class="w-full block rounded-lg bg-green-500 text-white font-medium py-2"
      >
        Fund
      </div>
    </div>

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
      </div>
      <div class="md:-mt-40 md:px-10">
        <div
          class="
            grid
            lg:grid-cols-4
            md:grid-cols-6
            grid-cols-1 grid-flow-row
            gap-2
            md:gap-4 md:px-0
          "
        >
          <div
            class="
              lg:col-span-3
              col-span-4
              md:bg-white md:p-8
              p-0
              md:rounded-2xl
            "
          >
            <div>
              <img
                :src="item.thumbnail"
                alt="ok"
                class="w-full md:rounded-2xl"
              />
            </div>

            <!-- deskripsi -->
            <div class="my-4 px-3 md:px-0">
              <!-- title atau name -->
              <div
                class="text-green-900 font-semibold text-xl md:text-3xl mt-2"
              >
                {{ item.judul }}
              </div>
              <!-- location -->
              <div class="flex items-center my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="md:h-5 md:w-5 h-4 w-4 text-green-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div class="text-gray-600 md:text-sm">{{ item.kota }}</div>
                <div class="ml-auto flex">
                  <div class="ml-7">
                    <a href="">
                      <img
                        src="~/assets/image/icon/fa-solid_share.svg"
                        alt="Share"
                        class="w-6"
                      />
                    </a>
                  </div>
                  <div class="ml-7">
                    <a href="">
                      <img
                        src="~/assets/image/icon/logos_whatsapp.svg"
                        alt="Share"
                        class="w-6"
                      />
                    </a>
                  </div>
                  <div class="ml-7">
                    <a href="">
                      <img
                        src="~/assets/image/icon/bi_facebook.svg"
                        alt="Share"
                        class="w-6"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <!-- progresbar -->

              <div class="w-full bg-green-300 mt-2 rounded-full">
                <div
                  class="
                    bg-hijau-button
                    leading-none
                    py-1
                    md:h-5
                    font-medium
                    text-center text-white
                    rounded-full
                  "
                  style="width: 50%"
                >
                  50%
                </div>
              </div>
              <div class="mt-2 flex">
                <div class="font-medium md:text-base">50%</div>
                <div class="font-medium md:text-base text-right w-full">
                  Rp. {{ item.goal_amount | currency }}
                </div>
              </div>
              <!-- end profressbar -->
            </div>

            <div class="px-3 md:px-0">
              {{ item.deskripsi }}
            </div>
          </div>
          <div class="col-span-4 lg:col-span-1 px-3 md:px-0">
            <div class="bg-white p-4 rounded-2xl sticky top-4">
              <div class="flex">
                <div>
                  <img
                    src="https://photo.jpnn.com/arsip/normal/2019/06/30/adipati-dolken-foto-imam-huseinjawa-pos.jpg"
                    alt="ok"
                    class="
                      rounded-full
                      h-16
                      w-16
                      border border-green-500
                      p-1
                      object-cover
                    "
                  />
                </div>
                <div class="ml-2 my-auto">
                  <div class="font-semibold text-base">Adipati Dolken</div>
                  <div class="font-normal text-base text-gray-600">Aktor</div>
                </div>
              </div>
              <div class="mt-4 flex">
                <div class="font-semibold">Status Verifikasi</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-green-600 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div class="mt-4 flex">
                <div class="font-semibold">Berkas</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-green-600 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <a href="">
                <div class="mt-4 flex hover:bg-green-500 hover:text-white">
                  <div class="font-semibold">Proposal</div>
                  <div class="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 bg-green-600 text-white rounded-full p-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </div>
                </div>
              </a>
              <a href="">
                <div class="mt-4 flex hover:bg-green-500 hover:text-white">
                  <div class="font-semibold">Data Diri</div>
                  <div class="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 bg-green-600 text-white rounded-full p-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </div>
                </div>
              </a>
              <a href="">
                <div class="mt-4 flex hover:bg-green-500 hover:text-white">
                  <div class="font-semibold">Document Lain</div>
                  <div class="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 bg-green-600 text-white rounded-full p-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </div>
                </div>
              </a>

              <!-- input amount -->
              <div class="mt-4 rounded-full hidden md:block">
                <input
                  type="text"
                  placeholder="amount Rp."
                  v-model="amountFund"
                  class="
                    border-2 border-gray-400
                    w-full
                    rounded-full
                    focus:outline-none
                    focus:ring-2
                    focus:ring-hijau-button
                    focus:border-transparent
                    focus:text-green-700
                    px-4
                  "
                />
                <div class="font-medium pl-4">
                  Rp.{{ amountFund | currency }}
                </div>
              </div>
              <div class="mt-4 hidden md:block">
                <button
                  class="
                    bg-hijau-button
                    py-1
                    w-full
                    rounded-full
                    text-white
                    font-medium
                  "
                  @click="createFund"
                >
                  Fund
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- endheader -->

    <!-- donatur -->
    <section
      class="container md:px-10 px-2 mt-10 bg-white py-8 pb-36 md:pb-8 mb-10"
    >
      <div class="text-lg font-semibold">Do'a Orang Baik</div>
      <div class="mb-4 text-base text-gray-700 font-normal">
        Jadilah bagian Orang Baik
      </div>
      <div class="grid lg:grid-cols-12 grid-cols-1 grid-flow-row gap-4">
        <div class="col-span-4">
          <div class="border border-green-200 p-2 rounded-lg">
            <div class="flex">
              <div>
                <img
                  src="https://www.minews.id/wp-content/uploads/2020/08/Screenshot_50-1.jpg"
                  alt=""
                  class="h-10 w-10 object-cover rounded-full mr-1"
                />
              </div>
              <div class="font-medium text-lg my-auto">Adipati Dolken</div>
            </div>

            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div class="col-span-4">
          <div class="border border-green-200 p-2 rounded-lg">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div class="font-medium text-lg my-auto">Orang Baik</div>
            </div>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            quisquam eligendi ex natus voluptatem maiores temporibus repudiandae
            consequatur, quo libero sunt distinctio deserunt voluptates
            voluptate similique accusantium maxime dicta sed.
          </div>
        </div>
        <div class="col-span-4">
          <div class="border border-green-200 p-2 rounded-lg">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div class="font-medium text-lg my-auto">Orang Baik</div>
            </div>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            quisquam eligendi ex natus voluptatem maiores temporibus repudiandae
            consequatur, quo libero sunt distinctio deserunt voluptates
            voluptate similique accusantium maxime dicta sed.
          </div>
        </div>
      </div>
      <div class="text-center mt-8">
        <a href="" class="bg-hijau-button rounded-full text-white px-6 py-2">
          Load More
        </a>
      </div>
    </section>
    <!-- enddonatur -->
    <Cfooter />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.item.judul + ' | HMI Komfaktek Melangkah Peduli Umat',
      meta: [
        {
          name: 'description',
          content: this.item.deskripsi,
        },
        {
          name: 'title',
          content: this.item.judul + ' | HMI Komfaktek Melangkah Peduli Umat',
        },
        {
          itemprop: 'title',
          name: 'title',
          content: this.item.judul + ' | HMI Komfaktek Melangkah Peduli Umat',
        },
        {
          name: 'og:title',
          property: 'og:title',
          content: this.item.judul + ' | HMI Komfaktek Melangkah Peduli Umat',
        },
        {
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
          name: 'og:image',
          property: 'og:image',
          content: this.item.thumbnail,
        },
        {
          name: 'image',
          property: 'image',
          content: this.item.thumbnail,
        },
        {
          name: 'instagram:title',
          property: 'instagram:title',
          content: 'instagram title' + this.item.judul,
        },
        {
          name: 'instagram:card',
          property: 'instagram:card',
          content: 'article',
        },
        {
          name: 'image',
          itemprop: 'image',
          content: this.item.thumbnail,
        },
        {
          name: 'description',
          itemprop: 'description',
          content: this.item.deskripsi,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: this.item.deskripsi,
        },
        {
          name: 'og:description',
          itemprop: 'og:description',
          content: this.item.deskripsi,
        },
      ],
    }
  },
  data() {
    return {
      item: [],
      amountFund: null,
    }
  },
  mounted() {
    this.getDetailGalangDana()
  },

  methods: {
    async getDetailGalangDana() {
      let data = this.$axios
        .get('galang-dana/' + this.$route.params.id)
        .then((ress) => {
          this.item = ress.data.data
        })
    },

    async createFund() {
      if (this.amountFund < 10000) {
        this.$swal({ text: 'Maaf kita baru bisa transaksi minimal 10.000' })
        return
      }
      let data = this.$axios
        .post('donasi/create', {
          fund_id: this.$route.params.id,
          current_amout: this.amountFund,
        })
        .then((ress) => {
          console.log(ress.data.data.snap_url)
          window.location.replace(ress.data.data.snap_url)
        })
    },
  },

  watch: {
    amountFund(val) {
      // console.log(val)
      // let tes = new Intl.NumberFormat(['ban', 'id']).format(val)
      // this.amountFund = tes
    },
  },
}
</script>
