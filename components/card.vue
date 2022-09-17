<template>
  <div class="container">
    <loading
      :active="isLoading"
      :can-cancel="true"
      :is-full-page="true"
    ></loading>
    <div class="boxs">
      <div class="maxWidth">
        <a href="#" class="box box-1">
          <div class="box-head">
            <img src="../Spiral.gif" alt="card-1" class="card-1" />
          </div>
          <div class="box-content">
            <h3 class="title">Enjoy the reactivity</h3>
            <div class="box-desc">
              NFT's are going reactive. <br />Feel the power of your controll.
              <br /><strong> Lit the space up</strong> and
              <strong>send your emotions </strong>through your reactive Crypto
              Portal. <br />
              <i>Everything on chain</i>
            </div>
            <div class="flex">
              <div class="box-read flex">
                <button class="btn-read" @click="doEmote('1F300')">
                  <icon-spiral style="font-size: 2em; color: darkblue" />
                  <span class="mg-l5 black" style="font-size: 1.75em"
                    >Spiral Mind</span
                  >
                </button>
              </div>
              <div class="box-read flex">
                <button class="btn-read" @click="doEmote('1F4A2')">
                  <icon-anger style="font-size: 2em" />
                  <span class="mg-l5 black" style="font-size: 1.75em"
                    >Angry Soul</span
                  >
                </button>
              </div>
              <div class="box-read flex">
                <button class="btn-read" @click="doEmote('1F5FB')">
                  <icon-mount style="font-size: 2em" />
                  <span class="mg-l5 black" style="font-size: 1.75em"
                    >Plane Spirit</span
                  >
                </button>
              </div>
              <div class="box-read flex">
                <button class="btn-read" @click="doEmote('1F5FF')">
                  <icon-head style="font-size: 2em" />
                  <span class="mg-l5 black" style="font-size: 1.75em"
                    >Heady Figure</span
                  >
                </button>
              </div>
              <div class="box-read flex">
                <button class="btn-read" @click="doEmote('1FAB1')">
                  <icon-worm style="font-size: 2em; color: white" />
                  <span class="mg-l5 black" style="font-size: 1.75em"
                    >Wormy Space</span
                  >
                </button>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div style="display: flex; flex-direction: column">
        <div>
          <a href="https://www.instagram.com/function.str/">
            <icon-insta style="font-size: 1em; color: #ff61b7" />
            <span style="font-size: 1.25em; color: white; margin-left: 10px"
              >FunctionStore</span
            ></a
          >
        </div>
        <div>
          <a href="https://www.instagram.com/acrylicode.berlin/">
            <icon-insta style="font-size: 1em; color: #ff61b7" />
            <span style="font-size: 1.25em; color: white; margin-left: 10px"
              >Acrylicode</span
            ></a
          >
        </div>
        <div>
          <a href="https://www.instagram.com/kodadot.xyz/">
            <icon-insta style="font-size: 1em; color: #ff61b7" />
            <span style="font-size: 1.25em; color: white; margin-left: 10px"
              >KodaDot</span
            ></a
          >
        </div>
        <div>
          <a href="https://www.instagram.com/gianste___/?hl=en">
            <icon-insta style="font-size: 1em; color: #ff61b7" />
            <span style="font-size: 1.25em; color: white; margin-left: 10px"
              >Gianste</span
            ></a
          >
        </div>
        <div style="margin-bottom: 30px"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconSpiral from '~icons/ph/spiral-bold'
import IconAnger from '~icons/emojione/anger-symbol'
import IconMount from '~icons/fluent-emoji/mount-fuji'
import IconHead from '~icons/fxemoji/moyai'
import IconWorm from '~icons/fa6-solid/worm/'
import IconInsta from '~icons/akar-icons/instagram-fill/'
import Loading from 'vue-loading-overlay'
// import {useLoading} from 'vue-loading-overlay'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'

const isLoading = ref(false)

async function doEmote(emote) {
  isLoading.value = true
  console.log('emote', emote)
  const body = { value: emote }
  const { data, pending, error, refresh } = await useFetch(
    `/api/emote?value=${emote}`
  )
  console.log(data.value.value, error)
  isLoading.value = false
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Palette+Mosaic&family=Roboto+Slab:wght@300;400;500;700&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Palette Mosaic', cursive;
  font-family: 'Roboto Slab', serif;
}
body {
  margin: 0px 0px 0px 0px;
  margin: 0;
  width: 100%;
  height: 100vh;
  background: #333;
}

a {
  text-decoration: none;
}
.container .box .box-head {
  width: 100%;
}
.container .box .box-head img {
  display: block;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid #000;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: center;
}
header {
  position: sticky;
  top: 0;
  left: 0;
  height: 100px;
  z-index: 1;
  background: rgba(253, 2, 214);
}
header h1 {
  font-family: 'Palette Mosaic', cursive;
  letter-spacing: 1px;
  font-size: 4.5rem;
  text-align: center;
  text-shadow: 1px 1px 0 rgba(253, 249, 2);
  transition: 200ms ease-in-out;
}
.container {
  position: relative;
  width: 100%;
  height: calc(100vh - 100px);
}
.container .boxs {
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: space-between;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
  grid-column-gap: 0rem;
  grid-row-gap: 0rem;
  grid-template-rows: auto;
  place-items: center;
  text-rendering: optimizeLegibility;
  line-height: 1.4;
  padding: 0em;
}
.container .box {
  width: 100%;
  min-width: 300px;
  height: 850px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 4px solid #000;
  border-radius: 0.3rem;
  color: #000;
  margin-bottom: 20px;
  transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out;
}
.container .box .box-content {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1;
  padding: 1.5rem;
  background: #1379e6;
}
.container .box-1 .box-content {
  background: #ff61b7;
}
.container .box-3 .box-content {
  background: #28aa1d;
}
.container .box .title {
  margin-bottom: 1.2rem;
  font-size: 1.5rem;
  line-height: 1.2;
  letter-spacing: 0.005em;
}
.container .box .box-desc {
  margin-bottom: 1.2rem;
  font-size: 1rem;
  line-height: 1.4;
}
.container .box .box-read button {
  margin-left: 0%;
  margin-bottom: 5%;
  padding: 10px 15px;
  outline: 2px solid #000;
  border: 2px solid #000;
  text-transform: uppercase;
  background: rgb(130, 187, 16);
  cursor: pointer;
  box-shadow: 1px 1px 0 #000;
  transition: 400ms ease-in-out;
}
.container .box-1 .box-read button {
  background: #6188e7;
}
.container .box-3 .box-read button {
  background: rgb(250, 144, 5);
}
.maxWidth {
  max-width: 400px;
}

.flex {
  display: flex;
  flex-direction: column;
}
.mg-l5 {
  margin-left: 10px;
}
.flex-gap {
  gap: 00%;
}

.black {
  color: #000;
}

@media (max-width: 768px) {
  body {
    margin: 0px;
  }
  header h1 {
    font-size: 3rem;
  }
  .container .boxs {
    grid-template-columns: 1fr;
  }
  .black {
    color: #000;
  }
}
</style>
