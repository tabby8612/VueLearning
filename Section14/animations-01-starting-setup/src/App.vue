<template>
  <div class="container">
    <UserList></UserList>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: isAnimated }"></div>
    <button @click="startAnimation">Animate</button>
  </div>
  <base-modal @close="hideDialog" :isActive="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <Transition @leave="onLeave" @before-leave="beforeLeave">
      <p v-if="isParaVisible" :css="false">
        This is paragraph we will animate with Vue JS
      </p>
    </Transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <Transition name="button-fade" mode="out-in">
      <button @click="toggleUser" v-if="isShowUser">Show Users</button>
      <button @click="toggleUser" v-else>Hide Users</button>
    </Transition>
  </div>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import { Transition } from 'vue';
import UserList from './components/UserList.vue';

export default {
  components: {
    Transition,
    UserList,
  },
  data() {
    return {
      isAnimated: false,
      dialogIsVisible: false,
      isParaVisible: true,
      isShowUser: true,
    };
  },
  methods: {
    beforeLeave(el) {
      el.style.opacity = 1;
    },

    onLeave(el, done) {
      // el.style.opacity = 0;
      console.log(`On Leave`);
      console.log(el);
      let count = 1;

      const interval = setInterval(() => {
        el.style.opacity = 1 - count * 0.01;
        count++;

        if (count > 100) {
          clearInterval(interval);
          done();
        }
      }, 2);
    },

    toggleUser() {
      this.isShowUser = !this.isShowUser;
    },
    toggleParagraph() {
      this.isParaVisible = !this.isParaVisible;
    },

    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    startAnimation() {
      this.isAnimated = true;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: all 1s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: fade-out 1s ease-out forwards;
}

@keyframes fade-out {
  0% {
    transform: translateX(0%) scale(1);
  }

  50% {
    transform: translateX(-50%) scale(1.1);
  }

  100% {
    transform: translateX(-100%) scale(1);
  }
}

.v-enter-from,
.button-fade-enter-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.7);
}

.v-enter-to,
.button-fade-enter-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.v-enter-active {
  transition: all 0.3s ease-out;
}

.v-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.v-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.7);
}

.v-leave-active {
  transition: all 0.3s ease-in-out;
}
</style>
