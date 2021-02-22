<template>
  <div class="title-container">
    <h2 class="title">DADOS</h2>
    <div class="bar"></div>
  </div>
  <div class="row">
    <div v-if="!photo" class="photo-container">
      <p class="photo-label">Foto</p>
    </div>
    <img v-if="photo" :src="photo" class="photo-container" />
    <input
      type="file"
      class="hide"
      ref="uploadInput"
      accept="image/png, image/jpeg"
      @change="onUploadFile"
    />
    <UploadButton :onClick="uploadFile" />
  </div>
  <div class="row">
    <InputCard label="Nome" placeholder="Nome" />
    <InputCard label="CPF" placeholder="CPF" width="265px" />
    <SelectCard label="Status" :data="status" width="265px" />
  </div>
  <div class="row">
    <InputCard label="E-mail" placeholder="E-mail" />
    <InputCard label="Cargo" placeholder="Cargo" width="265px" />
    <InputCard label="Telefone" placeholder="" width="75px" />
    <InputCard label="" placeholder="" width="169px" />
  </div>
  <div class="row">
    <InputCard label="Número" placeholder="00" width="75px" />
    <InputCard label="Rua" placeholder="Rua" />
    <InputCard label="Complemento" placeholder="Complemento" width="265px" />
    <InputCard label="Bairro" placeholder="Bairro" width="265px" />
  </div>
  <div class="row">
    <InputCard label="Cidade" placeholder="Cidade" />
    <InputCard label="CEP" placeholder="CEP" width="265px" />
    <SelectCard label="Estado" :data="states" width="100px" />
    <SelectCard label="País" :data="countries" width="169px" />
  </div>
  <div class="row">
    <InputCard label="Senha" placeholder="Senha" width="265px" />
  </div>
</template>

<script>
import InputCard from "@/components/InputCard.vue";
import SelectCard from "@/components/SelectCard.vue";
import UploadButton from "@/components/UploadButton.vue";

import states from "@/assets/mocks/states.js";
import countries from "@/assets/mocks/countries.js";

const status = ["Ativo", "Inativo"];

function uploadFile(event) {
  event.preventDefault();

  const hiddenInput = this.$refs.uploadInput;
  hiddenInput.click();
}

function onUploadFile(event) {
  const file = event.target.files[0];
  console.log(file);
  this.photo = URL.createObjectURL(file);
}

export default {
  name: "Data",
  components: {
    InputCard,
    SelectCard,
    UploadButton
  },
  methods: {
    uploadFile,
    onUploadFile
  },
  data() {
    return {
      status,
      states,
      countries,
      photo: null
    };
  }
};
</script>

<style lang="scss">
.title-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
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
  display: flex;

  & + .row {
    margin-top: 15px;
  }

  > .container + .container {
    margin-left: 20px;
  }
}

.row > .photo-container {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: $color-component-intern-bg;
  border: 1px solid $color-component-intern-border;
  object-fit: cover;
}

.row > .photo-container > .photo-label {
  font-family: "Raleway";
  font-size: 15px;
  color: $color-label;
}

.row > .upload-button {
  margin: auto 0;
  margin-left: 20px;
}

.hide {
  display: none;
}
</style>
