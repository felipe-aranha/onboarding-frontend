<template>
  <router-link :to="to" class="item-container">
    <img class="icon" :src="require(`@/assets/icons/${icon}`)" />
    <p class="label">{{ label }}</p>
  </router-link>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    label: String,
    icon: String,
    to: String
  }
};
</script>

<style lang="scss">
.item-container {
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  text-decoration: none;

  > .icon {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }

  > .label {
    margin-left: 20px;
    font-size: 20px;
    font-weight: bold;
    color: white;
  }
}
</style>
