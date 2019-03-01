<template>
  <section class="flex xs:flex-col lg:flex-row flex-1 justify-center items-center">
    <section class="flex flex-col xs:items-center xs:h-64 xs:justify-center xs:mb-20 lg:items-start lg:ml-20 lg:h-full lg:mb-0">
      <div class="xs:my-10 xs:text-3xl lg:my-0 w-2/3 md:text-4xl text-blue-dark font-raleway font-light">
        <p class="xs:text-center lg:text-left">
          Your bag is empty! Start by
          adding your first word
        </p>
      </div>
      <div class="mt-8">
        <nuxt-link
          class="px-6 py-3 bg-blue-light no-underline font-raleway text-white rounded shadow-md"
          to="/"
        >
          Add word
        </nuxt-link>
      </div>
    </section>
    <section class="xs:flex xs:justify-center h-full">
      <img
        src="~/assets/images/empty-bag.svg"
        alt="Empty Bag!"
        width="300"
        height="300"
        class="xs:w-1/2 xs:h-64 lg:w-3/5 lg:h-full"
      >
    </section>
  </section>
</template>

<script>
export default {}
</script>
