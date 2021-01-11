<template>
  <div>
    <nav>
      <ul>
        <li>
          <div>
            <img src="#" />
          </div>
        </li>
        <li @click="$emit('home-clicked')">Home Page</li>
        <li @click="$emit('plan-clicked')">Our Plans</li>
        <li @click="$emit('other-clicked')">Other Projects</li>
        <li @click="$emit('contact-clicked')">Contact US</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  emits: ["home-clicked", "plan-clicked", "other-clicked", "contact-clicked"],
};
</script>

<style scoped>
ul {
  margin: 0;
  padding-inline-start: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: mediumseagreen;
}
li {
  list-style: none;
  border-radius: 7px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  max-width: 5rem;
  text-align: center;
  padding: 5px;
}

li:hover{
  opacity: 0.6;
  cursor: pointer;
}
</style>