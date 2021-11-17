<template>
  <div :class="`${value ? 'visible' : 'hidden' } notification`">
    <p>{{ title }}</p>
    <a v-if="action" class="highlight" @click="takeAction">{{ action.title }}</a>
  </div>
</template>
<script>
export default {
  name: 'Notification',
  props: {
    title: {
      type: String,
      required: true,
    },
    action: {
      type: Object,
      default: null
    },
    value: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    takeAction () {
      this.$router.push({ name: this.action.routeName })
    }
  },
  watch: {
    value() {
      setTimeout(() => {
        this.$emit('input', false)
      }, 5000); 
    },
  },
}
</script>
<style scoped>
.notification {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: var(--dark-cyan);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
  padding: 0 3rem;
  box-sizing: border-box;
  transition: all .3s linear;
}
</style>