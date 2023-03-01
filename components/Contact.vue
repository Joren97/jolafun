<template>
  <section id="contact">
    <div class="container">
      <h3>Contacteer ons</h3>
      <ul class="feature-icons">
        <li class="icon solid fa-phone-alt">
          <a href="tel:0477066254">0477 06 62 54</a>
        </li>
        <li class="icon solid fa-envelope">
          <a href="mailto:info@jolafun.be">info@jolafun.be</a>
        </li>
      </ul>
      <form method="post" action="#">
        <div class="row gtr-uniform">
          <div class="col-6 col-12-xsmall">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Naam"
              v-model="name"
            />
          </div>
          <div class="col-6 col-12-xsmall">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              v-model="email"
            />
          </div>
          <div class="col-12">
            <textarea
              v-model="message"
              name="message"
              id="message"
              placeholder="Bericht"
              rows="6"
            ></textarea>
          </div>
          <div class="col-12">
            <ul class="actions">
              <li>
                <b-button class="primary" @click="submitContact">
                  Verzenden
                </b-button>
              </li>
              <li>
                <b-button @click="clear">Leegmaken</b-button>
              </li>
              <li>
                  <span :class="`has-text-${$store.state.contact.status}`">
                    {{ $store.state.contact.feedback }}
                  </span>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    name: null,
    email: null,
    message: null,
    feedback: null,
  }),
  async mounted() {
    try {
      await this.$recaptcha.init();
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    async submitContact() {
      try {
        await this.$recaptcha.execute("submit");
        let formData = new FormData();
        formData.append("your-name", this.name);
        formData.append("your-email", this.email);
        formData.append("your-message", this.message);
        this.$store.dispatch("contact/submit", formData).then(() => {{
            this.clear();
        }});
      } catch (error) {
        console.log(error);
      }
    },
    clear() {
      this.name = null;
      this.email = null;
      this.message = null;
    },
  },
};
</script>
