<template>
  <div class="other-section">
    <div class="sticky-container">
      <div class="iphone black">
        <h3>
          Comes in Black.<br />
          &nbsp;
        </h3>
        <img src="https://www.apple.com/v/iphone-se/b/images/overview/finishes_black__b06syayq94wi_medium_2x.png" />
      </div>
      <div class="iphone white">
        <h3>
          Comes in Black.<br />
          <span>White</span>
        </h3>
        <img src="https://www.apple.com/v/iphone-se/b/images/overview/finishes_white__drv9fwq9vzwy_medium_2x.png" />
      </div>
      <div class="iphone red">
        <h3>
          Comes in Black.<br />
          White. <span>And Pow.</span>
        </h3>
        <img src="https://www.apple.com/v/iphone-se/b/images/overview/finishes_red__eqfv1ongy282_medium_2x.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', () => {
        let noStickyOffset = $(window).height() * 2
        let SEcolorscrolled = ($(window).scrollTop() - 14797) / noStickyOffset
        this.iphoneClolrs(SEcolorscrolled)
      })
    })
  },
  methods: {
    iphoneClolrs(SEcolorscrolled) {
      let $white = $('.white')[0]
      let $red = $('.red')[0]
      $white.style.clipPath = `inset(${((0.5 - SEcolorscrolled) / 0.5) * 100}% 0 0 0 )`
      $red.style.clipPath = `inset(${((1 - SEcolorscrolled) / 0.5) * 100}% 0 0 0 )`
      if (SEcolorscrolled >= 1) {
        $('.sticky-container').addClass('no-sticky')
      } else {
        $('.sticky-container').removeClass('no-sticky')
      }
    },
  },
  name: 'IphoneSEcolor',
}
</script>

<style stope>
.other-section {
  height: 3530px;
  --iphone-black-bg: #000;
  --iphone-black-text: #f2f2f2;

  --iphone-white-bg: #fff;
  --iphone-white-text: #8b8b99;
  --iphone-white-text-highlight: #1d1d1f;

  --iphone-red-bg: #960b19;
  --iphone-red-text: #e57571;
  --iphone-red-text-highlight: #f5f5f7;

  --iphone-width: 460px;
  --iphone-offscreen: -720px;
}
.sticky-container {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.sticky-container .iphone {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
.sticky-container .iphone h3 {
  width: var(--iphone-width);
  font-size: 48px;
  margin: 0 0 60px 0;
}
.sticky-container .iphone img {
  display: block;
  width: var(--iphone-width);
  margin-bottom: var(--iphone-offscreen);
}

.sticky-container .iphone.black {
  background-color: var(--iphone-black-bg);
  z-index: 10;
}

.sticky-container .iphone.black h3 {
  color: var(--iphone-black-text);
}

.sticky-container .iphone.white {
  background-color: var(--iphone-white-bg);
  z-index: 20;

  clip-path: inset(100% 0 0 0);
}

.sticky-container .iphone.white h3 {
  color: var(--iphone-white-text);
}

.sticky-container .iphone.white h3 span {
  color: var(--iphone-white-text-highlight);
}

.sticky-container .iphone.red {
  background-color: var(--iphone-red-bg);
  z-index: 30;

  /* 遮罩  向内缩小 */
  clip-path: inset(100% 0 0 0);
}

.sticky-container .iphone.red h3 {
  color: var(--iphone-red-text);
}

.sticky-container .iphone.red h3 span {
  color: var(--iphone-red-text-highlight);
}
.sticky-container.no-sticky {
  position: relative;
  overflow: visible;
}
.sticky-container.no-sticky .iphone {
  position: relative;
}
.sticky-container.no-sticky .iphone.red {
  padding-bottom: calc(var(--iphone-offscreen) * -1);
}
</style>
