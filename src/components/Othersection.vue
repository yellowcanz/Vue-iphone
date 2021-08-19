<template>
  <div>
    <div class="section" ref="getheight">
      <div class="homepod-container">
        <div class="homepod">
          <div class="start"></div>
          <div class="part-1"></div>
          <div class="part-2"></div>
          <div class="part-3"></div>
          <div class="part-4"></div>
          <div class="ending"></div>
        </div>
      </div>
      <div class="description-container">
        <div class="description">
          <h3>Deep bass with range you can feel.</h3>
          <p>The Apple-designed high-excursion woofer is positioned at the top of the speaker facing upward, creating a wide range of deep bass that surpasses any traditional speaker. A six-microphone array, along with an internal bass-EQ microphone, analyzes and compensates for the effect of the room on the bass response, providing rich, consistent sound. And a powerful motor drives the diaphragm a remarkable 20 mm, so the bass shines through even when the volume is low.</p>
        </div>

        <div class="description">
          <h3>Far and away an incredible listener.</h3>
          <p>Six microphones positioned around HomePod allow it to pick up all the sound in a room. When you say “Hey Siri,” advanced signal processing, together with echo and noise cancellation, allows HomePod to hear you without the need to raise your voice — even if you’re across the room with loud music playing. After HomePod recognizes the words “Hey Siri,” what you say is encrypted and sent anonymously to Apple servers without being tied to your Apple ID.</p>
        </div>

        <div class="description">
          <h3>High-fidelity audio that’s all around you.</h3>
          <p>A custom-designed array of seven beamforming tweeters, each with its own amplifier, creates tremendous directional control. Placed around the base and using a folded-horn design, they send the flow of music toward the center and then out the bottom in a 360-degree pattern, resulting in an all-encompassing sense of space. This virtually eliminates early table reflections and allows for consistent high-definition sound.</p>
        </div>

        <div class="description">
          <h3>The biggest brain ever in a speaker.</h3>
          <p>An Apple-designed A8 chip orchestrates all the remarkable audio innovations inside HomePod. Like advanced signal processing so Siri can hear you over the music. Real-time studio-level processing that maximizes the bass while minimizing distortion. Buffering that’s even faster than real time. And upmixing of both direct and ambient audio. You get amazing sound, every single time.</p>
        </div>

        <div class="description">
          <h3>Designed to be seen and heard.</h3>
          <p>HomePod is wrapped in a seamless mesh fabric designed for aesthetics and acoustic performance. Available in white and space gray, it’s gorgeous from every angle — yet virtually transparent to the sound waves passing through it.</p>
        </div>
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
      window.addEventListener(
        'scroll',
        () => {
          let homepodSection = document.querySelector('.section')
          const sectionHeight = homepodSection.getBoundingClientRect().height
          let html = document.documentElement
          let scrolled = html.scrollTop / (sectionHeight - html.clientHeight)
          homepodSection.style.setProperty('--part-1', this.calculateOpacity(0.05, 0.15, scrolled))
          homepodSection.style.setProperty('--part-2', this.calculateOpacity(0.19, 0.23, scrolled))
          homepodSection.style.setProperty('--part-3', this.calculateOpacity(0.35, 0.4, scrolled))
          homepodSection.style.setProperty('--part-4', this.calculateOpacity(0.58, 0.63, scrolled))
          homepodSection.style.setProperty('--ending', this.calculateOpacity(0.8, 0.85, scrolled))
        },
        true
      )
    })
  },
  methods: {
    calculateOpacity(start, end, scrolled) {
      if (scrolled - start < 0) return 0
      if (scrolled - end > 0) return 1
      return (scrolled - start) / (end - start)
    },
  },
  name: 'Othersection',
}
</script>
<style scoped>
html {
  font-size: 48px;
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
body {
  margin: 0;
  padding: 0;
}

.homepod-container {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
}

.description {
  width: 490px;
  padding: 80px 50px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  text-align: center;
  color: #fff;
  margin: 0 auto 100vh;
}

.description h3 {
  font-size: 32px;
  margin: 0;
  padding: 0;
}

.description p {
  font-size: 18px;
  margin: 12px 0 0;
}

.homepod {
  width: 654px;
  height: 825px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.homepod div {
  width: inherit;
  height: inherit;
  background-size: contain;
  background-position: center center;
  position: absolute;
  top: 0;
  left: 0;
}

.start {
  background-image: url(https://assets.codepen.io/2002878/homepod.jpg);
}

.part-1 {
  background-image: url(https://assets.codepen.io/2002878/homepod_1.jpg);
  opacity: var(--part-1);
}

.part-2 {
  background-image: url(https://assets.codepen.io/2002878/homepod_2.jpg);
  opacity: var(--part-2);
}

.part-3 {
  background-image: url(https://assets.codepen.io/2002878/homepod_3.jpg);
  opacity: var(--part-3);
}

.part-4 {
  background-image: url(https://assets.codepen.io/2002878/homepod_4.jpg);
  opacity: var(--part-4);
}

.ending {
  background-image: url(https://assets.codepen.io/2002878/homepod.jpg);
  opacity: var(--ending);
}

.description-container {
  padding-bottom: 100vh;
}

.description:last-child {
  margin-bottom: 0;
}
</style>
