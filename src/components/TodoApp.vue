<template>
  <div class="todoApp">
    <Checkbox v-model="isSelectAll" size="large" @on-change="handleSelectAll"></Checkbox>
    <Input v-model="todoEvent" placeholder="请输入待办事项" @keyup.enter.native="handleEnter"/>
    <ul  class="todo-list">
      <todo-item  v-for="(todo, index) in showTodoList"  :key="index" :todo="todo" @remove="handleRemove(index)"></todo-item>
    </ul>
    <todo-footer :remainCount="remaining.length" :currentView="currentView" @clear-all="handleClearAll"></todo-footer>
  </div>
</template>

<script lang="ts">
import TodoFooter from './TodoFooter.vue'
import TodoItem from './TodoItem.vue'
import {RouteViews, Todo} from '../models'
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component({
  components: {
    TodoFooter,
    TodoItem
  }
})
export default class TodoApp extends Vue {
  // name: 'TodoApp',
  // components: {
  //   TodoFooter,
  //   TodoItem
  // },
  @Prop(String) currentView!: string
  // props: {
  //   currentView: {
  //     type: String
  //   }
  // },
  todoEvent = ''
  allTodoList = [ { isCompleted: false, name: 'Use Vue with TypeScript' } ]
  isSelectAll = false
  // data () {
  //   return {
  //     todoEvent: '',
  //     allTodoList: [ { isCompleted: false, name: 'Use Vue with TypeScript' } ],
  //     isSelectAll: false
  //   }
  // },
  get showTodoList(): Todo[]  {
    switch (this.currentView) {
        case 'completed':
          return this.completed
        case 'active':
          return this.remaining
        case 'all':
        default:
          return this.allTodoList
      }
  }
  get remaining(): Todo[] {
    return this.allTodoList.filter(this.isNotCompleted)
  }
  get completed(): Todo[] {
    return this.allTodoList.filter(this.isCompleted)
  }
  // computed: {
  //   showTodoList (): Todo[] {
  //     switch (this.currentView) {
  //       case 'completed':
  //         return this.completed
  //       case 'active':
  //         return this.remaining
  //       case 'all':
  //       default:
  //         return this.allTodoList
  //     }
  //   },
  //   remaining (): Todo[] {
  //     return this.allTodoList.filter(this.isNotCompleted)
  //   },
  //   completed (): Todo[] {
  //     return this.allTodoList.filter(this.isCompleted)
  //   }
  // },
   handleSelectAll () {
    const stateForAll = this.completed.length !== this.allTodoList.length

    for (const todo of this.allTodoList) {
      todo.isCompleted = stateForAll
    }
  }
  handleClearAll () {
    this.allTodoList = []
  }
  isCompleted (item: Todo) {
    return item.isCompleted
  }
  isNotCompleted (item: Todo) {
    return !item.isCompleted
  }
  handleRemove (index: number) {
    this.allTodoList.splice(index, 1)
  }
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
  // methods: {
  //   handleSelectAll () {
  //     const stateForAll = this.completed.length !== this.allTodoList.length

  //     for (const todo of this.allTodoList) {
  //       todo.isCompleted = stateForAll
  //     }
  //   },
  //   handleClearAll () {
  //     this.allTodoList = []
  //   },
  //   isCompleted (item: Todo) {
  //     return item.isCompleted
  //   },
  //   isNotCompleted (item: Todo) {
  //     return !item.isCompleted
  //   },
  //   handleRemove (index: number) {
  //     this.allTodoList.splice(index, 1)
  //   },
  //   handleEnter () {
  //     if (this.todoEvent === '') {
  //       this.$Message.info('输入框不能为空！')
  //       return false
  //     }
  //     this.allTodoList.push({
  //       name: this.todoEvent,
  //       isCompleted: false
  //     })
  //     this.todoEvent = ''
  //   }
  // }
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
