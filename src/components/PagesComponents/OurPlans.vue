<template>
  <div>
    <div id="shopTemplate">
      <!--The main div that contains all of the shop-->
      <div>
        <!--This one contains the shop intro-->
        <base-card>
          <header>
            <h1>
              <em
                ><strong>Ready to take everything to the next level?</strong></em
              >
            </h1>
            <h2><em>Finally, here it is, our shop!</em></h2>
          </header>
          <section>
            <p>
              I suppose if you are still visiting our shop and reading this, you
              might be<br />
              a customer any time soon. Although, wether you are or not a
              customer,<br />
              we think that <em><strong>spending a bit more</strong></em> of your
              time on browsing our website <br />
              is worth it! Who knows, you may need a front-end web developer team
              <u><em>someday</em></u
              >!!!<br />
              By the way, you can select a plan by clicking on it and then
              choosing<br />
              your payment method by clicking on the
              <em><strong>floating button.</strong></em>
            </p>
          </section>
        </base-card>
      </div>
      <hr />
      <div id="bronzeMedalBackground">
        <!--in this tag a bronze medal or sth like that should be displayed-->
      </div>
      <hr />
      <div>
        <!--The shop section-->
        <div>
          <!--bronze plan part-->
          <base-card class="article">
            <article-card :class="bronzePlanClass" @click="planSelector('bronze')">
              <header>
                <h1>
                  <strong><em>Bronze Plan</em></strong>
                </h1>
              </header>
              <section>
                <p>
                  By buying this plan, we will be<br />
                  building a <u>"1 page website"</u> for you<br />
                  which is designed by us and you can<br />
                  <em><strong>only choose your color palette</strong></em> in case <br />
                  if you want to. You can consider<br />
                  this plan as a demo one; although<br />
                  <u><em><strong>the stunning design is ensured</strong></em></u> by<br />
                  our team.<br />
                  This service can be <em><strong>provided in 2-3<br />
                  workdays.</strong></em><br />
                  <u>Source code not included.</u><br />
                </p>
              </section>
              <footer class="footer-button" :class="bronzePlanButtonClass">
                <h4>
                  <em><strong>Cost: $50</strong></em>
                </h4>
                <p>Which can be paid in PayPal our Tether</p>
              </footer>
            </article-card>
            <img src="" alt="#" />
          </base-card>
        </div>
        <div>
          <!--silver plan part-->
          <base-card class="article">
            <img src="" alt="#" />
            <article-card :class="silverPlanClass" @click="planSelector('silver')">
              <header>
                <h1>
                  <strong><em>Silver Plan</em></strong>
                </h1>
              </header>
              <section>
                <p>
                  By buying this plan, we will be<br />
                  building a <u>"5 page website"</u> for you<br />
                  which is designed by us and you can<br />
                  <em><strong>only choose your color palette</strong></em> in case <br />
                  if you want to. You can also consider<br />
                  this plan as a demo one; although<br />
                  <u><em><strong>the stunning design is ensured</strong></em></u> by<br />
                  our team.<br />
                  This service can be <em><strong>provided in 5-10<br />
                  workdays.</strong></em><br />
                  <u>Source code is included</u> but requires<br />
                  some knowledge over <u>Vue</u>.<br />
                  We can also provide <em><strong>FREE guides</strong></em> if<br />
                  the customer needs to change the source<br />
                  code, a win win trade. Isn't it?!
                </p>
              </section>
              <footer class="footer-button" :class="silverPlanButtonClass">
                <h4>
                  <em><strong>Cost: $100</strong></em>
                </h4>
                <p>Which can be paid in PayPal our Tether</p>
              </footer>
            </article-card>
          </base-card>
        </div>
        <div>
          <!--Gold plan part-->
          <base-card class="article">
            <article-card :class="goldPlanClass" @click="planSelector('gold')">
              <header>
                <h1>
                  <strong><em>Gold Plan</em></strong>
                </h1>
              </header>
              <section>
                <p>
                  By buying this plan, we will be<br />
                  building a <u>"10 page website"</u> or a SPA<br /> 
                  (Single Page Application) for you<br />
                  which will have a <u><em><strong>custome design</strong></em></u> in<br />
                  case if you want to. This plan can<br />
                  be considered as our <u>best effort</u> in<br />
                  exchange for your trust and faith in us.<br />
                  This service can be <em><strong>provided in 10-20
                  workdays.</strong></em><br />
                  <u>Source code is included</u> but requires<br />
                  some knowledge over <u>Vue</u>.<br />
                  We can also provide <em><strong>FREE guides</strong></em> if<br />
                  the customer needs to change the source<br />
                  code, the best trade available! Isn't it?!
                </p>
              </section>
              <footer class="footer-button" :class="goldPlanButtonClass">
                <h4>
                  <em><strong>Cost: $150</strong></em>
                </h4>
                <p>Which can be paid in PayPal our Tether</p>
              </footer>
            </article-card>
            <img src="" alt="#" />
          </base-card>
        </div>
      </div>
      <hr>
      <div>
          <!--Payment methods background-->
      </div>
      <hr>
      <div>
          <base-card>
              <header>
                  <h1><em><strong>Time for getting started YET?!</strong></em></h1>
              </header>
              <section>
                  <p>
                      So are you ready to take the first step? As long as life goes on, by postponing<br />
                      and doubting every step you take, the only thing you will get around to becoming<br />
                      <em><strong>is everything you hate and fear of being</strong></em>. Thus, why don't you take<br />
                      the first step right now? Not next week, not tomorrow, <em><strong>RIGHT NOW</strong></em>.<br />
                      The only thing you need is that first strong enough desire to push you through.<br />
                      Then let us be the ones who helps you through these first steps, and remember;<br />
                      Rome wasn't built in a day, neither your career or business will be!<br />
                      <ul>
                          <li>
                              You can still wait for our other projects to release if you are<br />
                              still in favor of postponing!!!
                          </li>
                          <li>
                              By clicking on that floating button, you will be headed to finish your order
                          </li>
                          <li>
                              If you are willing to pay with cryptocurrencies or IR's Rial<br /> 
                              , you can contact us for more info
                          </li>
                          <li>
                              If you choose to pay with PayPal or IR's Rial<br />
                              you will be headed to the freelancing website that our team is working with
                          </li>
                          <li>Prices differ in different currencies (Rial and USD).</li>
                      </ul>
                  </p>
              </section>
          </base-card>
      </div>
    </div>
    <floating-button :Plans="plansSelected"></floating-button>
  </div>
