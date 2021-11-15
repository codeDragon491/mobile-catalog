export const FilterScript = { 
  props: {
    value: {
      required: true,
      type: String,
    },
    filterData: {
      type: Array,
      required: true,
    },
  },
    data () {
      return {
        filterChoosen: null,
      }
    },
    watch: {
      filterChoosen() {
        this.$emit('input', this.filterChoosen)
      },
    },
    methods: {
      setFilter(value) {
        this.filterChoosen = value
       }
    },
}