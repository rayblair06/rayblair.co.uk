<template>
  <div class="container-item">
    <h1>Ray Blair</h1>
    <h2>Software Engineer</h2>
    <h3>Software Engineer</h3>
    <img src="images/ray1.jpg" alt="Me!" />
    <div id="social-icons">
      <a href="https://github.com/rayblair06" target="_blank">
        <span class="fa-stack fa-sm" style="vertical-align: top">
          <i class="fas fa-circle fa-stack-2x fa-inverse"></i>
          <i
            style="color: #494d55; font-size: 1.2em"
            class="fab fa-github fa-stack-1x"
          ></i>
        </span>
      </a>
      <a href="https://twitter.com/rayblair06" target="_blank">
        <span class="fa-stack fa-sm" style="vertical-align: top">
          <i class="fas fa-circle fa-stack-2x"></i>
          <i
            style="color: #494d55; font-size: 1.2em"
            class="fab fa-twitter fa-stack-1x fa-inverse"
          ></i>
        </span>
      </a>
      <a href="https://www.instagram.com/rayblair06/" target="_blank">
        <span class="fa-stack fa-sm" style="vertical-align: top">
          <i class="fas fa-circle fa-stack-2x"></i>
          <i
            style="color: #494d55; font-size: 1.2em"
            class="fab fa-instagram fa-stack-1x fa-inverse"
          ></i>
        </span>
      </a>
      <a href="https://www.linkedin.com/in/rayblair06/" target="_blank">
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
</template>

<style>
html,
body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #fff;
  height: 100%;
  width: 100%;
  overflow: hidden !important;
}

.container {
  display: table;
  height: 100%;
  width: 100%;
  max-width: 100% !important;
  background: #1c92d2;
  background: -webkit-linear-gradient(to top, #abecf9, #1762a1);
  background: linear-gradient(to top, #abecf9, #1762a1);

  position: relative;
}

@media only screen and (max-width: 480px) {
  .container {
  }

  h2 {
    display: none;
  }

  h3 {
    display: block !important;
  }
}

.container-item {
  height: 440px;
  width: 100%;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

img {
  margin-bottom: 25px;
  width: 150px;
  height: 150px;
  max-width: 95%;
  border-radius: 50%;
  border: 1px solid #000;
}

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
}

h3 {
  display: none;
  margin: 15px 15px 15px 15px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 350;
  letter-spacing: 2px;
  font-size: 1.4em;
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
