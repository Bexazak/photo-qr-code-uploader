<template>
  <div class="spinner"></div>
</template>

<style scoped>
.spinner {
  position: relative;
  width: 100px;
  height: 100px;
  background: hsla(160, 100%, 37%, 1);
  border-radius: 100%;
  opacity: 0.7;
}
.spinner:before {
  content: "...";
  text-align: center;
  line-height: 38px;
  font-size: 60px;
  color: #EEEEEE;
  top: 10px;
  left: 10px;
  z-index: 1;
  position: absolute;
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background: rgba(0,0,0,1);
}

.spinner:after {
  content: "";
  display: block;
  z-index: 0;
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background: linear-gradient( 420deg, transparent 50%, #CECECE 50%), linear-gradient(90deg, #CECECE 50%, transparent 50% );
  animation: spinner 2s infinite linear;
}

@keyframes spinner {
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
}

</style>