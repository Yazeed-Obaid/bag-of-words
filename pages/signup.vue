<template>
  <section class="flex">
    <section class="xs:w-screen lg:w-1/2 h-screen flex justify-center items-center">
      <div class="flex flex-col justify-center items-center w-screen h-screen">
        <input-field
          field-label="Full Name" 
          field-name="fullName" 
          field-id="fullName"
        />
        <input-field
          field-label="Email" 
          field-name="email" 
          field-id="email"
          field-type="email"
        />
        <input-field 
          field-label="Password" 
          field-name="password" 
          field-id="password"
          field-type="password"
        />
        <input-field 
          field-label="Confirm Password" 
          field-name="passwordConfirmation" 
          field-id="passwordConfirmation"
          field-type="password"
        />
        <div class="flex flex-col w-2/3 justify-center mt-4">
          <action-link 
            link-text="Signup"
            link-address="/"
          />
        </div>
        <div class="mt-4 font-raleway">
          <nuxt-link to="/" class="text-grey-light text-sm">
            Already Have an Account? Signin!
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="xs:hidden lg:flex w-1/2 h-screen bg-blue-light items-center">
      <img src="~/assets/images/word-shape-large.svg" alt="Site Logo!" class="p-8">
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
