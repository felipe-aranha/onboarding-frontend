<template>
  <div v-if="!width" class="container">
    <label class="field-label" :for="label">{{ label }}</label>
    <input
      :id="label || randomNumber()"
      class="field-container"
      :placeholder="placeholder"
    />
  </div>

  <div
    v-if="width"
    class="container"
    :style="`width: ${width}; min-width: ${width};`"
  >
    <label class="field-label" :for="label">{{ label }}</label>
    <input
      :id="label || randomNumber()"
      :class="label ? 'field-container' : 'field-container margin-14'"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
function randomNumber() {
  const random = () => Math.floor(Math.random() * 100);
  return random() * random();
}

export default {
  name: "InputCard",
  props: {
    label: String,
    placeholder: String,
    width: String
  },
  methods: {
    randomNumber
  }
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: transparent;
}

.margin-14 {
  margin-top: 14px;
}

.container > .field-label {
  font-family: "Raleway";
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
  cursor: pointer;
}

.container > .field-container {
  width: calc(100% - 16px);
  height: 40px;
  padding-left: 16px;
  border: 1px solid $color-component-intern-border;
  background: $color-component-intern-bg;
  border-radius: 5px;

  &::placeholder {
    color: $color-component-intern-placeholder;
  }
}
</style>
