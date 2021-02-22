<template>
  <div class="title-container">
    <h2 class="title">LAYOUT</h2>
    <div class="bar"></div>
  </div>
  <div class="row">
    <div class="column">
      <label class="logo-label" for="upload-button">Logo</label>
      <div v-if="!logo" class="logo-display">
        <p class="logo-placeholder">Logo</p>
      </div>
      <img v-if="logo" :src="logo" class="logo-display" />
    </div>
    <input
      type="file"
      accept="image/png, image/jpeg"
      class="hide"
      ref="uploadInput"
      @change="onUploadFile"
    />
    <UploadButton :onClick="uploadFile" />
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
import UploadButton from "@/components/UploadButton.vue";

function uploadFile(event) {
  event.preventDefault();

  const hiddenInput = this.$refs.uploadInput;
  hiddenInput.click();
}

function onUploadFile(event) {
  const file = event.target.files[0];
  console.log(file);
  this.logo = URL.createObjectURL(file);
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
    ColorSet,
    UploadButton
  },
  methods: {
    uploadFile,
    onUploadFile,
    onSelectColorBack,
    onSelectColorFront
  },
  data() {
    return {
      logo: null
    };
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
  background: $color-component-intern-bg;
  border: 1px solid $color-component-intern-border;
  object-fit: cover;
}

.row > .column > .logo-display > .logo-placeholder {
  font-family: "Raleway";
  font-size: 12px;
  color: $color-component-intern-placeholder;
}

.row > .upload-button {
  margin-top: 24px;
  margin-left: 20px;
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
