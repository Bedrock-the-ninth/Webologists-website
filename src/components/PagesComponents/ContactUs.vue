<template>
  <div id="contactUsTemplate">
    <div id="waysOfCommunication">
      <!-- Background picture of a panada sitting behind a desk!!! -->
      <base-card>
        <header>
          <h2>Contact us for any info you need about us</h2>
        </header>
        <article>
          <h4>Even if you need some help with debuging</h4>
          <p>
            Or any other thing that you think can be related to us<br />
            doesn't matter what it is, you can join our communities<br />
            (our Discord one is highly recommended) or contact us through<br />
            the mentioned ways of communication. Also in this way you can <br />
            become aware of our occasional discounts. Here are the links:
          </p>
          <ul>
            <li>
              Our <a href="https://discord.gg/NyYgfsY9FQ">Discord</a> server.
            </li>
            <li>
              Our
              <a href="https://www.instagram.com/webologists/"
                >Instagram page</a
              >
            </li>
            <li>Our <a href="https://t.me/webologists">Telegram channel</a></li>
            <li>
              Communicating indirectly through our
              <a href="https://t.me/webologists">Telegram bot</a>
            </li>
          </ul>
        </article>
      </base-card>
    </div>
    <hr />
    <br />
    <article class="email-article">
      <h2>There is always the direct email way!</h2>
      <p>You may enter your name and email to contact us through email.</p>
      <contact-form></contact-form>
    </article>
  </div>
</template>

<script>
import ContactForm from "../Layout/TheContactForm.vue";
export default {
  components: { ContactForm },
};
</script>

<style scoped>
#contactUsTemplate {
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
ul {
  list-style: lower-alpha;
}
a:visited {
  color: blue;
}
.email-article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 30rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
}

</style>