</template>

<script>
import FloatingButton from "../UI/CartFloatingButton.vue";

export default {
  components: { FloatingButton },
  data() {
    return {
      plansSelected: {
        bronzePlanSelected: false,
        silverPlanSelected: false,
        goldPlanSelected: false,
        isPlanSelected: false,
      },
    };
  },
  computed: {
    bronzePlanClass() {
      return { bronzePlan: this.plansSelected.bronzePlanSelected };
    },
    silverPlanClass() {
      return { silverPlan: this.plansSelected.silverPlanSelected };
    },
    goldPlanClass() {
      return { goldPlan: this.plansSelected.goldPlanSelected };
    },
    bronzePlanButtonClass() {
      return { "bronzePlan--button": this.plansSelected.bronzePlanSelected };
    },
    silverPlanButtonClass() {
      return { "silverPlan--button": this.plansSelected.silverPlanSelected };
    },
    goldPlanButtonClass() {
      return { "goldPlan--button": this.plansSelected.goldPlanSelected };
    },
  },
  methods: {
    planSelector(p) {
      if (p === "bronze") {
        this.plansSelected.bronzePlanSelected = !this.plansSelected
          .bronzePlanSelected;
        this.plansSelected.silverPlanSelected = false;
        this.plansSelected.goldPlanSelected = false;
        if (this.plansSelected.bronzePlanSelected == true) {
          this.plansSelected.isPlanSelected = true;
        } else {
          this.plansSelected.isPlanSelected = false;
        }
      } else if (p === "silver") {
        this.plansSelected.bronzePlanSelected = false;
        this.plansSelected.silverPlanSelected = !this.plansSelected.silverPlanSelected;
        this.plansSelected.goldPlanSelected = false;
        if (this.plansSelected.silverPlanSelected == true) {
          this.plansSelected.isPlanSelected = true;
        } else {
          this.plansSelected.isPlanSelected = false;
        }
      } else if (p === "gold") {
        this.plansSelected.bronzePlanSelected = false;
        this.plansSelected.silverPlanSelected = false;
        this.plansSelected.goldPlanSelected = !this.plansSelected
          .goldPlanSelected;
        if (this.plansSelected.goldPlanSelected == true) {
          this.plansSelected.isPlanSelected = true;
        } else {
          this.plansSelected.isPlanSelected = false;
        }
      }
    },
  },
};
</script>

<style scoped>
#shopTemplate {
  margin: 0 0.5rem;
  max-width: 100%;
  border-radius: 1px;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
.article {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
/* hr {
  border-style: none;
  border-top: 7px dotted grey;
  max-width: 10%;
} */
.bronzePlan {
  background-color: #cd7f3d;
}
.silverPlan {
  background-color: #c0c0c0;
}
.goldPlan {
  background-color: #ffd700;
}
.bronzePlan--button {
  background-color: #da7c30;
}
.silverPlan--button {
  background-color: #8d8c8c;
}
.goldPlan--button {
  background-color: #d1b40e;
}
.footer-button {
  margin: 5px;
  max-width: 20rem;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 5px;
}
</style>