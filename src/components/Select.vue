<template>
  <select name="filter" class="filter-container">
    <option v-for="item in data" v-bind:key="item" :value="item">{{
      item
    }}</option>
  </select>
</template>

<script>
export default {
  name: "Select",
  props: {
    data: Array
  }
};
</script>

<style lang="scss">
.filter-container {
  padding: 10px 20px;
  padding-right: 40px;
  border-radius: 75px;
  background: white;
  color: $color-medium-purple;
  font-size: 17px;
  font-family: "Raleway";
  appearance: none;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAABBUlEQVQokY2SIU8DMRiGn3EMsX9y4v5AcRgwiCaYIhAkiJHhmjAyCWJLKlCAQiCo4KBiCMSSqZ1Cnri/wE8AQkK+5EbK5Qir7Pd+T7+nbUcb+wa8AIfBuy9WXNrYBLgFdtaAHDgA7rSx66sgtLFdydd9uUAGwCWwDzxpYzf+AUj9sc5L36ATFcfAKTAF9oJ3H38AZPJdYBK8G8p+sgxUZTFLMyU6R4BKM5VXZfEZAXrAs9wBcBG8Gy1rSXxSVRbzNFPvEehBQBFgCzgL3p3HfT86jbFFS/QWtfs9sAkMg3eTZr4VUoP6wBUgSvIax8G767bsL52G2muaKflD28BJ8O6mNQh8A+T2UPYc4drvAAAAAElFTkSuQmCC");
  background-repeat: no-repeat;
  background-size: 12px;
  background-position-x: calc(100% - 20px);
  background-position-y: calc(50% + 2px);
  cursor: pointer;
}
</style>
