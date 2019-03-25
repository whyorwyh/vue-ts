<template>
    <div>
    <div>{{remainCount}} item left</div>
    <div>
      <span :class="{active: currentView=== 'all'}">All</span>
      <span :class="{active: currentView=== 'active'}">Active</span>
      <span :class="{active: currentView=== 'completed'}">Completed</span>
    </div>
    <div>clear completed</div>
    </div>
  </template>
  
  <script lang="ts">
  // import { Component, Prop, Vue } from 'vue-property-decorator';
  
  export default {
    name: 'TodoFooter',
    props: {
      currentView: {
        type: String
      }
    },
    data () {
      return {
        remainCount: 0
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  