<template>
  <section>
    <form @submit.prevent="formHandler">
      <div v-if="messageSubmitted" class="success">
        <p>Message Submitted Successfully</p>
      </div>
      <div>
        <label for="title">Title</label>
        <input type="text" name="title" id="title" v-model="enteredTitle" />
      </div>
      <div>
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="5"
          v-model="enteredDescription"
        ></textarea>
      </div>
      <div>
        <label for="href">Link</label>
        <input type="text" name="href" id="href" v-model="enteredHref" />
      </div>
      <button>Add Resource</button>
    </form>
  </section>
</template>

<script>
export default {
  inject: ['addResource'],

  data: () => {
    return {
      enteredTitle: '',
      enteredDescription: '',
      enteredHref: '',
      messageSubmitted: false,
    }
  },

  methods: {
    formHandler() {
      if (this.enteredTitle === '' || this.enteredDescription === '' || this.enteredHref === '') {
      } else {
        this.addResource(this.enteredTitle, this.enteredDescription, this.enteredHref)
        this.enteredTitle = ''
        this.enteredDescription = ''
        this.enteredHref = ''
        this.messageSubmitted = true

        const that = this

        setTimeout(function () {
          console.log(`run`)
          that.messageSubmitted = false
        }, 2000)
      }
    },
  },
}
</script>

<style scoped>
.success {
  background-color: rgb(219, 252, 219);
  padding: 5px 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px gray;
}
section {
  /* background-color: chartreuse; */
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px gray;
}

form > div {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

form > div label {
  font-weight: bold;
}
form > div input,
form > div textarea {
  padding: 10px 10px;
  margin-top: 5px;
  border-radius: 5px;
  font-size: 20px;
  color: gray;
  border: 1px solid gray;
}

form > button {
  margin: 20px 0px;
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: brown;
  color: white;
}
</style>
