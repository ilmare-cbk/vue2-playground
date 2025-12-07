<template>
  <div>
    <HelloWorld msg="Vue 2 + TypeScript + Vuetify 프로젝트에 오신 것을 환영합니다!" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld
  }
})
export default class SamplePage extends Vue {}
</script>
