//Importing main function of vue and App.vue
import { createApp } from "vue";
import App from "./App.vue";

//Importing Components
import BaseCard from "./components/UI/BaseCard.vue";
import ArticleCard from "./components/UI/ArticleBaseCardShop.vue";

//Creating App
const app = createApp(App);

//Adding Components
app.component("base-card", BaseCard);
app.component("article-card", ArticleCard);

//Mounting
app.mount("#app");
