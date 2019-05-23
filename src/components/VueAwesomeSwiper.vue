<template>
  <v-container
    full-height
  >
    <v-layout>
      <v-flex xs12 sm12>
        <swiper :options="swiperOption">
          <swiper-slide
            v-for="(m, i) in markdowns"
            :key="i"
          >
            <marp-renderer :markdown="m"></marp-renderer>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { MarpRenderer } from '@marp-team/marp-vue';

let markdowns = [`
# Marp Vue example <!--fit-->

![bg right 40%](https://vuejs.org/images/logo.png)
![bg right 40%](https://cdn.vuetifyjs.com/images/logos/v-alt.svg)

@ [linnefromice](https://github.com/linnefromice)
`
,
`
![bg](#f0fff8)

### Custom template

You can use custom template to render slide.

Try **/w Presenter notes** mode by select box at the top.
`
,
`
### Working with library/frameworks

You can use vue with other library/frameworks:

- [Vuetify](https://vuetifyjs.com/) ... Design Framework
- [marp](https://github.com/marp-team) ... The ecosystem to write your presentation with plain Markdown
- [vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper) ... Making Slide Framework for Vue 
`
,
`
![bg](#f80800)

# Page1
`
,
`
![bg](#08f800)

# Page2
`
,
`
![bg](#0800f8)

# Page3
`
,
`
# Page4
`
];

export default {
  components: {
    MarpRenderer,
  },
  data() {
    return {
      markdowns,

      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        keyboard: {
          enabled: true,
          onlyInViewPort: false,
        },
      }
    }
  }
}

</script>
