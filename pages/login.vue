<template>
  <section class="flex">
    <section class="xs:hidden lg:flex w-1/2 h-screen bg-blue-light items-center">
      <img src="~/assets/images/site-logo-shape-larged.svg" alt="Site Logo!" class="p-8">
    </section>
    <section class="xs:w-screen lg:w-1/2 h-screen flex justify-center items-center">
      <div class="flex flex-col justify-center items-center w-screen h-screen">
        <input-field
          field-label="Username" 
          field-name="username" 
          field-id="username"
        />
        <input-field 
          field-label="Password" 
          field-name="password" 
          field-id="password"
          field-type="password"
        />
        <div class="flex flex-col w-2/3 justify-center mt-4">
          <action-link 
            link-text="Login"
            link-address="/"
          />
        </div>
        <div class="mt-4 font-raleway">
          <nuxt-link to="/" class="text-grey-light text-sm">
            No Account? Signup!
          </nuxt-link>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import InputField from '@@/components/auth/InputField.vue'
import ActionLink from '@@/components/auth/ActionLink.vue'

export default {
  layout: 'auth',
  components: { InputField, ActionLink }
}
</script>
