<template>
  <div class="todoApp">
    <Input v-model="todoEvent" placeholder="请输入待办事项" @keyup.enter.native="handleEnter"/>
    <ul  class="todo-list">
      <template v-for="(todo, index) in showTodoList">
        <todo-item :todo="todo" @completed="handleCompleted(index)" @remove="handleRemove(index)"></todo-item>
      </template>
    </ul>
    <todo-footer></todo-footer>
  </div>
</template>

<script lang="ts">
import TodoFooter from './TodoFooter.vue'
import TodoItem from './TodoItem.vue'
// import { Component, Prop, Vue } from 'vue-property-decorator';

export default {
  name: 'TodoApp',
  components: {
    TodoFooter,
    TodoItem
  },
  props: {
    currentView: {
      type: String
    }
  },
  data () {
    return {
      todoEvent: '',
      allTodoList: [],
      showTodoList: []
    }
  },
  watch: {
    allTodoList: {
      handler: function () {
        this.showTodoList = this.allTodoList
      }
    }
  },
  methods: {
    handleRemove (index) {
      this.allTodoList.splice(index, 1)
    },
    handleCompleted (index) {
      this.allTodoList[index].isCompleted = !this.allTodoList[index].isCompleted
    },
    handleEnter () {
      if (this.todoEvent === '') {
        this.$Message.info('输入框不能为空！')
        return false
      }
      this.allTodoList.push({
        name: this.todoEvent,
        isCompleted: false
      })
      this.todoEvent = ''
    }
  }
}
</script>

<style scoped lang="less">
.todoApp {
  width: 40%;;
  margin: 20px auto;
  .todo-list {
    list-style: none;
    text-align: left;
    margin-top: 10px;
    font-size: 16px;
  }
}
</style>
