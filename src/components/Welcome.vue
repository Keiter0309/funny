<script>
import {ref} from "vue";
import {useRouter} from "vue-router";
import Modal from "@/components/Modal.vue";
import {getFirestore, collection, addDoc} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDJuZ1puHWxn07MAoitcLcwGFYpYF9ioWQ",
  authDomain: "fir-22e0d.firebaseapp.com",
  projectId: "fir-22e0d",
  storageBucket: "fir-22e0d.appspot.com",
  messagingSenderId: "864538517339",
  appId: "1:864538517339:web:797bab2780a8167059447e",
  measurementId: "G-4PK7ZNGYB9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default {
  components: {Modal},
  setup() {
    const inputValue = ref("");
    const text = ref("");
    const showModal = ref(false);
    const router = useRouter();

    const submit = async () => {
      try {
        if (inputValue.value === "") {
          text.value = "Vui lòng nhập tên";
          showModal.value = true;
        } else if (inputValue.value === "Oanh") {
          text.value = "người chị xinh đẹp =))))";
          localStorage.setItem("text", "chị xinh đẹp =))))");
          await router.push({
            name: "Home",
            params: {text: "chị xinh đẹp =))))"}
          });
        } else {
          text.value =  inputValue.value;
          await router.push({
            name: "Home",
            params: {text: inputValue.value}
          });
        }

        const docRef = await addDoc(collection(db, "inputs"), {
          value: inputValue.value,
          time:  new Date().toLocaleString()
        });
      } catch (error) {
        console.error("Error adding document: ", error);
        showModal.value = true;
      }
    };

    return {
      inputValue,
      submit,
      text,
      showModal
    };
  }
};
</script>

<template>
  <div class="flex justify-center">
    <h1 class="fixed uppercase text-xl font-bold text-white mt-10">Chúc mừng năm mới Giáp Thìn 2024 - vạn sự như ý - sinh lý dồi dào - vàng đeo cả kí - thật là hết ý.</h1>
  </div>
  <div class="min-h-screen flex justify-center items-center
    h-screen
    bg-gradient-to-r
    from-pink-500
    via-red-500
    to-yellow-500
    background-animate w-full md:w-[200vh]">
    <div class="w-1/4 flex justify-end pr-4">
      <img src="https://media4.giphy.com/media/cuXaELHmjmv7EDYY9R/source.gif" class="w-full" alt=""
           style="transform: rotateY(180deg)">
    </div>
    <div class="bg-white w-full max-w-md p-8 rounded-md shadow-md">
      <label for="nameInput" class="block text-gold-500 text-sm font-bold mb-2">Nhập tên để nhận lì xì </label>
      <input type="text" id="nameInput" v-model="inputValue"
             class="w-full px-4 py-2 border focus:outline-none focus:ring focus:ring-gold-500 rounded-md transition-all duration-150 ease-in-out">

      <button @click="submit" id="submitButton"
              class="mt-4 bg-amber-400 text-white px-4 py-2 rounded-md hover:bg-amber-600 focus:outline-none focus:ring focus:ring-amber-500 transition-all duration-300 ease-in-out">
        Tiếp tục
      </button>
    </div>
    <div class="w-1/4 flex justify-start pl-4">
      <img src="https://media4.giphy.com/media/cuXaELHmjmv7EDYY9R/source.gif" class="w-full" alt="">
    </div>
    <div id="modal" v-show="showModal">
      <span id="text" class="text-red-500"><Modal>{{ text }}</Modal></span>
    </div>
  </div>
</template>


<style scoped>
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
</style>