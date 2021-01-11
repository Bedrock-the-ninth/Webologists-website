<template>
  <div id="otherProjectTemplate">
    <div>
      <span><!-- Changable background depending on the status --></span>
      <base-card>
        <h2>{{ titleSelector }}</h2>
        <p>{{ contentSelector }}</p>
      </base-card>
    </div>
    <base-table-and-card :otherProjects="otherProjects"></base-table-and-card>
  </div>
</template>

<script>
import BaseTableAndCard from "../UI/BaseTableAndCard.vue";
export default {
  components: { BaseTableAndCard },
  data() {
    return {
      areWeBusy: true,
      status: {
        busy: {
          title: "We are busy",
          content:
            "We are busy with a project that can be soon viewed as our done projects! Join our communities to get more details",
        },
        notBusy: {
          title: "We are already ready to give you the service on demand",
          content:
            "Our team is ready to hire, so whenever you're ready, we are too!",
        },
      },
      otherProjects: {
        webologistsWebsite: {
          name: "Our well-designed website; ",
          info: "no description needed!",
          timeAndEffort:
            "Give it a 5 stars, as it is our best effort at this time (Doesn't mean it won't get better!) ⭐⭐⭐⭐⭐",
          link: "./HomePageComponent.vue",
        },
        goalKeeper: {
          name: "Goal Keeper; ",
          info: "a simple goal keeper built with Vue.js!",
          timeAndEffort:
            "Give it a two stars because there were no components used in it! ⭐⭐",
          link: "https://webologists.github.io/goal_keeper/",
        },
        monsterSlayer: {
          name: "Monster Slayer; ",
          info: "a browser-based game built with Vue.js!",
          timeAndEffort:
            "Give it a one star as it was built with the help of a tutorial! ⭐",
          link:
            "https://webologists.github.io/Monster-Slayer-Browser-Based-Game/",
        },
      },
    };
  },
  computed: {
    titleSelector() {
      if (this.areWeBusy == true) {
        return this.status.busy.title;
      } else {
        return this.status.notBusy.title;
      }
    },
    contentSelector() {
      if (this.areWeBusy == true) {
        return this.status.busy.content;
      } else {
        return this.status.notBusy.content;
      }
    },
  },
  methods:{
    consoleLog(){
      console.log(this.homePageId)
    }
  }
};
</script>

<style scoped>
#otherProjectTemplate {
  margin: 0 0.5rem;
  max-width: 100%;
  border-radius: 1px;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>