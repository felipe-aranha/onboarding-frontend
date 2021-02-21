<template>
  <div class="container">
    <label class="field-label" :for="label">{{ label }}</label>

    <select v-if="!width" name="filter" class="filter-container">
      <option v-for="item in data" v-bind:key="item" :value="item">{{
        item
      }}</option>
    </select>

    <select
      v-if="width"
      name="filter"
      class="filter-container"
      :style="`width: ${width}`"
    >
      <option v-for="item in data" v-bind:key="item" :value="item">{{
        item
      }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    data: Array,
    width: String,
    label: String
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: max-content;
  background: transparent;
}

.container > .field-label {
  font-family: "Raleway";
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
  cursor: pointer;
}

.container > .filter-container {
  padding-left: 10px;
  width: calc(100% - 10px);
  height: 42px;
  border-radius: 5px;
  background: $color-select-intern-bg;
  color: $color-select-intern;
  border: 1px solid $color-select-intern-border;
  font-size: 15px;
  font-family: "Raleway";
  appearance: none;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAABBUlEQVQokY2SIU8DMRiGn3EMsX9y4v5AcRgwiCaYIhAkiJHhmjAyCWJLKlCAQiCo4KBiCMSSqZ1Cnri/wE8AQkK+5EbK5Qir7Pd+T7+nbUcb+wa8AIfBuy9WXNrYBLgFdtaAHDgA7rSx66sgtLFdydd9uUAGwCWwDzxpYzf+AUj9sc5L36ATFcfAKTAF9oJ3H38AZPJdYBK8G8p+sgxUZTFLMyU6R4BKM5VXZfEZAXrAs9wBcBG8Gy1rSXxSVRbzNFPvEehBQBFgCzgL3p3HfT86jbFFS/QWtfs9sAkMg3eTZr4VUoP6wBUgSvIax8G767bsL52G2muaKflD28BJ8O6mNQh8A+T2UPYc4drvAAAAAElFTkSuQmCC");
  background-repeat: no-repeat;
  background-size: 12px;
  background-position-x: calc(100% - 10px);
  background-position-y: calc(50% + 2px);
  cursor: pointer;
}
</style>
