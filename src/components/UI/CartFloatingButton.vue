<template>
  <div v-show="Plans.isPlanSelected" class="fab-container">
    <button id="button" class="floatB main-fab-icon-holder">
      <i class="fas fa-shopping-cart"></i>
    </button>
    <ul class="floatB-options">
      <li>
        <span class="floatB-label">PayPal</span>
        <div class="fab-icon-holder">
          <i class="fab fa-paypal"></i>
        </div>
      </li>
      <li>
        <span class="floatB-label">IR's Rial</span>
        <div class="fab-icon-holder">
          <i class="fas fa-coins"></i>
        </div>
      </li>
      <li>
        <span class="floatB-label">Cryptocurrencies</span>
        <div class="fab-icon-holder">
          <i class="fab fa-btc"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["Plans"],
};
</script>

<style scoped>
.fab-container {
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 999;
  cursor: pointer;
}
.main-fab-icon-holder {
  height: 50px;
  border-radius: 100%;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
  width: 50px;
}
.fab-icon-holder {
  height: 50px;
  border-radius: 100%;
  background-color: #016fb9;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
  width: 50px;
}
.fab-icon-holder:hover {
  opacity: 0.8;
}
.fab-icon-holder i {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-style: 25px;
  color: #ffffff;
}
.floatB {
  cursor: pointer;
  width: 60px;
  height: 60px;
  background-color: #d23f31;
}
.floatB-options {
  list-style: none;
  margin: 0;

  position: absolute;
  bottom: 70px;
  right: 0;
  opacity: 0;
  transition: all 1s ease;
  transform: scale(0);
  transform-origin: 85% buttom;
}
.floatB:focus + .floatB-options,
.floatB-options:hover {
  transform: scale(1);
  opacity: 1;
}
.floatB-options li {
  display: flex;
  justify-content: flex-end;
  padding: 5px;
}
.floatB-label {
  padding: 2px 5px;
  align-self: center;
  white-space: nowrap;
  border-radius: 3px;
  background-color: #666666;
  color: #ffffff;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
}
</style>