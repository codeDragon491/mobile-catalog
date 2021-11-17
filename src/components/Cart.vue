<template>
  <div class="cart-wrapper" @click="goToCart()">
    <img class="icon icon-shopping-cart" alt="icon-shopping-cart" src="@/assets/cart.svg">
        <div :class="`${list.length ? 'visible' : 'hidden'} color-dot`">
            <p class="number">
                {{ list.length }}
            </p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Cart',
  props: {
    list: {
      type: Array,
      default: () => {
        return localStorage.getItem('cartList') ? JSON.parse(localStorage.getItem('cartList')) : []
      },
    }
  },
  methods: {
    goToCart() {
      this.$router.push({ name: 'ShoppingCart'})
    },
  },
}
</script>
<style scoped>
.cart-wrapper {
  position: absolute;
  text-align: right;
  right: 1rem;
  top: 1.5rem;
}
.color-dot {
  text-align: center;
  background-color: var(--medium-purple);
  color: var(--white);
  width: 17px;
  height: 17px;
  border-radius: 50%;
  font-size: .65rem;
  font-weight: bold;
  position: absolute;
  left: 100%;
  top: 10%;
  transform: translate(-100%, -10%);
  margin: 0;
}
.color-dot .number {
  margin: 0;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -60%);
}
@media screen and (min-width: 1440px) {
  .cart-wrapper {
    right: 5rem;
    top: 1.5rem;
  }
}
</style>