<template>
  <div class="color-set-container">
    <label class="label-text">{{ label }}</label>
    <div class="list">
      <div class="set black" @click="onClick"></div>
      <div class="set outline-black" @click="onClick">
        <div class="inner-black" @click="onClick"></div>
      </div>
      <div class="set purple" @click="onClick"></div>
      <div class="set green" @click="onClick"></div>
    </div>
  </div>
</template>

<script>
function onClick(event) {
  const { target } = event;
  const buttonClasses = Array.from(target.classList);

  const colors = ["black", "outline-black", "inner-black", "purple", "green"];

  const colorSelected = colors.find(color => buttonClasses.includes(color));

  const { onSelectColor } = this.$props;

  if (colorSelected === "inner-black")
    onSelectColor && onSelectColor("outline-black");
  else onSelectColor && onSelectColor(colorSelected);
}

export default {
  name: "ColorSet",
  props: {
    label: String,
    onSelectColor: Function
  },
  methods: {
    onClick
  }
};
</script>

<style scoped lang="scss">
.color-set-container {
  display: flex;
  flex-direction: column;
}

.color-set-container > .label-text {
  font-family: "Raleway";
  font-size: 12px;
  font-weight: bold;
}

.color-set-container > .list {
  margin-top: 10px;
  display: flex;
}

.color-set-container > .list > .set {
  width: 26px;
  height: 26px;
  border-radius: 13px;
  cursor: pointer;

  & + .set {
    margin-left: 10px;
  }
}

.color-set-container > .list > .set.black {
  background: black;
}

.color-set-container > .list > .set.outline-black {
  width: 20px;
  height: 20px;
  border: 3px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
}

.color-set-container > .list > .set > .inner-black {
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: black;
}

.color-set-container > .list > .set.purple {
  background: $color-medium-purple;
}

.color-set-container > .list > .set.green {
  background: $color-green;
}
</style>
