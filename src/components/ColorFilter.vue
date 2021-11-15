<template>
  <div class="colors-wrapper">
    <div
      :class="`${color.value === filterChoosen ? 'active' : ''} dot-background`"
      v-for="(color,index) in filterData"
      :key="index"
      @click="setFilter(color.value)"
    ><div class="color-dot" :style="{ backgroundColor: color.value }"></div>
        <p :class="`${color.value === filterChoosen ? 'visible' : 'hidden'} title`">
            {{ color.title }}
        </p>
    </div>
  </div>
</template>
<script>
import { FilterScript } from '@/mixins/FilterScript'
export default {
  name: 'ColorFilter',
  mixins: [FilterScript]
}
</script>
<style scoped>
.colors-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.color-dot, .dot-background {
  cursor: pointer;
  color: var(--navy-grey);
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: 1.5rem 1rem 1rem 0;
}
.dot-background {
  position: relative;
  background-color: var(--creme);
  border: 1px solid var(--creme);
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.color-dot {
  position: absolute;
  margin: 0;
}
.dot-background:hover, .active {
  border: 1px solid var(--light-grey);
}
.title {
  text-transform: capitalize;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 46px;
}
</style>