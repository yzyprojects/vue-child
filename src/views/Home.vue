<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import $r from '@common/retrieve-data'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return{}
  },
  created() {
    let data = {
      child:[
        {childs:[{name:'aaaa'}]}
      ]
    }
    let res = $r('data.child[0].childs[0].name', data)
    console.log('====res:', res)
  },
  mounted () {

  },
  methods: {

  }
}
</script>
