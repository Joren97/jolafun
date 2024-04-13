<template>
  <div>
    <!-- Header -->
    <section id="header">
      <header>
        <span class="image avatar"
          ><img src="~/assets/images/logo-white-bg.svg" alt=""
        /></span>
        <p id="logo"><a href="#">JOLAFUN</a></p>
        <p>
          <a href="mailto:info@jolafun.be">info@jolafun.be</a><br />
          <a href="tel:0477066254">0477 06 62 54</a>
        </p>
      </header>
      <nav id="nav">
        <ul>
          <li>
            <a
              href="#home"
              :class="{ active: activeLink == 'home' }"
              @click="clickNav('home')"
              v-smooth-scroll
              >Home</a
            >
          </li>
          <li>
            <a
              href="#springkastelen"
              :class="{ active: activeLink == 'springkastelen' }"
              @click="clickNav('springkastelen')"
              v-smooth-scroll
              >Springkastelen</a
            >
          </li>
          <li>
            <a
              href="#reuzespelen"
              :class="{ active: activeLink == 'reuzespelen' }"
              @click="clickNav('reuzespelen')"
              v-smooth-scroll
              >Reuzespelen</a
            >
          </li>
          <li>
            <a href="https://figofun.be" rel="noreferrer" target="_blank"
              >Gekke fietsen</a
            >
          </li>
          <li>
            <a
              href="#contact"
              :class="{ active: activeLink == 'contact' }"
              @click="clickNav('contact')"
              v-smooth-scroll
              >Contact</a
            >
          </li>
        </ul>
      </nav>
      <footer>
        <ul class="icons">
          <li>
            <a
              href="https://www.facebook.com/Jolafun-104717328624812"
              rel="noreferrer"
              class="icon brands fa-facebook-f is-clickable"
              ><span class="label">Facebook</span></a
            >
          </li>
          <li>
            <a
              href="https://www.instagram.com/jolafun/"
              rel="noreferrer"
              class="icon brands fa-instagram is-clickable"
              ><span class="label">Instagram</span></a
            >
          </li>
          <li>
            <a href="mailto:info@jolafun.be" class="icon solid fa-envelope is-clickable"
              ><span class="label">E-mail</span></a
            >
          </li>
        </ul>
      </footer>
    </section>

    <!-- Wrapper -->
    <div id="wrapper">
      <!-- Main -->
      <div id="main">
        <!-- One -->
        <section id="home">
          <div class="image main" data-position="center">
            <img src="~/assets/images/cover-desktop.png" alt="" />
          </div>
          <div class="container">
            <header class="major">
              <h1>JOLAFUN</h1>
              <h2>Verhuur van springkastelen &amp; reuzespelen.</h2>
            </header>
            <ul class="feature-icons">
              <li class="icon solid fa-phone-alt">
                <a href="tel:0477066254">0477 06 62 54</a>
              </li>
              <li class="icon solid fa-envelope">
                <a href="mailto:info@jolafun.be">info@jolafun.be</a>
              </li>
            </ul>
          </div>
        </section>

        <section id="springkastelen">
          <div class="container">
            <h3>Onze springkastelen</h3>
            <div class="features">
              <Item
                title="Walter de worm"
                image="worm/worm-3.webp"
                @showGallery="showGallery('worm')"
              >
                <p>Afmetingen: 3,5m x 4,5m<br />Huurprijs: &euro; 90 per dag</p>
                <p>Optie: babyborrel (zie foto's)</p>
              </Item>
              <Item
                title="Voetbal"
                image="voetbal/voetbal-1.webp"
                @showGallery="showGallery('voetbal')"
              >
                <p>Afmetingen: 4m x 4m<br />Huurprijs: &euro; 100 per dag</p>
              </Item>
              <Item
                title="Fred de eend"
                image="fred/fred-thumbnail.webp"
                @showGallery="showGallery('fred')"
              >
                <p>Afmetingen: 5m x 5,5m<br />Huurprijs: &euro; 110 per dag</p>
              </Item>
              <Item
                title="Kamiel de leeuw"
                image="kamiel/kamiel-1.webp"
                @showGallery="showGallery('kamiel')"
              >
                <p>Afmetingen: 5m x 5,5m<br />Huurprijs: &euro; 115 per dag</p>
              </Item>
              <Item
                title="Maurice het nijlpaard"
                image="maurice/maurice-1.webp"
                @showGallery="showGallery('maurice')"
              >
                <p>Afmetingen: 6m x 7m<br />Huurprijs: &euro; 120 per dag</p>
              </Item>
              <Item
                title="Tito de clown"
                image="clown/clown-1.webp"
                @showGallery="showGallery('clown')"
              >
                <p>Afmetingen: 5m x 5,5m<br />Huurprijs: &euro; 125 per dag</p>
              </Item>
              <!-- <article>
                <div class="image">
                  <img src="~/assets/images/blurred.webp" alt="" />
                </div>
                <div class="inner">
                  <h4>Binnenkort beschikbaar</h4>
                </div>
              </article> -->
            </div>

            <p class="is-italic">
              Gratis levering in Geel of binnen een straal van 15 kilometer.
            </p>
          </div>
        </section>

        <section id="reuzespelen">
          <div class="container">
            <h3>Onze reuzespelen</h3>
            <div class="features">
              <Item title="Balwerpen" :price="15" image="balwerpen-1.jpeg" />
              <Item title="Jenga" :price="15" image="jenga-1.jpeg" />
              <Item
                title="Knikkerbaan - Smurfen"
                :price="15"
                image="knikkerbaan-1.jpeg"
              />
              <Item
                title="Knikkerbaan - Simpsons"
                :price="10"
                image="knikkerbaan-2.jpeg"
              />
              <Item title="Paardjesspel" :price="10" image="mejn-1.jpeg" />
              <Item title="Mikado" :price="15" image="mikado-2.jpeg" />
              <Item title="Vier op een rij" :price="25" image="voer-1.jpeg" />
              <Item title="Ringwerpen" :price="15" image="ringwerpen-1.jpeg" />
            </div>
            <p class="is-italic">
              Levering van de reuzespelen is mogelijk in combinatie met een springkasteel.
              Voor afhalen kan je steeds bellen.
            </p>
          </div>
        </section>

        <Contact />
      </div>

      <!-- Footer -->
      <Footer />
    </div>
    <b-modal v-model="isImageModalActive">
      <b-carousel
        :autoplay="false"
        :indicator="false"
        :overlay="gallery"
        @click="switchGallery(true)"
      >
        <b-carousel-item v-for="(item, i) in galleryToShow.items" :key="i">
          <figure class="image">
            <img :src="require(`~/assets/images/${galleryToShow.folder}/${item}.webp`)" />
            <!-- <img :src="item.image"> -->
          </figure>
        </b-carousel-item>
        <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-large" />
        <template #list="props">
          <b-carousel-list
            v-model="props.active"
            :data="items"
            @switch="props.switch($event, false)"
            as-indicator
          />
        </template>
      </b-carousel>
    </b-modal>

    <div id="titleBar">
      <a href="#header" class="toggle" @click="headerVisible = !headerVisible"></a
      ><span class="title"><a href="#">JOLAFUN</a></span>
    </div>
  </div>
</template>

<script>
import Item from "~/components/Item.vue";
import Contact from "~/components/Contact.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: { Item, Contact, Footer },
  head() {
    return {
      title: "Jolafun - Verhuur van springkastelen en meer",
      bodyAttrs: {
        class: this.headerVisible ? "header-visible" : "",
      },
      link: [
        {
          rel: "canonical",
          href: "https://www.jolafun.be",
        },
      ],
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      items: ["worm/worm-3.webp"],
      gallery: false,
      isImageModalActive: false,
      activeLink: "home",
      headerVisible: false,
      galleryToShow: {
        folder: "",
        items: [],
      },
      galleries: [
        {
          folder: "worm",
          items: ["worm-3", "worm-1"],
        },
        {
          folder: "voetbal",
          items: ["voetbal-1", "voetbal-2", "voetbal-3"],
        },
        {
          folder: "maurice",
          items: ["maurice-1", "maurice-2", "maurice-3"],
        },
        {
          folder: "kamiel",
          items: ["kamiel-1", "kamiel-2", "kamiel-3", "kamiel-4", "kamiel-5", "kamiel-6"],
        },
        {
          folder: "fred",
          items: ["fred-1", "fred-2", "fred-3", "fred-4", "fred-5"],
        },
        {
          folder: "clown",
          items: ["clown-1", "clown-2", "clown-3", "clown-4", "clown-5", "clown-6"],
        },
      ],
    };
  },
  computed: {
    selectedGallery() {
      return this.galleries.find((x) => x.folder == this.galleryToShow);
    },
  },
  methods: {
    switchGallery(value) {
      this.gallery = value;
      if (value) {
        return document.documentElement.classList.add("is-clipped");
      } else {
        return document.documentElement.classList.remove("is-clipped");
      }
    },
    showGallery(folder) {
      this.galleryToShow = this.galleries.find((x) => x.folder == folder);
      this.isImageModalActive = true;
    },
    clickNav(item) {
      this.activeLink = item;
      this.headerVisible = false;
    },
    handleScroll() {
      const yPos = window.scrollY + window.outerHeight / 2;

      if (yPos >= document.getElementById("home").offsetTop) {
        this.activeLink = "home";
      }

      if (yPos >= document.getElementById("springkastelen").offsetTop) {
        this.activeLink = "springkastelen";
      }

      if (yPos >= document.getElementById("reuzespelen").offsetTop) {
        this.activeLink = "reuzespelen";
      }

      if (yPos >= document.getElementById("contact").offsetTop) {
        this.activeLink = "contact";
      }
    },
  },
};
</script>
