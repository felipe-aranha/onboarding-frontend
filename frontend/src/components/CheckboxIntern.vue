<template>
  <div class="checkbox-container">
    <input
      type="checkbox"
      :id="label"
      class="box"
      v-if="onChange === undefined || value === undefined"
    />

    <input
      type="checkbox"
      :id="label"
      class="box"
      @change="onChange"
      :value="value"
      :data-identifier="identifier"
      v-if="onChange !== undefined && value !== undefined"
    />

    <label :for="label" class="text">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    label: String,
    value: Boolean,
    onChange: Function,
    identifier: String
  }
};
</script>

<style scoped lang="scss">
.checkbox-container {
  width: 100%;
  display: flex;
  align-items: center;

  > .box {
    width: 28px;
    height: 28px;
    background: white;
    appearance: none;
    border-radius: 5px;
    border: 3px solid $color-checkbox-border-unchecked;
    cursor: pointer;
  }

  > .box:checked {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid $color-checkbox-border-checked;
  }

  > .box:checked:after {
    content: "✔";
    font-size: 15px;
    color: $color-green;
  }

  > .text {
    margin-left: 15px;
    font-size: 15px;
    font-family: "Raleway";
    color: $color-light-grey;
    cursor: pointer;
  }
}
</style>
