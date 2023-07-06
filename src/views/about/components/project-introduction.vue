<template>
  <n-card :bordered="false" size="large" class="rounded-8px shadow-sm h-100%" style="overflow: hidden">
    <div class="row">
      <div class="col-12" style="overflow: hidden">
        <div class="dots"></div>
        <div class="row justify-content-center">
          <div class="col-md-7 text-center mb-5">
            <h1 style="font-size: 30px; font-weight: 800; color: #000">
              致力于IDMP数字化设计标准
              <span class="d-block"></span>
              <span class="d-block"></span>
              智能探索研究
            </h1>
            <!--  <h1 class="heading aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
              致力于软件行业设计标准
              <span class="d-block"></span>
              人工智能探索研究
              <span class="d-block"></span>
            </h1> -->
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-4">
            <div class="intro">
              <div class="excerpt aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <span class="caption">IDMP智慧数字化管理平台</span>
                <h2 class="font-weight-bold">平台简介</h2>
                <p>
                  IDMP智慧数字化管理平台是一款面向企业的全面管理解决方案。该平台整合了先进的信息技术、物联网和大数据分析等技术，旨在帮助企业实现数字化转型、提升管理效率和释放潜力。
                </p>
                <!-- <p>提供前沿的人工智能讯息和工具使用。</p> -->
              </div>
              <p data-aos="fade-up" data-aos-delay="200" class="aos-init aos-animate">
                <a href="#features-section" class="btn btn-primary smoothscroll mr-1">服务</a>
                <a href="#pricing-section" class="btn btn-outline-primary smoothscroll">定价</a>
              </p>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="illustration">
              <img src="https://standardspace.top/static/picture/graphs-statistics_outline.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </n-card>
</template>

<script setup lang="ts">
defineOptions({ name: 'ProjectIntroduction' });
</script>

<style scoped>
h1,
h2 {
  margin-top: 0;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

a {
  text-decoration: none;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}

a:not([href]) {
  color: inherit;
  text-decoration: none;
}

a:not([href]):hover {
  color: inherit;
  text-decoration: none;
}

img {
  vertical-align: middle;
  border-style: none;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

h2 {
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

h2 {
  font-size: 2rem;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-12,
.col-lg-4,
.col-lg-8,
.col-md-7 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.col-12 {
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
}

@media (min-width: 768px) {
  .col-md-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
}

@media (min-width: 992px) {
  .col-lg-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-lg-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
}

.btn {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}

.btn:hover {
  color: #212529;
  text-decoration: none;
}

.btn.focus,
.btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn.disabled,
.btn:disabled {
  opacity: 0.65;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
}

.btn-primary:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}

.btn-primary.focus,
.btn-primary:focus {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}

.btn-primary.disabled,
.btn-primary:disabled {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:not(:disabled):not(.disabled).active,
.btn-primary:not(:disabled):not(.disabled):active,
.show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #0062cc;
  border-color: #005cbf;
}

.btn-primary:not(:disabled):not(.disabled).active:focus,
.btn-primary:not(:disabled):not(.disabled):active:focus,
.show > .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}

.btn-outline-primary:hover {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary.focus,
.btn-outline-primary:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.btn-outline-primary.disabled,
.btn-outline-primary:disabled {
  color: #007bff;
  background-color: transparent;
}

.btn-outline-primary:not(:disabled):not(.disabled).active,
.btn-outline-primary:not(:disabled):not(.disabled):active,
.show > .btn-outline-primary.dropdown-toggle {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary:not(:disabled):not(.disabled).active:focus,
.btn-outline-primary:not(:disabled):not(.disabled):active:focus,
.show > .btn-outline-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }

  to {
    background-position: 0 0;
  }
}

@keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }

  to {
    background-position: 0 0;
  }
}

