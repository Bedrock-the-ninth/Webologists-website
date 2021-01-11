<template>
  <div id="homePageTemplate">
    <div id="withBackGround">
      <!--the first div belongs to the whole home page -->
      <div>
        <!--this div belongs to the first thing that the user see and also its background -->
        <base-card class="b4intro">
          <section id="firstImp">
            <h3>
              <em
                >Leave all of your front-end web development projects to us!</em
              >
            </h3>
            <h1>
              <em><strong>We are Webologists</strong></em>
            </h1>
            <p>, not web scientists but PRO web developers</p>
          </section>
        </base-card>
      </div>
    </div>
    <hr />
    <div id="intro">
      <base-card>
        <header id="introHeader">
          <img id="firstPanda" src="#" />
          <div>
            <!--This way all of the header section can be in one line-->
            <h1>
              <em><strong>A short introduction to Webologists</strong></em>
            </h1>
            <h4>
              These two cute pandas will handle your front-end web development
              projects
            </h4>
          </div>
          <img id="secondPanda" src="#" />
        </header>
        <section id="introSection">
          <p>
            So let us officially introduce ourselves. The panda that you are<br />
            currently seeing on the top left corner is
            <em><strong>Bedrock</strong></em
            >, and the<br />
            other panda on the other corner is
            <em><strong>Melinium</strong></em> , founder and co-founder<br />
            of Webologists
          </p>
        </section>
      </base-card>
    </div>
    <hr />
    <div id="dividerBackground">
      <!--The divider background should be placed here, between intro and skills -->
    </div>
    <hr />
    <div id="skills">
      <div>
        <img id="skilledPandas" src="#" />
      </div>
      <div>
        <base-card>
          <header>
            <h1>
              <em><strong>Skilled Pandas!</strong></em>
            </h1>
            <h4>
              <em><strong>Wondering about our skills?!</strong></em>
            </h4>
          </header>
          <section>
            <p>
              We consider the fact that when you came to this page, you
              weren't<br />
              really expecting <strong>panda programmers</strong>, but the
              question is:<br />
              <u
                >"Can't pandas be <strong>experts</strong> and good at something
                as much as they are cute?!"</u
              ><br />
              I assume they can, or at least we can!<br />
              Our team have a
              <em><strong>wide range of knowledge</strong></em> over several
              languages (Mark-up, Programming) and frameworks,<br />
              such as;
              <em
                ><strong
                  ><u>HTML</u>, <u>CSS</u>, <u>JS</u>, <u>Bootstrap</u> and also
                  <u>Vue.JS</u> and even more technologies.</strong
                ></em
              ><br />
              Sure we are not masters, some may spend years and years of their
              lives on programming<br />
              and yet there are a lot of things they will have to learn<br />
            </p>
            <h4>
              So what are we providing in regards to not being masters? Stick
              with us and you'll know in any minutes!
            </h4>
          </section>
        </base-card>
      </div>
    </div>
    <hr />
    <div id="theSecondDividerBackground">
      <!--The second divider background should be placed here, between skills and why-us section-->
    </div>
    <hr />
    <div id="whyUsArticle">
      <base-card>
        <header>
          <h1>
            <strong><em>You might as well wondered why us?!</em></strong>
          </h1>
        </header>
        <section>
          <p>
            If you read through the whole articles, chances are, you<br />
            already know that <u>we aren't the best</u> at what we are doing<br />
            , although in 90 percent of the times,
            <em><strong>what you really need is not</strong></em
            ><br />
            the best in the business, and <em><strong>not even</strong></em> the
            best technologies.<br />
            To be honest with you, human kind and the society that we are living
            in<br />
            requires something innovative and original to be put into operation,
            <br />
            and in the fastest and cheapest way! Still wondering?!<br />
          </p>
          <ul>
            <li>
              In case if you are convinced => Go ahead and check out our
              <span @click="$emit('home-page-shop')"
                ><u style="color: blue">shop and plans</u></span
              >
            </li>
            <li>
              Not convinced?! => You can wait until our
              <span @click="$emit('home-page-project')"
                ><u style="color: blue">other projects</u></span
              >
              release<br />
              <strong>(Although the prices may be unstable)</strong>
            </li>
            <li>
              Still sleeping over it?! => You can
              <span @click="$emit('home-page-contact')"
                ><u style="color: blue">contact us</u></span
              >
              for more information after visiting
              <span @click="$emit('home-page-shop')"
                ><u style="color: blue">our shop</u></span
              >!
            </li>
          </ul>
        </section>
      </base-card>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["home-page-shop", "home-page-contact", "home-page-project"],
  data() {
    return {
      specifiedId: "homePageTemplate",
    };
  },
};
</script>

<style scoped>
#homePageTemplate {
  margin: 0 0.5rem;
  max-width: 100%;
  border-radius: 1px;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
hr {
  border-style: none;
  border-top: 7px dotted grey;
  max-width: 10%;
}

/*  */
/* #firstImp{
  background-color: #000000;
}
#firstImp ~ h3 {
  position: relative;
  font-family: Impact, sans-serif;
  font-size: 45px;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #90ee90, #fff, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 5s infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
}
@keyframes animate {
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
} */

</style>