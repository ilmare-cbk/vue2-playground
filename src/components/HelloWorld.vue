<template>
  <v-card>
    <v-card-title class="text-h5">
      {{ msg }}
    </v-card-title>
    <v-card-text>
      <p>이 프로젝트는 Vue 2.6.14, TypeScript 4.1.6, Vuetify 2.6.14로 구성되어 있습니다.</p>
      <v-btn color="primary" class="mt-4"> Vuetify 버튼 예제 </v-btn>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop({ required: true })
  msg!: string
}
</script>