@-webkit-keyframes spinner-border {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spinner-border {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-webkit-keyframes spinner-grow {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  50% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes spinner-grow {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  50% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.d-block {
  display: block !important;
}

.justify-content-center {
  -ms-flex-pack: center !important;
  justify-content: center !important;
}

.align-items-center {
  -ms-flex-align: center !important;
  align-items: center !important;
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sticky-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}

.mr-1 {
  margin-right: 0.25rem !important;
}

.mb-5 {
  margin-bottom: 3rem !important;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.text-center {
  text-align: center !important;
}

.font-weight-bold {
  font-weight: 700 !important;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@supports (padding: max(0px)) {
  .fancybox-caption {
    padding: 75px max(44px, env(safe-area-inset-right)) max(25px, env(safe-area-inset-bottom))
      max(44px, env(safe-area-inset-left));
  }
}

@keyframes a {
  to {
    transform: rotate(1turn);
  }
}

@media (max-height: 576px) {
  @supports (padding: max(0px)) {
    .fancybox-caption {
      padding-left: max(12px, env(safe-area-inset-left));
      padding-right: max(12px, env(safe-area-inset-right));
    }
  }
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
}

[data-aos][data-aos][data-aos-delay='100'].aos-animate {
  transition-delay: 0.1s;
}

[data-aos][data-aos][data-aos-delay='200'].aos-animate {
  transition-delay: 0.2s;
}

body[data-aos-duration='800'] [data-aos] {
  transition-duration: 0.8s;
}

[data-aos^='fade'][data-aos^='fade'] {
  transition-property: opacity, transform;
}

[data-aos^='fade'][data-aos^='fade'].aos-animate {
  opacity: 1;
  transform: translate(0);
}

body {
  font-family: work sans, sans-serif;
  line-height: 1.6;
  background: #fff;
  overflow-x: hidden;
  font-size: 16px;
  color: #18233f;
  letter-spacing: normal;
}

body:before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}

a {
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
}

a:hover {
  color: #107be9;
  text-decoration: none;
}

::selection {
  background: #000;
  color: #fff;
}

h1,
h2 {
  font-family: work sans, sans-serif;
  color: #000;
}

.btn {
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 30px;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 700;
}

.btn:active,
.btn:focus {
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

.btn.btn-primary {
  background: #107be9;
  border-color: #107be9;
}

.btn.btn-primary:hover {
  border-color: #1e85f0;
  background: #1e85f0;
}

.btn.btn-outline-primary {
  border-color: #107be9;
  color: #107be9;
}

.btn.btn-outline-primary:hover {
  background-color: #107be9;
  color: #fff;
}

.untree_co-hero {
  position: relative;
}

.untree_co-hero,
.untree_co-hero > .container > .row {
  padding: 6rem 0;
}

@media (max-width: 991.98px) {
  .untree_co-hero {
    text-align: center;
  }
}

.untree_co-hero .heading {
  line-height: 1;
  font-weight: 700;
  color: #000;
  margin-bottom: 30px;
  font-size: clamp(2rem, 2.5vw, 4rem);
}

.untree_co-hero .dots {
  position: absolute;
  width: 100%;
  height: 200%;
}

.untree_co-hero .dots:before {
  z-index: -1;
  right: 0;
  -webkit-transform: translateX(60%);
  -ms-transform: translateX(60%);
  transform: translateX(60%);
  position: absolute;
  content: '';
  width: 304px;
  height: 264px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATAAAAEICAYAAADY0qgzAAAABGdBTUEAALGPC/xhBQAAByZJREFUeAHt3UFywjAMBVDS0/j+p+E2LWVlVGJHQ+jIw+sKg9pxnxQtP9v1ev2+dD+tta07pl/6e/wyQ2NezMsr8/KV+WW1BAgQqCRggVXqhrsQIJASsMBSXIoJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBX4FNJrlM8syjYF7MS6V5kcia6YZaAgRKCVhgpdrhMgQIZAQssIyWWgIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQOAuIBO/yTjPPAsy8c1LpXmRyJrphloCBEoJWGCl2uEyBAhkBCywjJZaAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBA4C4gE18mfupRkIkvEz8zMO+eF4msmW6oJUCglIAFVqodLkOAQEbAAstoqSVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTuAjLxZeKnHoV3Z5w3/dCPgUCcP4msAywfESBQW8ACq90ftyNAYCBggQ1wfESAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAg8F5CJL4P9+WTsvBszyWXY70DtvM2vbTs0h96OfhJZD7EpIkCgooAFVrEr7kSAwCEBC+wQkyICBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgF5CJLxO/n4fp65hJLhN/SvZQwE8m/sNAOBAg8LkCIqU/t/f+cwLLC1hgy7fQP0CAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBP5fQCa+TPzU1Ml0PzfT3XcKpMbvEudPImvOTzUBAoUELLBCzXAVAgRyAhZYzks1AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgcBOQiS8TP/UgxExyme4pvj+Z7vxe85PImvNTTYBAIQELrFAzXIUAgZyABZbzUk2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAjcBGTiy8RPPQgy8duWAgvF/M71k8gaBsyRAIF1BCywdXrlpgQIBAELLIA4EiBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAnMBmfgy8edT0lXIdD83072Zv2665i/j/ElknZupIECgqIAFVrQxrkWAwFzAApsbqSBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgSCgEx8meRhJMbHmEku033sFT/ld+53CkhkjRPmTIDAMgIW2DKtclECBKKABRZFnAkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIGpgEx8mfjTIekLZLqfm+nuOwX66Zq/jvMnkXVupoIAgaICFljRxrgWAQJzAQtsbqSCAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQCAIy8WXih5EYH2MmuUz3sVf8lN+53ykgkTVOmDMBAssIWGDLtMpFCRCIAhZYFHEmQGAZgR+9YHnygEvWTgAAAABJRU5ErkJggg==)
    right top;
}

.untree_co-hero .intro {
  position: relative;
  z-index: 2;
}

@media (max-width: 991.98px) {
  .untree_co-hero .intro {
    padding-right: 0;
  }
}

.untree_co-hero .excerpt {
  margin-bottom: 30px;
}

.caption {
  color: #107be9;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
}
</style>
