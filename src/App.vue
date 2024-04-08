<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";

type SocialMedia = {
  icon: string;
  text: string;
  url: string;
};

const socialMedias: Array<SocialMedia> = [
  {
    icon: faGithub,
    text: "Github",
    url: "https://github.com/rayblair06",
  },
  {
    icon: faLinkedin,
    text: "Linkedin",
    url: "https://www.linkedin.com/in/rayblair06/",
  },
];
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <div class="text-center">
      <h1 class="uppercase tracking-wider text-5xl font-light mb-2">
        Ray Blair
      </h1>

      <h2 class="uppercase tracking-wider text-3xl font-bold">
        Software Engineer
      </h2>

      <img
        class="mt-4 mb-8 w-56 h-56 rounded-[50%] border-[1px] border-solid border-black mx-auto"
        sizes="(max-width: 800px) 100vw, 800px"
        srcset="
          /images/1675778361600_l6miom_c_scale_w_200.webp 200w,
          /images/1675778361600_l6miom_c_scale_w_514.webp 514w,
          /images/1675778361600_l6miom_c_scale_w_775.webp 775w,
          /images/1675778361600_l6miom_c_scale_w_800.webp 800w
        "
        src="/images/1675778361600_l6miom_c_scale_w_800.webp"
        alt="Ray Blair"
      />

      <div class="px-12">
        <template v-for="socialMedia in socialMedias" :key="socialMedia.text">
          <a
            :href="socialMedia.url"
            target="_blank"
            :aria-label="`Ray Blair's ${socialMedia.text}`"
            class="flex items-center justify-between w-full h-10 bg-slate-50 rounded-lg text-[#494d55] mb-4 pl-2 font-light tracking-widest uppercase py-4"
          >
            {{ socialMedia.text }}

            <span class="fa-stack fa-sm">
              <font-awesome-icon
                class="fa-stack-1x text-xl text-[#494d55]"
                :icon="socialMedia.icon"
              ></font-awesome-icon>
            </span>
          </a>
        </template>
      </div>
    </div>
  </div>
</template>
