<template>
  <div class="memory-filter-wrapper">
    <div
      :class="`${memory === filterChoosen ? 'active' : ''} dot-background`"
      v-for="( memory, index ) in filterData"
      :key="index"
      @click="setFilter(memory)"
    >
        <p class="title">
          {{ memory }}
        </p>
    </div>
  </div>
</template>
<script>
import { FilterScript } from '@/mixins/FilterScript'
export default {
  name: 'MemoryFilter',
  mixins: [FilterScript]
}
</script>
<style scoped>
.memory-filter-wrapper {    
  display: flex;
  align-items: center;
}
.dot-background {
  border-radius: 50%;
  margin: 1.5rem 1rem 1rem 0;
  cursor: pointer;
  color: var(--navy-grey);
  background-color: var(--creme);
  border: 1px solid var(--creme);
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dot-background:hover, .active {
  border: 1px solid var(--light-grey);
}
.title {
  text-transform: capitalize;
}
</style>