<template>
  <div>
    <div class="other-section2">
      <h2>
        Superfast wireless
        <p>Hello 5G.</p>
      </h2>
      <div id="iphone">
        <div id="hardware"></div>
        <div id="ui">
          <img src="https://assets.codepen.io/2002878/iphone12-5g_top_ui.jpg" class="top-ui" alt />

          <ul>
            <li>
              <img src="https://assets.codepen.io/2002878/iphone12-5g_show_01.jpg" />
            </li>
            <li>
              <img src="https://assets.codepen.io/2002878/iphone12-5g_show_02.jpg" />
            </li>
            <li>
              <img src="https://assets.codepen.io/2002878/iphone12-5g_show_03.jpg" />
            </li>
            <li>
              <img src="https://assets.codepen.io/2002878/iphone12-5g_show_04.jpg" />
            </li>
            <li>
              <img src="https://assets.codepen.io/2002878/iphone12-5g_show_05.jpg" />
            </li>
            <li>
              <img src="https://assets.codepen.io/2002878/iphone12-5g_show_06.jpg" />
            </li>
            <li>
              <img src="https://assets.codepen.io/2002878/iphone12-5g_show_07.jpg" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {},
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', () => {
        const rows = document.querySelectorAll('#ui ul li')
        const html = document.documentElement
        const elHeight =
          document.getElementsByClassName('other-section2')[0].scrollHeight
        // console.log(html.scrollTop)
        let scrolled = (html.scrollTop - 8050) / (elHeight - html.clientHeight)
        let total = 1 / rows.length
        for (let [index, row] of rows.entries()) {
          let start = total * index
          let end = total * (index + 1)
          let progress = (scrolled - start) / (end - start)
          if (progress >= 1) progress = 1
          if (progress <= 0) progress = 0
          row.style.setProperty('--progress', progress)
        }
      })
    })
  },
  name: 'Section',
}
</script>
<style scoped>
.other-section2 {
  height: 1725px;
  background-color: #000;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  --device-width: 770px;
  --device-height: 1336px;
  --ui-width: 640px;
}
.other-section2 h2 {
  color: #6e6e73;
  text-align: center;
  font-size: 48px;
}
.other-section2 h2 p {
  margin: 0;
  color: #fff;
}
#iphone {
  position: relative;
  width: var(--device-width);
  height: var(--device-height);
}
#hardware {
  width: 100%;
  height: 100%;
  background-image: url(https://assets.codepen.io/2002878/iphone12-5g_on_phone.jpg);
  background-size: var(--device-width) var(--device-height);
  /* 图片遮罩 */
  mask-image: url(https://assets.codepen.io/2002878/iphone12-5g_on_phone_mask.png);
  -webkit-mask-image: url(https://assets.codepen.io/2002878/iphone12-5g_on_phone_mask.png);

  mask-size: var(--device-width) var(--device-height);
  -webkit-mask-size: var(--device-width) var(--device-height);
}
#ui {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
#ui .top-ui {
  display: block;
  width: var(--ui-width);
  height: auto;
  margin: 70px auto 0;
  padding-bottom: 30px;
  border-bottom: 1px solid #222;
}
#ui ul {
  --progress: 0;
}
#ui ul li img {
  display: block;
  width: var(--ui-width);
  height: auto;
  margin: 10px auto;
  padding-bottom: 10px;
  border-bottom: 1px solid #222;
  transform: scale(calc(1.8 - (0.8 * var(--progress))))
    translateY(calc(-60px * (1 - var(--progress))));
  opacity: var(--progress);
}
</style>
