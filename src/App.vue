<template>
  <div
    class="table h-full w-full max-w-full bg-[#1c92d2] bg-gradient-to-t from-[#abecf9] to-[#1762a1] relative"
  >
    <div
      class="h-[440px] w-full table-cell align-middle text-center ml-auto mg-auto"
    >
      <h1>Ray Blair</h1>
      <h2>Software Engineer</h2>

      <!-- <img
        class="mb-[25px] w-[150px] h-[150px] max-w-[95%] rounded-[50%] border-[1px] border-solid border-black"
        sizes="(max-width: 150px) 100vw, 150px"
        srcset="images/ray1_s8qhu4.jpg 150w"
        src="/images/ray1_s8qhu4.jpg"
        alt="Ray Blair"
      /> -->

      <div id="social-icons">
        <a
          href="https://github.com/rayblair06"
          target="_blank"
          aria-label="Ray Blair's Github"
        >
          <span class="fa-stack fa-sm" style="vertical-align: top">
            <i class="fas fa-circle fa-stack-2x fa-inverse"></i>
            <i
              style="color: #494d55; font-size: 1.2em"
              class="fab fa-github fa-stack-1x"
            ></i>
          </span>
        </a>

        <a
          href="https://twitter.com/rayblair06"
          target="_blank"
          aria-label="Ray Blair's Twitter"
        >
          <span class="fa-stack fa-sm" style="vertical-align: top">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i
              style="color: #494d55; font-size: 1.2em"
              class="fab fa-twitter fa-stack-1x fa-inverse"
            ></i>
          </span>
        </a>

        <a
          href="https://www.instagram.com/rayblair06/"
          target="_blank"
          aria-label="Ray Blair's Instagram"
        >
          <span class="fa-stack fa-sm" style="vertical-align: top">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i
              style="color: #494d55; font-size: 1.2em"
              class="fab fa-instagram fa-stack-1x fa-inverse"
            ></i>
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/rayblair06/"
          target="_blank"
          aria-label="Ray Blair's Linkedin"
        >
          <span class="fa-stack fa-sm" style="vertical-align: top">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i
              style="color: #494d55; font-size: 1.2em"
              class="fab fa-linkedin fa-stack-1x fa-inverse"
            ></i>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
h1 {
  margin: -50px 15px 15px 15px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  font-size: 2.6em;
}

h2 {
  margin: 15px 15px 50px 15px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 350;
  letter-spacing: 2px;
  font-size: 1.4em;

  @media only screen and (max-width: 480px) {
    margin: 15px 15px 15px 15px;
  }
}

a {
  display: block;
  font-weight: 750;
  color: #fff;
  font-size: 1.2em;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}

a:hover {
  display: block;
  color: #ededed;
  font-size: 1.2em;
  letter-spacing: 1px;
  font-weight: 750;
  text-transform: uppercase;
  text-decoration: none;
}

#social-icons {
  display: block;
  margin-top: 0;
}

#social-icons a {
  display: inline-block;
  opacity: 1;
  transition: all 1s;
}

#social-icons a:hover {
  display: inline-block;
  opacity: 0.4;
}

#social-icons img {
  margin: 5px;
  color: #fff;
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 0;
}
</style>
