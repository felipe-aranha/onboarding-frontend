<template>
  <div class="chart-container">
    <h3 v-if="!!title" class="title">{{ title }}</h3>
    <canvas id="chart" ref="chart"></canvas>
    <p class="value">{{ valueFormatted }}</p>
  </div>
</template>

<script>
function drawArc({
  ctx,
  centerX,
  centerY,
  radius,
  startAngle,
  endAngle,
  color
}) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.closePath();
  ctx.fill();
}

function createChart(refs, props) {
  const chart = refs.chart;
  chart.width = props.size;
  chart.height = props.size / 2;
  const radius = props.size / 2;

  const ctx = chart.getContext("2d");

  const percent = props.value / props.goal;

  drawArc({
    ctx,
    centerX: props.size / 2,
    centerY: props.size / 2,
    radius,
    startAngle: Math.PI,
    endAngle: 0,
    color: props.trackColor || "#F1F1F1"
  });

  drawArc({
    ctx,
    centerX: props.size / 2,
    centerY: props.size / 2,
    radius: radius / 2,
    startAngle: Math.PI,
    endAngle: 0,
    color: props.bgColor
  });

  drawArc({
    ctx,
    centerX: props.size / 2,
    centerY: props.size / 2,
    radius,
    startAngle: Math.PI,
    endAngle: -Math.PI * (1 - percent),
    color: props.color
  });

  drawArc({
    ctx,
    centerX: props.size / 2,
    centerY: props.size / 2,
    radius: radius / 2,
    startAngle: Math.PI,
    endAngle: 0,
    color: props.bgColor
  });
}

export default {
  name: "Chart",
  props: {
    title: String,
    goal: Number,
    value: Number,
    color: String,
    bgColor: String,
    size: Number,
    trackColor: String
  },
  mounted: function() {
    createChart(this.$refs, this.$props);
  },
  computed: {
    valueFormatted() {
      return this.$props.value.toLocaleString("pt-BR");
    }
  },
  updated() {
    createChart(this.$refs, this.$props);
  }
};
</script>

<style lang="scss">
.chart-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  > .title {
    margin-bottom: 15px;
    font-size: 15px;
    font-family: "Raleway";
    font-weight: bold;
    color: $color-grey-medium;
  }

  > .value {
    margin-top: 10px;
    font-size: 17px;
    font-family: "Raleway";
    font-weight: bold;
    color: $color-grey-medium;
  }
}
</style>
