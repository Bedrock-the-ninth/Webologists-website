<template>
  <div>
    <footer>
      <div>
        <div id="iconSections">
          <a href="https://github.com/Webologists"
            ><i class="fab fa-github"></i
          ></a>
          <a href="https://t.me/webologists"><i class="fab fa-telegram"></i></a>
          <a href="https://www.instagram.com/webologists/"
            ><i class="fab fa-instagram"></i
          ></a>
          <a href="https://discord.gg/NyYgfsY9FQ"
            ><i class="fab fa-discord"></i
          ></a>
        </div>
        <p>
          Copyrights © 2020 <span v-if="yearCheck">{{ -year }}</span
          >, Webologists
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
//Vanilla JS
function calculateYear() {
  let thisYear = new Date();
  return thisYear.getFullYear().toString();
}
export default {
  data() {
    return {
      year: calculateYear(),
    };
  },
  computed: {
    yearCheck() {
      if (this.year === "2020") {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style scoped>
footer > div {
  margin: 0;
  max-width: 100%;
  border-radius: 1px;
  box-shadow: 4px 2px 2px 0px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
footer {
  text-align: center;
}
.iconSection {
  display: flexbox;
  align-items: center;
  justify-content: space-between;
}
a {
  color: #000000;
}
i {
  width: 2rem;
  height: 2rem;
}
</style>