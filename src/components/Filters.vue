<template>
  <div class="filters-wrapper">
    <div
      :class="`${filter === filterChoosen ? 'active' : ''} filter`"
      v-for="(filter,index) in filters"
      :key="index"
      @click="setFilter(filter)"
    >
        {{ filter }}
        <span v-if="filter === filterChoosen" :class="filter === filterChoosen ? 'visible' : 'hidden'" @click.stop="filterChoosen = null">
            <img class="icon icon-x" src="@/assets/close-light.svg" />
        </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Filters',
  props: {
     value: {
      required: true,
      type: Array,
    },
    filters: {
      type: Array,
      required: true,
    },
    items: {
      required: true,
      type: Array,
    },
  },
  data () {
    return {
      filterChoosen: null,
    }
  },
  computed: {
    resultFilter() {
      const items = [...this.items]
      if (this.filterChoosen) {
        return items.filter(item => {
          return item.name.toLowerCase().includes(this.filterChoosen.toLowerCase()) || 
            item.memory.toLowerCase().includes(this.filterChoosen.toLowerCase()) 
        })
      } else {
        return this.items;
      }
    }
  },
  watch: {
    filterChoosen() {
      this.$emit('input', this.resultFilter)
    },
  },
  methods: {
    setFilter(filter) {
      this.filterChoosen = filter
    }
  },
}
</script>
<style scoped>
.filters-wrapper {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.filter {
  cursor: pointer;
  border: 1px solid var(--medium-purple);
  color: var(--medium-purple);
  font-size: 0.93rem;
  border-radius: 1.25rem;
  margin: 1rem 1rem 0 0;
  padding: 0.5rem 1rem;
  min-width: 81px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.filter:hover, .active {
 background-color: var(--medium-purple);
 color: var(--white);
}
.icon.icon-x {
  display: block;
}
@media screen and (min-width: 768px) {
  .filters-wrapper {
    justify-content: flex-start;
  }
  .filter {
    margin-top: 1.5rem;
  }
}
</style>