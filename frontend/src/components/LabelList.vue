<template>
  <div class="times-container">
    <div
      v-for="item in data"
      v-bind:key="item.name"
      class="time-box"
      :onClick="event => onChange(item.name)"
    >
      <div class="time">{{ item.name }}</div>
      <div v-if="item.selected" class="bar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LabelList",
  props: {
    data: Array,
    onChange: Function
  }
};
</script>

<style lang="scss">
.times-container {
  display: flex;
  cursor: pointer;

  > .time-box {
    display: flex;
    flex-direction: column;

    & + .time-box {
      margin-left: 20px;
    }
  }

  > .time-box > .time {
    font-size: 14px;
    font-weight: bold;
    font-family: "Raleway";
    color: $color-grey-medium;
  }

  > .time-box > .bar {
    margin-top: 5px;
    width: 70%;
    height: 2px;
    background: $color-green;
  }
}
</style>
