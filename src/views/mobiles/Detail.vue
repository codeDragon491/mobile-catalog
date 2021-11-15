<template>
  <div id="detail-page">
    <article class="detail-left-article">
      <div class="card">
        <h1 class="left-title">{{ mobile.name }}</h1>
        <div class="image"
          :style="{ backgroundImage: `url(${getImage()})` }"
        />
      </div>
    </article>
     <article class="detail-right-article">
      <h2 class="right-title">Choose color and memory</h2>
      <color-filter :filterData="colorsData" v-model="color" />
      <memory-filter :filterData="memoryData" v-model="memory" />
      <section class="pay-section">  
        <div class="price-wrapper">
          <p class="highlight">Price</p>
          <p>{{ memoryChosen ? getNewPrice() : mobile.price }}</p>
        </div>
        <button class="pay-button">Buy</button>
      </section>
    </article>
  </div>
</template>
<script>
import {mockData} from '@/data/mockData.js'
export default {
  name: 'Detail',
   components: {
    ColorFilter: () => import(/* webpackMode: "eager" */ '@/components/ColorFilter.vue'),
    MemoryFilter: () => import(/* webpackMode: "eager" */ '@/components/MemoryFilter.vue')
  },
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      mobiles: mockData,
      color: 'black',
      memoryChosen: null,
      colorsData: [
          { title: 'midnight', value: 'black' }, 
          { title: 'starlight', value: '#e4e7e4' },
          { title: 'pink', value: 'pink' },
          { title: 'red', value: 'red' },
          { title: 'blue', value: 'blue' },
        ],
    }
  },
  computed: {
    mobile () {
      return this.mobiles.find(mobile => mobile.id === this.id)
    },
    memoryData() {
      return this.mobile.availableMemories
    },
    memory: {
      get() {
        return this.mobile.memory
      },
      set(value) {
        this.memoryChosen = value
      }
    },
  },
  watch: {
    color () {
      this.getImage()
    },
    memoryChosen() {
      this.getNewPrice()
    }
  },
  methods: {
    getImage () {
      return this.mobile.colors.find(color => color.value === this.color).image
    },
    getNewPrice () {
      return this.mobiles.find(mobile => mobile.name === this.mobile.name && mobile.memory === this.memoryChosen).price
    }
  },
}
</script>
<style scoped>
#detail-page {
  margin: 1rem;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 1.5rem;
}
.detail-right-article {
  display: grid;
  grid-auto-rows: minmax(min-content, max-content);
  justify-items: center;
  grid-row-gap: 1rem;
}
.card {
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.image {
  height: 344px;
  width: 244px;
  background-position: center;
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  margin-bottom: 3rem;
}
.left-title {
  font-size: 2rem;
  margin: 3rem 0 2rem;
}
.right-title {
  font-size: 1.125rem;
  margin-bottom: 0;
}
.pay-section {
  margin-top: 1rem;
  width: 100%;
  background-color: var(--white);
}
.price-wrapper {
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
}
.pay-button {
  position: relative;
  left: 50%;
  transform: translate(-50%);
  border-radius: 50px;
  margin: 2rem 0;
  padding: .75rem .25rem;
  border: 0;
  cursor: pointer;
  min-width: 114px;
  background-color: var(--white);
  border: 1px solid var(--dark-purple);
  color: var(--dark-purple);
  font-weight: 600;
  box-shadow: 0 13px 5px -10px rgb(0 0 0 / 20%);
  font-size: 1rem;
  letter-spacing: .5px;
}
.pay-button:hover {
  background-color: var(--dark-purple);
  color: var(--white);
}
@media screen and (min-width: 768px) {
  .image {
    height: 484px;
    width: 344px;
  }
}
@media screen and (min-width: 1024px) {
  #detail-page{
    grid-template-columns: 50% 50%
  }
  .pay-section {
    width: 70%;
  }
}
@media screen and (min-width: 1440px) {
  #detail-page{
    margin: 5em 12rem 0;
  }
   .pay-section {
    width: 60%;
  }
}

</style>