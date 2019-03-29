<template>
  <div class="todo-footer">
  <div>{{remainCount}} {{remainCount | pluralize('item')}} left</div>
  <div>
    <router-link to="/" :class="[{active: !isActive && !isCompleted}, 'filter-item']">All</router-link>
    <router-link to="/active"  :class="[{active: isActive}, 'filter-item']">Active</router-link>
    <router-link to="/completed"  :class="[{active: isCompleted}, 'filter-item']">Completed</router-link>
  </div>
  <div @click="handleClearAll">clear completed</div>
  </div>
</template>
  
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

// import Componet from 'vue-class-component';
@Component({
  filters: {
    pluralize: (n: number, w: string): string => n === 0 || n === 1 ? w : w + 's'
  }
})
export default class TodoFooter extends Vue {
  // name: 'TodoFooter',
  @Prop(String) currentView!: string;

  @Prop(Number) remainCount!: number;
  // props: {
  //   currentView: {
  //     type: String
  //   },
  //   remainCount: {
  //     type: Number
  //   }
  // },
  get isActive() {
    return this.currentView === 'active'
  }
  get isCompleted () {
    return this.currentView === 'completed'
  }
  // computed: {
  //   isActive(): boolean {
  //     return this.currentView === 'active'
  //   },
  //   isCompleted(): boolean {
  //     return this.currentView === "completed";
  //   }
  // },
  // filters: {
  //   pluralize: (n: number, w: string): string => n === 1 ? w : w + 's'
  // }
  @Emit('clear-all')
  handleClearAll () {
    // this.$emit('clear-all')
  }
  // methods: {
  //   handleClearAll (): void {
  //     this.$emit('clear-all')
  //   }
  // }
}
</script>

<style scoped lang="less">
.todo-footer {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  .filter-item {
    padding: 0px 5px;
    margin-right: 5px;
  }
}
.active {
  border: 1px solid #cccccc;
  border-radius: 5px;

}

</style>
  