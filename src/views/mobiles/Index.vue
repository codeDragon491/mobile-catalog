<template>
  <div id="catalog-page">
    <cart />
    <h1>Mobilephones</h1>
    <p>
      Here you can see our large selection of mobile phones.<br>
      You always get a screen change when you buy your mobile with a subscription.
    </p>
    <section class="actions-section">
      <search @search-query="setQuery" :items="mobilesStatic" v-model="mobiles" />
      <main-filters :filters="filtersData" :items="mobilesStatic" v-model="mobiles" />
    </section>
    <section class="mobiles-section">
      <div class="mobile-card"
        v-for="mobile in mobiles"
        :key="mobile.id"
        @click="goToDetail(mobile)"
      >
        <p class="title" :inner-html.prop="mobile.name | highlight(searchQuery)">{{ mobile.name }}</p>
        <p class="memory">{{ mobile.memory }}</p>
        <div class="image"
          :style="{ backgroundImage: `url(${mobile.image})` }"
        />
        <p class="price">{{ mobile.price }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import {mockData} from '@/data/mockData.js'
export default {
  name: 'Catalog',
  components: {
    Search: () => import(/* webpackMode: "eager" */ '@/components/Search.vue'),
    MainFilters: () => import(/* webpackMode: "eager" */ '@/components/MainFilters.vue'),
    Cart: () => import(/* webpackMode: "eager" */ '@/components/Cart.vue')
  },
  data () {
    return {
      mobilesStatic: mockData,
      mobiles: mockData,
      searchQuery: null,
      filtersData: ['Apple', 'Samsung', '64 GB', '128 GB', '256 GB', '512 GB', '1 TB', '5G']
    }
  },
  computed: {
    mobileNameFormatted() {
      return this.mobile.name.replace(/\s+/g, '-')
    }
  },
  filters: {
    highlight: (word, query) => {
      const check = new RegExp(query, "ig")
      return word.toString().replace(check, function(matchedText) {
        return ('<span class=\'highlight\'>' + matchedText + '</span>')
      })
    }
  },
  methods: {
    setQuery(query) {
      this.searchQuery = query
    },
    goToDetail(mobile) {
      const mobileNameFormatted = mobile.name.replace(/\s+/g, '-')
      const memoryFormatted = mobile.memory.replace(/\s+/g, '-')
      this.$router.push({ name: 'Detail', params: { name: mobileNameFormatted, memory: memoryFormatted, id: mobile.id }})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#catalog-page {
  margin: 5rem 2rem;
  text-align: center;
}
.actions-section{
  width: 100%;
  margin: 0 auto;
}
.mobiles-section {
  @include margin-xl-0;
  @include grid-one-column(2rem);
  grid-column-gap: 2rem;
  justify-content: center;
}
.mobile-card {
  cursor: pointer;
  @include background-border-color(--white, --white);
  border-radius: $size-lg;
  transition: all .3s linear;
  @include flex-column-center
}
.mobile-card:hover {
  border: 1px solid var(--light-grey);
}
.image {
  height: 285px;
  width: 180px;
  @include background-center-no-repeat(75%);
}
.title {
  margin: 1.875rem 0 0.5rem;
}
.memory {
  font-size: $size-small;
  margin: 0 0 1rem;
}
.price {
  margin-top: 1rem;
  font-size: $size-lg;
}
@media screen and (min-width: 768px) {
  .mobiles-section {
    grid-template-columns: repeat(auto-fill, 240px);
  }
  .actions-section{
    width: 80%;
  }
}
@media screen and (min-width: 1024px) {
  .mobiles-section {
    margin: 3rem 0;
  }
}
@media screen and (min-width: 1280px) {
  #catalog-page {
    margin: 5rem 15rem;
  }
}
</style>
