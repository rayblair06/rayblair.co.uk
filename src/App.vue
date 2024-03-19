<script setup lang="ts">
type SocialMedia = {
  icon: string;
  text: string;
  url: string;
};

const socialMedias: Array<SocialMedia> = [
  // {
  //   icon: "fas fa-paper-plane",
  //   text: "Blog",
  //   url: "/blog",
  // },
  {
    icon: "fab fa-github",
    text: "Github",
    url: "https://github.com/rayblair06",
  },
  {
    icon: "fab fa-linkedin",
    text: "Linkedin",
    url: "https://www.linkedin.com/in/rayblair06/",
  },
  {
    icon: "fab fa-twitter",
    text: "Twitter",
    url: "https://twitter.com/rayblair06",
  },
  {
    icon: "fab fa-instagram",
    text: "Instagram",
    url: "https://www.instagram.com/rayblair06/",
  },
];
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <div class="text-center">
      <h1 class="uppercase tracking-wider text-4xl font-light mb-2">
        Ray Blair
      </h1>
      <h2 class="uppercase tracking-wider text-2xl font-bold">
        Software Engineer
      </h2>

      <img
        class="mt-4 mb-8 w-[150px] h-[150px] max-w-[95%] rounded-[50%] border-[1px] border-solid border-black mx-auto"
        sizes="(max-width: 800px) 100vw, 800px"
        srcset="
          /images/1675778361600_l6miom_c_scale_w_200.jpg 200w,
          /images/1675778361600_l6miom_c_scale_w_514.jpg 514w,
          /images/1675778361600_l6miom_c_scale_w_775.jpg 775w,
          /images/1675778361600_l6miom_c_scale_w_800.jpg 800w
        "
        src="/images/1675778361600_l6miom_c_scale_w_800.jpg"
        alt="Ray Blair"
      />

      <div id="social-icons" class="px-8">
        <template v-for="socialMedia in socialMedias" :key="socialMedia.text">
          <a
            :href="socialMedia.url"
            target="_blank"
            :aria-label="`Ray Blair's ${socialMedia.text}`"
            class="flex items-center justify-between w-full h-[25px] bg-slate-50 rounded-lg text-[#494d55] mb-3 pl-2 font-light tracking-wider text-sm uppercase py-4"
          >
            {{ socialMedia.text }}

            <span class="fa-stack fa-sm">
              <i class="fas fa-circle fa-stack-2x fa-inverse"></i>
              <i
                :class="`${socialMedia.icon} fa-stack-1x text-[1.2rem] text-[#494d55]`"
              ></i>
            </span>
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// a {
//   display: block;
//   font-weight: 750;
//   color: #fff;
//   font-size: 1.2em;
//   letter-spacing: 1px;
//   text-transform: uppercase;
//   text-decoration: none;
// }

// a:hover {
//   display: block;
//   color: #ededed;
//   font-size: 1.2em;
//   letter-spacing: 1px;
//   font-weight: 750;
//   text-transform: uppercase;
//   text-decoration: none;
// }

// #social-icons {
//   display: block;
//   margin-top: 0;
// }

// #social-icons a {
//   display: inline-block;
//   opacity: 1;
//   transition: all 1s;
// }

// #social-icons a:hover {
//   display: inline-block;
//   opacity: 0.4;
// }

// #social-icons img {
//   margin: 5px;
//   color: #fff;
//   width: 25px;
//   height: 25px;
//   border: none;
//   border-radius: 0;
// }
</style>
