<template>
  <div class="search-box-wrapper">
    <input id="search-box" v-model="searchQuery" :placeholder="placeholder">
    <div :class="searchQuery ? 'visible' : 'hidden'" @click="searchQuery = null">
      <img class="icon icon-x" alt="icon-x" src="@/assets/close.svg" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  props: {
    value: {
      required: true,
      type: Array,
    },
    items: {
      required: true,
      type: Array,
    },
    placeholder: {
      type: String,
      default: 'Search after a product name',
    }
  },
  data() {
    return {
      searchQuery: null,
    }
  },
  computed: {
    resultQuery() {
      const items = [...this.items]
      if (this.searchQuery) {
        return items.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => item.name.toLowerCase().includes(v))
        })
      } else {
        return this.items;
      }
    }
  },
  watch: {
    searchQuery(newValue) {
      this.$emit('input', this.resultQuery)
      if(newValue) {
        this.$emit('search-query', newValue)
      } else {
        this.$emit('search-query', null)
      }
    },
  }
};
</script>
<style scoped>
.search-box-wrapper {
  position: relative;
  margin-top: 3rem;
}
#search-box {
  width: -webkit-fill-available;
  height: 2.5rem;
  padding: 0 1rem 0;
  border-radius: 1.25rem;
  border: 1px solid var(--white);
  transition: all .3s linear;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#search-box::placeholder {
  color: var(--navy-grey);
  font-size: 1rem;
}
#search-box:active, #search-box:focus {
  border: 1px solid var(--light-grey);
  outline: none;
}
.icon.icon-x {
  cursor: pointer;
  position: absolute;
<<<<<<< HEAD
=======
  transition: all .1s ease-in-out;
>>>>>>> c3455f7... build filters feature
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
}
</style>