<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>{{ message }}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <HelloWorld msg="Vue 2 + TypeScript + Vuetify 프로젝트에 오신 것을 환영합니다!" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  message = 'Vue 2 + TypeScript + Vuetify'
}
</script>
