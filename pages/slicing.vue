<template>
  <div class="bg-white">
    <!-- navbar -->
    <div
      class="
        bg-hijau-tokped
        text-white
        md:px-20
        py-4
        px-6
        flex
        justify-between
        items-center
      "
    >
      <img
        src="~/assets/image/logo-komfaktek.png"
        alt="logo"
        class="h-10 w-auto"
      />
      <div class="flex space-x-16 items-center">
        <nuxt-link to="#">
          <div class="text-lg">Learning</div>
        </nuxt-link>
        <nuxt-link to="#">
          <div class="text-lg">Community</div>
        </nuxt-link>
        <nuxt-link to="#">
          <div class="text-lg">Event</div>
        </nuxt-link>
        <nuxt-link to="#">
          <div
            class="
              bg-hijau-button
              hover:bg-hijau-header
              text-base
              px-10
              py-2
              rounded-lg
            "
          >
            Login
          </div>
        </nuxt-link>
      </div>
    </div>
    <!-- endnavbar -->

    <!-- hero -->
    <div
      class="
        bg-hero-pattern-tokped
        h-600px
        bg-cover bg-no-repeat bg-bottom
        md:px-20
        py-4
        pb-16
        px-6
      "
    >
      <div class="text-green-400 text-center pt-12 text-2xl font-medium">
        TOKOPEDIA ACADEMY
      </div>
      <div class="text-5xl text-center text-white font-semibold mt-6">
        Learning ground for the future <br />
        digital talents
      </div>
      <div class="text-gray-400 text-center mt-4 w-1/2 mx-auto">
        Tokopedia Academy connect people in the community, and provide learning
        access for everyone through a carefully selected curriculum, mentoring
        sessions, expert trainers and contributors from the industry.
      </div>
    </div>
    <!-- endhero -->

    <div class="px-56 -mt-56">
      <div class="aspect-w-16 aspect-h-9 rounded-xl">
        <iframe
          src="https://www.youtube.com/embed/r9jwGansp1E"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="rounded-xl"
        ></iframe>
      </div>
    </div>
    <div class="text-center my-10 text-xl text-gray-500">
      Sponsored by beloved partners
    </div>
    <div class="px-20 grid grid-flow-row grid-cols-12 gap-8">
      <div class="col-span-6">
        <div class="text-4xl font-semibold text-gray-700">
          Grow in community with people who share the same vision
        </div>
        <div class="text-gray-500 mt-3">
          Our community is made up of people who are driven to make a better
          future and make a positive impact togeth
        </div>
      </div>
      <div class="col-span-6">
        <img src="~/assets/circle-hmi.png" class="" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
