<style scoped>
h1 {
  background-image: linear-gradient(90deg, red, yellow, lime, aqua, blue, magenta, red);
  background-size: 500%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 5s linear infinite;
}

@keyframes gradient {
  0% {
    background-position: 100%;
  }
  100% {
    background-position: 0%;
  }
}

body {
  font-family: "Inter", sans-serif;
}

.background-animate {
  background-size: 400%;

  -webkit-animation: AnimationName 5s ease infinite;
  -moz-animation: AnimationName 5s ease infinite;
  animation: AnimationName 5s ease infinite;
}

@keyframes AnimationName {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@media (max-width: 600px) {
  #leftImg {
    width: 280vh;
    height: 35vh;
  }

  #rightImg {
    width: 280vh;
    height: 35vh;
  }

  #form {
    width: 500vh;
    height: auto;
  }
}

</style>
<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r
  from-yellow-500
  via-red-500
  to-yellow-500 background-animate md:w-[200vh]">
    <div class="flex justify-start">
      <img src="https://media2.giphy.com/media/DgWCNBiuGt1bDrxu7W/source.gif" alt="" class="w-full" id="leftImg"
           style="transform: rotateY(180deg)">
    </div>
    <div class="bg-white w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 md:p-10 rounded-lg shadow-lg" id="form">
      <h1 class="text-sm md:text-base font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
        Hi {{ text }}!, Giao thừa 2024 đã sắp điểm, chúc bạn đáng mến của tôi sang năm 2024 sự nghiệp tiến lên và gặp
        nhiều điều hên, gặt hái được nhiều trái ngọt trong tình yêu!
      </h1>
      <div class="flex flex-col md:flex-row justify-between">

        <button
            id="acceptButton"
            class="transition-all duration-300 ease-in-out rounded p-3 bg-blue-500 hover:bg-indigo-500 text-white uppercase mt-3 md:mt-0">
          Nhận lì xì
        </button>
        <button
            id="rejectButton"
            class="transition-all duration-300 ease-in-out rounded p-3 bg-red-500 hover:bg-red-700 text-white uppercase mt-3 md:mt-0">
          Không nhận lì xì
        </button>
      </div>
    </div>
    <div class="flex justify-end">
      <img src="https://media2.giphy.com/media/DgWCNBiuGt1bDrxu7W/source.gif" alt="" class="w-full" id="rightImg">
    </div>
  </div>

</template>
<script>
import {ref, onMounted} from "vue";
import {useRoute} from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const text = ref(route.params.text);
    const showModal = ref(true);

    onMounted(() => {
      const acceptButton = document.getElementById('acceptButton');
      const moveButton = (event) => {
        let x = Math.floor(Math.random() * window.innerWidth) + 'px';
        let y = Math.floor(Math.random() * window.innerHeight) + 'px';

        acceptButton.style.position = 'absolute';
        acceptButton.style.left = x;
        acceptButton.style.top = y;
      };

      acceptButton.addEventListener('mouseover', moveButton);
      acceptButton.addEventListener('touchstart', moveButton);
    });

    const modalClose = () => {
      showModal.value = false;
    }
    return {
      text,
      modalClose,
      showModal
    }
  }
}</script>
