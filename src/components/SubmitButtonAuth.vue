<template>
  <button class="submit-button">{{ label || "Botão" }}</button>
</template>

<script>
export default {
  name: "SubmitButtonAuth",
  props: {
    label: String
  }
};
</script>

<style scoped lang="scss">
.submit-button {
  width: 190px;
  min-width: 190px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: bold;
  color: white;
  background: $color-primary;
  border-radius: 25px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.29);
}
</style>
