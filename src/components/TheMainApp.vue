<template>
  <div>
    <navigation-bar
      @home-clicked="homeClicked"
      @plan-clicked="planClicked"
      @other-clicked="otherClicked"
      @contact-clicked="contactClicked"
    ></navigation-bar>
    <home-page
      v-if="homePageSelected"
      @home-page-shop="planClicked"
      @home-page-project="otherClicked"
      @home-page-contact="contactClicked"
    ></home-page>
    <our-plans v-if="ourPlansSelected"></our-plans>
    <other-projects v-if="otherProjectsSelected"></other-projects>
    <contact-us v-if="contactUsSelected"></contact-us>
    <page-footer></page-footer>
  </div>
</template>

<script>
// Importing local components:
import NavigationBar from "./Layout/TheNavigationBar.vue";
import HomePage from "./PagesComponents/HomePageComponent.vue";
import OurPlans from "./PagesComponents/OurPlans.vue";
import PageFooter from "./Layout/TheFooter.vue";
import OtherProjects from "./PagesComponents/OurOtherProjects.vue";
import ContactUs from "./PagesComponents/ContactUs.vue";

export default {
  components: {
    NavigationBar,
    HomePage,
    OurPlans,
    PageFooter,
    OtherProjects,
    ContactUs,
  },
  data() {
    return {
      homePageSelected: true,
      ourPlansSelected: false,
      otherProjectsSelected: false,
      contactUsSelected: false,
    };
  },
  methods: {
    homeClicked() {
      (this.homePageSelected = true),
        (this.ourPlansSelected = false),
        (this.otherProjectsSelected = false),
        (this.contactUsSelected = false),
        (this.cartSelected = false);
      console.log("Home page selected");
    },
    planClicked() {
      (this.homePageSelected = false),
        (this.ourPlansSelected = true),
        (this.otherProjectsSelected = false),
        (this.contactUsSelected = false),
        (this.cartSelected = false);
      console.log("Our plans selected");
    },
    otherClicked() {
      (this.homePageSelected = false),
        (this.ourPlansSelected = false),
        (this.otherProjectsSelected = true),
        (this.contactUsSelected = false),
        (this.cartSelected = false);
      console.log("Other projects selected");
    },
    contactClicked() {
      (this.homePageSelected = false),
        (this.ourPlansSelected = false),
        (this.otherProjectsSelected = false),
        (this.contactUsSelected = true),
        (this.cartSelected = false);
      console.log("Contact us selected");
    },
    shopCartClicked() {
      (this.homePageSelected = false),
        (this.ourPlansSelected = false),
        (this.otherProjectsSelected = false),
        (this.contactUsSelected = false),
        (this.cartSelected = true);
      console.log("Shop Cart Selected");
    },
  },
};
</script>

<style scoped>
</style>