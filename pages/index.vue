<template>
  <div class="background-image-container">
    <VuetifyImage
      src="city.png"
      :width="$vuetify.breakpoint.smAndDown ? 100 : 200"
      class="ml-5"
    />
    <v-container fluid>
      <div class="d-flex justify-center">
        <Card
          :width="$vuetify.breakpoint.smAndDown ? 350 : 450"
          :height="$vuetify.breakpoint.smAndDown ? 450 : 550"
          cardClass="wrapper-login"
          color="cardBg"
          elevation="10"
          shaped
        >
          <template #content>
            <v-container>
              <v-card-title class="pa-0 display-1">Inicia sesión</v-card-title>
              <v-row class="pt-5">
                <v-col cols="12">
                  <TextField
                    filled
                    :color="$vuetify.theme.isDark ? white : black"
                    dense
                    v-model="email"
                    label="Email"
                    type="email"
                    @input="$v.$touch()"
                    :error-messages="errorHandler('email', errorData.email)"
                  />
                  <TextField
                    class="mt-n2"
                    :color="$vuetify.theme.isDark ? white : black"
                    filled
                    dense
                    v-model="password"
                    label="Contraseña"
                    type="password"
                    @input="$v.$touch()"
                    :error-messages="
                      errorHandler('password', errorData.password)
                    "
                  />
                </v-col>
                <v-col cols="12" class="py-0">
                  <Button
                    class="w-100 py-5 text-center"
                    text="Iniciar sesión"
                    @click="routeLogin"
                    nuxt
                  />
                </v-col>
                <v-col cols="12" align-self="end">
                  <Switchs
                    @updatedSwitch="switchTheme = $event"
                    inset
                    color="white"
                    label="Dark/Light theme"
                  />
                </v-col>
              </v-row>
            </v-container>
          </template>
        </Card>
      </div>
    </v-container>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import errorMultipleHandler from '~/mixins/errorHandler'
import colorVariables from '~/mixins/colorVariables'
export default {
  name: 'IndexPage',
  mixins: [errorMultipleHandler, validationMixin, colorVariables],
  data() {
    return {
      switchTheme: false,
      email: '',
      password: '',
      errorData: {
        email: [
          { name: 'required', message: 'Email es requerido' },
          {
            name: 'minLength',
            message: 'Email debe tener al menos 4 caracteres',
          },
          {
            name: 'maxLength',
            message: 'Email no puede tener mas de 50 caracteres',
          },
        ],
        password: [{ name: 'required', message: 'Contraseña es requerido' }],
      },
    }
  },
  validations: {
    email: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(50),
    },
    password: {
      required,
    },
  },

  methods: {
    routeLogin() {
      this.$v.$touch()
      if (this.$v.$error) return
      this.$router.push('/peliculas')
    },
  },
  watch: {
    switchTheme(newDarkMode) {
      this.$vuetify.theme.dark = newDarkMode
    },
  },
}
</script>
<style>
.background-image-container {
  height: 100vh;
  background-image: url('/peli.avif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
