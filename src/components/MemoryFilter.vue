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
<style lang="scss" scoped>
.memory-filter-wrapper {    
  @include flex-center-wrap;
}
.dot-background {
  border-radius: 50%;
 @include margin-dot;
  cursor: pointer;
  color: var(--navy-grey);
  @include background-border-color;
  width: 80px;
  height: 80px;
  @include flex-center;
  &:hover, &.active {
    border: 1px solid var(--light-grey);
  }
}
.title {
  text-transform: capitalize;
}
</style>