<template>
  <li class="todo-li">
    <Checkbox v-model="todo.isCompleted" size="large" @on-change="handleChange">
      <!-- <input  v-model:checked="todo.isCompleted" type="checkbox"/> -->
      <span  :class="[{completed: todo.isCompleted}, 'todo-name']">{{todo.name}}</span>
    </Checkbox>
    <Icon type="md-close" @click="handleRemove"/>
  </li>
</template>

<script lang="ts">
// import { Component, Prop, Vue } from 'vue-property-decorator';

export default {
  name: 'TodoItem',
  props: {
    currentView: {
      type: String
    },
    todo: {
      type: Object
    }
  },
  data () {
    return {
      todoObj: {}
    }
  },
  watch: {
    todo: {
      handler (value) {
        // console.log(value)
        this.todoObj = { ...value }
      },
      deep: true,
      immediate: true
    }
    // todoObj: {
    //   handler (value) {
    //     this.$emit('changeIsCompleted')
    //   }
    // }
  },

  methods: {
    handleChange (value) {
      console.log('handleChange', value)
      // this.$emit('toggleCompleted')
      // console.log('handleChange')
    },
    handleRemove () {
      this.$emit('remove')
    }
  }
}
</script>

<style scoped lang="less">

.todo {
  &-li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    margin-bottom: 10px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    &:hover {
      background: blue;
      background: #e5f2ff;
    }
    &-name {
      font-size: 16px;
    }
    .completed {
      text-decoration: line-through;
      color: #cccccc;
    }
  }
}
</style>
  