<template>
  <div class="title-container">
    <h2 class="title">LAYOUT</h2>
    <div class="bar"></div>
  </div>
  <div class="row">
    <div class="column">
      <label class="logo-label" for="upload-button">Logo</label>
      <div class="logo-display">
        <p class="logo-placeholder">Logo</p>
      </div>
    </div>
    <input
      type="file"
      accept="image/png, image/jpeg"
      class="hide"
      ref="uploadInput"
      @change="onUploadFile"
    />
    <button class="upload-button" @click="uploadFile">
      <img src="@/assets/icons/upload.svg" class="icon" />
      <p class="label">Upload</p>
    </button>
  </div>
  <InputCard
    label="Nome de exibição"
    placeholder="Nome de exibição"
    width="456px"
  />
  <div class="colors">
    <ColorSet label="Cor Back" :onSelectColor="onSelectColorBack" />
    <ColorSet label="Cor Front" :onSelectColor="onSelectColorFront" />
  </div>
</template>

<script>
import InputCard from "@/components/InputCard.vue";
import ColorSet from "@/components/ColorSet.vue";

function uploadFile(event) {
  event.preventDefault();

  const hiddenInput = this.$refs.uploadInput;
  hiddenInput.click();
}

function onUploadFile(event) {
  const file = event.target.files[0];
  console.log(file);
}

function onSelectColorBack(color) {
  console.log(color);
}

function onSelectColorFront(color) {
  console.log(color);
}

export default {
  name: "Layout",
  components: {
    InputCard,
    ColorSet
  },
  methods: {
    uploadFile,
    onUploadFile,
    onSelectColorBack,
    onSelectColorFront
  }
};
</script>

<style scoped lang="scss">
.title-container {
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
}

.title-container > .title {
  font-size: "Raleway";
  font-size: 18px;
  font-weight: normal;
  color: $color-grey-medium;
  text-transform: uppercase;
}

.title-container > .bar {
  margin-top: 10px;
  width: 40px;
  height: 3px;
  background: $color-green;
}

.row {
  margin-bottom: 20px;
  display: flex;
}

.column {
  display: flex;
  flex-direction: column;
}

.row > .column > .logo-label {
  margin-bottom: 10px;
  font-family: "Raleway";
  font-size: 12px;
  font-weight: bold;
}

.row > .column > .logo-display {
  width: 170px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: $color-input-intern-bg;
  border: 1px solid $color-input-intern-border;
}

.row > .column > .logo-display > .logo-placeholder {
  font-family: "Raleway";
  font-size: 12px;
  color: $color-input-intern-placeholder;
}

.row > .upload-button {
  margin-top: 24px;
  margin-left: 20px;
  width: 130px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $color-green;
  border-radius: 20px;
}

.row > .upload-button > .icon {
  margin-right: 10px;
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.row > .upload-button > .label {
  font-family: "Raleway";
  font-size: 15px;
  font-weight: bold;
  color: white;
}

.colors {
  margin-top: 20px;
  display: flex;
}

.colors > .color-set-container + .color-set-container {
  margin-left: 30px;
}

.hide {
  display: none;
}
</style>
