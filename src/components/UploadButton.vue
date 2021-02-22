<template>
  <button class="upload-button" @click="onClick">
    <img src="@/assets/icons/upload.svg" class="icon" />
    <p class="label">Upload</p>
  </button>
</template>

<script>
export default {
  name: "UploadButton",
  props: {
    onClick: Function
  }
};
</script>

<style scoped lang="scss">
.upload-button {
  width: 130px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $color-green;
  border-radius: 20px;
}

.upload-button > .icon {
  margin-right: 10px;
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.upload-button > .label {
  font-family: "Raleway";
  font-size: 15px;
  font-weight: bold;
  color: white;
}
</style>
