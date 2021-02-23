<template>
  <div class="input-container">
    <img class="icon" :src="require(`@/assets/icons/${source}`)" />
    <input
      :type="type"
      class="field"
      :placeholder="placeholder"
      @input="onChange"
      :required="required"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    type: String,
    source: String,
    placeholder: String,
    onChange: Function,
    required: Boolean
  }
};
</script>

<style lang="scss">
.input-container {
  height: 45px;
  display: flex;
  align-items: center;
  border-radius: 22.5px;
  background: white;
  padding: 0 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.29);

  > .icon {
    width: 15px;
    height: 15px;
    object-fit: contain;
  }

  > .field {
    padding-left: 10px;
    width: 100%;
    color: black;
    font-size: 15px;
  }

  > .field::placeholder {
    color: $color-light-grey;
  }
}
</style>
