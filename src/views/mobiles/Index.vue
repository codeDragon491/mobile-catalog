<template>
  <div id="catalog-page">
    <h1>Mobilephones</h1>
    <p>
      Here you can see our large selection of mobile phones.<br>
      You always get a screen change when you buy your mobile with a subscription.
    </p>
   <section class="mobiles-section">
     <div class="mobile-card"
        v-for="mobile in mobiles"
        :key="mobile.id"
      >
      <p class="title">{{ mobile.name }}</p>
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
  data () {
    return {
      mobiles: mockData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#catalog-page {
  margin: 0 2rem;
}
.mobiles-section {
  margin: 2rem 0;
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-columns: 100%;
  justify-content: center;
}
.mobile-card {
  cursor: pointer;
  background-color: var(--white);
  border-radius: 1.25rem;
  transition: all .3s linear;
  border: 1px solid var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mobile-card:hover {
  border: 1px solid var(--light-grey);
}
.image {
  height: 285px;
  width: 180px;
  background-position: center;
  background-repeat: no-repeat; 
  background-size: 75% 100%;
}
.title {
  margin: 1.875rem 0 0.5rem;
}
.memory {
  font-size: 0.75rem;
  margin: 0 0 1rem;
}
.price {
  margin-top: 1rem;
  font-size: 1.25rem;
}
@media screen and (min-width: 768px) {
  .mobiles-section {
    grid-template-columns: repeat(auto-fill, 240px);
  }
}
@media screen and (min-width: 1024px) {
  #catalog-page {
    margin: 0 15rem;
  }
  .mobiles-section {
    margin: 5rem 0;
  }
}
</style>
