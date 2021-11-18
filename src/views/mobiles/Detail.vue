<template>
  <div id="detail-page">
    <cart :list="cartList" />
    <section class="articles">
      <article class="detail-left-article">
        <div class="mobile-card">
          <h1 class="left-title">{{ mobile.name }}</h1>
          <div class="image"
            :style="{ backgroundImage: `url(${getImage() })` }"
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
            <p>{{ getNewPrice() }}</p>
          </div>
          <button class="pay-button" @click="addToCart(mobile)">Add to cart</button>
        </section>
      </article>
    </section>
    <notification v-model="notified" title="Added to cart" :action="action" />
  </div>
</template>
<script>
import {mockData} from '@/data/mockData.js'
export default {
  name: 'Detail',
   components: {
    ColorFilter: () => import(/* webpackMode: "eager" */ '@/components/ColorFilter.vue'),
    MemoryFilter: () => import(/* webpackMode: "eager" */ '@/components/MemoryFilter.vue'),
    Cart: () => import(/* webpackMode: "eager" */ '@/components/Cart.vue'),
    Notification: () => import(/* webpackChunkName: "notification" */ '@/components/Notification.vue')
  },
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      notified: false,
      mobiles: mockData,
      memoryChoosen: null,
      colorChoosen: null,
      cartList: localStorage.getItem('cartList') ? JSON.parse(localStorage.getItem('cartList')) : [] ,
      action: {
        routeName: 'ShoppingCart',
        title: 'See'
      }
    }
  },
  computed: {
    mobile () {
      return this.mobiles.find(mobile => mobile.id === this.id)
    },
    colorsData () {
      return this.mobile.availableColors
    },
    memoryData() {
      return this.mobile.availableMemories
    },
    memory: {
      get() {
        return this.mobile.memory
      },
      set(value) {
        this.memoryChoosen = value
      }
    },
    color: {
      get() {
        return this.mobile.color
      },
      set(value) {
        this.colorChoosen = value
      }
    },
  },
  watch: {
    colorChoosen() {
      this.getImage()
    },
    memoryChoosen() {
      this.getNewPrice()
    }
  },
  methods: {
    getImage () {
      return this.colorChoosen ? this.mobile.availableColors.find(color => color.value === this.colorChoosen).image : 
      this.mobile.availableColors.find(color => color.value === this.color).image
    },
    getNewMemory () {
      return this.mobiles.find(mobile => mobile.name === this.mobile.name && mobile.memory === this.memory)
    },
    getNewPrice () {
      return this.memoryChoosen ? this.mobiles.find(mobile => mobile.name === this.mobile.name && mobile.memory === this.memoryChoosen).price : 
      this.mobile.price
    },
    addToCart (mobile) {
      this.notified = true
      const newMobile = Object.assign({}, mobile)
      newMobile.image = this.getImage()
      newMobile.memory = this.getNewMemory()
      newMobile.price = this.getNewPrice()
      newMobile.color = this.colorChoosen ? this.colorChoosen : this.color
      this.cartList.push(newMobile)
      localStorage.setItem('cartList', JSON.stringify(this.cartList))
    }
  },
}
</script>
<style lang="scss" scoped>
#detail-page {
  @include margin-below-desktop;
}
.articles {
  @include grid-one-column;
}
.detail-right-article {
  display: grid;
  grid-auto-rows: minmax(min-content, max-content);
  justify-items: center;
  grid-row-gap: 1rem;
}
.mobile-card {
  background-color: var(--white);
  @include flex-column-center;
}
.image {
  height: 344px;
  width: 244px;
  @include background-center-no-repeat(100%);
  margin-bottom: 3rem;
}
.left-title {
  font-size: $size-xl;
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
  @include margin-xl-0;
  padding: .75rem .25rem;
  border: 0;
  min-width: 154px;
  @include background-border-color(--white, --dark-purple);
  color: var(--dark-purple);
  font-weight: 600;
  box-shadow: 0 13px 5px -10px rgba(0, 0, 0, 20);
  font-size: $size-base;
  letter-spacing: .5px;
}
.pay-button:hover {
  @include background-purple-white(--dark-purple)
}
@media screen and (min-width: 768px) {
  .image {
    height: 484px;
    width: 344px;
  }
}
@media screen and (min-width: 1024px) {
  .articles {
    grid-template-columns: 50% 50%
  }
  .pay-section {
    width: 70%;
  }
}
@media screen and (min-width: 1440px) {
  #detail-page {
    @include margin-dektop;
  }
   .pay-section {
    width: 60%;
  }
}

</style>