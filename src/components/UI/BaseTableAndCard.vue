<template>
  <div id="Card">
    <table class="table">
      <tr>
        <th>Name and Info</th>
        <th>Effort put into it</th>
      </tr>
      <tr v-for="project in otherProjects" :key="project.name">
        <td>
          <a :href="project.link">{{ project.name }}</a> {{ project.info }}
        </td>
        <td>{{ project.timeAndEffort }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
    props:['otherProjects']
}
</script>

<style scoped>
#Card {
  margin: 2rem auto;
  max-width: 50rem;
  border-radius: 10px;
  padding: 1rem;
}
.table {
  border-spacing: 0 15px;
  display: table;
  border: solid black 2px;
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.26);
  border-spacing: 15px;
}
</style>