<template>
   <div id="cart-page">
    <cart :list="cartList" />
    <h1 class="title">Your shopping cart</h1>
    <h2 class="sub-title">Delivery 1-3 days</h2>
    <section class="cart-items">
      <article class="cart-article" v-for="mobile in cartListItems" :key="mobile.image">
        <div class="mobile-card">
          <img class="image" alt="mobile-image"
            :src="mobile.image"
          />
          <h4 class="mobile-title">{{ mobile.name }}</h4>
          <p class="price">{{ mobile.price }}</p>
        </div>
      </article>
    </section>
  </div>
</template>
<script>
export default {
  name: 'ShoppingCart',
  components: {
    Cart: () => import(/* webpackMode: "eager" */ '@/components/Cart.vue')
  },
  computed: {
    cartListItems() {
      return localStorage.getItem('cartList') ? JSON.parse(localStorage.getItem('cartList')) : []
    },
  }
}
</script>
<style lang="scss" scoped>
#cart-page {
  @include margin-below-desktop;
}
.cart-items {
  @include grid-one-column;
}
.mobile-card {
  background-color: var(--white);
  @include flex-column-center;
  padding: 2.5rem;
}
.image {
  width: 20%;
  height: auto;
}
.sub-title {
  font-size: 1.125rem;
  margin: 1rem 0 2rem;
}
.mobile-title {
  margin-left: 1rem;
}
@media screen and (min-width: 768px) {
  .mobile-card {
    @include flex-center;
  }
  .image {
    width: 10%;
    height: auto;
  }
  .price {
    margin-left: auto;
  }
}
@media screen and (min-width: 1280px) {
 .image {
    width: 5%;
    height: auto;
  }
}
@media screen and (min-width: 1440px) {
  #cart-page {
    @include margin-dektop;
  }
}
</style>