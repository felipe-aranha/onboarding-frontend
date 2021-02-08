<template>
  <div class="checkbox-container">
    <input type="checkbox" name="check" id="check" class="box" />
    <label for="check" class="text">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    label: String
  }
};
</script>

<style lang="scss">
.checkbox-container {
  width: 100%;
  display: flex;
  align-items: center;

  > .box {
    width: 22px;
    height: 22px;
    background: white;
    appearance: none;
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.29);
    cursor: pointer;
  }

  > .box:checked {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > .box:checked:after {
    content: "✔️";
    font-size: 12px;
    color: #99a1a7;
  }

  > .text {
    margin-left: 15px;
    font-size: 15px;
    color: $color-light-grey;
    cursor: pointer;
  }
}
</style>
