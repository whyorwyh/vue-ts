<template>
  <li class="todo-li">
    <Checkbox v-model="todo.isCompleted" size="large">
      <span  :class="[{completed: todo.isCompleted}, 'todo-name']">{{todo.name}}</span>
    </Checkbox>
    <Icon type="md-close" @click="handleRemove"/>
  </li>
</template>

<script lang="ts">
// import { Component, Prop, Vue } from 'vue-property-decorator';
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component({

})
export default class TodoItem extends Vue {
  // name: 'TodoItem',
  @Prop(String) currentView!: string;
  @Prop(Object) todo!: object;
  // props: {
  //   currentView: {
  //     type: String
  //   },
  //   todo: {
  //     type: Object
  //   }
  // },

  @Emit('remove')
  handleRemove () {}
  // methods: {
  //   handleRemove () {
  //     this.$emit('remove')
  //   }
  // }
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
  