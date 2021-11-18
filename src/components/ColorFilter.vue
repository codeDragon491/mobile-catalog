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
<style lang="scss" scoped>
.colors-wrapper {
  @include flex-center-wrap;
}
.color-dot {
  cursor: pointer;
  color: var(--navy-grey);
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  margin: 0;
}
.dot-background {
  @extend .color-dot;
  position: relative;
  @include background-border-color;
  width: 50px;
  height: 50px;
 @include margin-dot;
  @include flex-center;
  &:hover, &.active {
    border: 1px solid var(--light-grey); 
  }
}
.title {
  text-transform: capitalize;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 46px;
}
</style>