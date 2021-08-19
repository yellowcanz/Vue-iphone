<template>
  <div>
    <div class="other-section3">
      <div id="sticky">
        <canvas id="iphone-se" width="432" height="976"></canvas>

        <div id="loading">
          <p>iPhone SE packs our most powerful chip into our most popular size at our most affordable price. It’s just what you’ve been waiting for.</p>
        </div>

        <p class="left">
          Durable glass and
          <br />aluminum design
        </p>

        <p class="right">
          Brilliant 4.7”
          <br />Retina HD <br />display
        </p>
      </div>
    </div>
  </div>
</template>
<script>
// import './PxLoader.min.js'
import PxLoader from 'pxloader'
import './PxLoaderImage.js'
// import PxLoader from 'pxloader'
import $ from 'jquery'
export default {
  data() {
    return {
      images: [],
    }
  },
  methods: {
    changeFrame(frame) {
      let index = frame - 1
      if (index < 0) index = 0
      if (index > 84) index = 84

      let context = $('#iphone-se')[0].getContext('2d')
      context.drawImage(this.images[index], 0, 0, 432, 976)
    },
    moveDevice(el, current, toLeftFrom, toLeftTo, toRightFrom, toRightTo) {
      if (current <= toLeftTo) {
        if (current >= toLeftFrom) {
          let offsetRatio = (current - toLeftFrom) / (toLeftTo - toLeftFrom)
          $(el).css('left', ($(el).width() / 2) * -1 * offsetRatio)
        }
      } else {
        let offsetRatio = (current - toRightFrom) / (toRightTo - toRightFrom)
        $(el).css('left', ($(el).width() / 2) * -1 + $('#iphone-se').width() * offsetRatio)
      }
    },
    showHideText(el, current, showFrom, showTo, hideFrom, hideTo) {
      if (current < showFrom) {
        $(el).css('opacity', 0)
      }

      if (current >= showFrom && current <= showTo) {
        $(el).css('opacity', (current - showFrom) / (showTo - showFrom))
      }

      if (typeof hideFrom !== 'undefined' && typeof hideTo !== 'undefined') {
        if (current > hideFrom && current <= hideTo) {
          $(el).css('opacity', (hideTo - current) / (hideTo - hideFrom))
        }

        if (current > hideTo) {
          $(el).css('opacity', 0)
        }
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', () => {
        const html = document.documentElement
        const elHeight = document.getElementsByClassName('other-section3')[0].scrollHeight
        let scrolled = (html.scrollTop - 9864) / (elHeight - html.clientHeight)
        let frame = Math.ceil(scrolled * 84)
        this.changeFrame(frame)
        this.moveDevice($('#iphone-se'), scrolled, 0.3, 0.6, 0.6, 1)
        this.showHideText($('.left'), scrolled, 0.45, 0.52, 0.58, 0.65)
        this.showHideText($('.right'), scrolled, 0.9, 1)
      })
    })
    const loader = new PxLoader()
    for (let i = 0; i < 85; i++) {
      this.images[i] = loader.addImage(`https://s3-us-west-2.amazonaws.com/s.cdpn.io/2002878/iphone-se.${('0' + (i + 1)).slice(-2)}.png`)
    }
    loader.addCompletionListener(function() {
      let context = $('#iphone-se')[0].getContext('2d')
      $('.other-section3').addClass('loaded')
      context.drawImage(this.images[0], 0, 0, 432, 976)
    })
    loader.start()
  },
  name: 'SectionIphoneSE',
}
</script>
<style scoped>
.other-section3 {
  margin: 0;
  background-color: #131313;
  height: 5000px;
}
#sticky {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

canvas {
  position: relative;
  margin-top: -100px;
}

p.left,
p.right {
  font-size: 28px;
  color: #fff;
  font-family: Helvetica;
  font-weight: bold;
  position: absolute;
  top: 45%;
  opacity: 0;
}

p.left {
  left: 50%;
}

p.right {
  right: 50%;
}

#loading {
  font-size: 28px;
  font-family: Helvetica;
  color: #fff;
  position: absolute;
  width: 45vw;
  text-align: center;
  z-index: 10;
  font-weight: bold;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/2002878/iphone-se.01.png') no-repeat center center;
  background-size: contain;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
  transition: 0.5s opacity ease-in-out;
  transition-delay: 2s;
}

#loading p {
  margin-top: 40%;
}
.other-section3.loaded #loading {
  opacity: 0;
}
</style>
