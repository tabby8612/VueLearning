<script setup lang="ts">
import { ref } from 'vue'
import AddFriend from './components/AddFriend.vue'
import Friend from './components/Friend.vue'

type Friend = {
  id: string
  fullName: string
  phoneNumber: string
  email: string
  isFavorite: boolean
}

const data: Friend[] = [
  {
    id: 'tabish',
    fullName: 'Tabish',
    phoneNumber: '03133933083',
    email: 'tabishsajwani@hotmail.com',
    isFavorite: true,
  },
  {
    id: 'tabish2',
    fullName: 'Tabish2',
    phoneNumber: '03133933083',
    email: 'tabishsajwani@hotmail.com',
    isFavorite: false,
  },
  {
    id: 'tabish3',
    fullName: 'Tabish3',
    phoneNumber: '03133933083',
    email: 'tabishsajwani@hotmail.com',
    isFavorite: false,
  },
]

const friends = ref<Friend[]>(data)

const toggle = (id: string) => {
  const foundFriendInd = friends.value.findIndex((friend) => friend.id === id)

  console.log(friends.value)

  friends.value[foundFriendInd]!.isFavorite = !friends.value[foundFriendInd]!.isFavorite
  console.log(friends.value)
}

const addFriend = (name: string, phone: string, email: string) => {
  const newFriend = {
    id: new Date().toISOString(),
    fullName: name,
    phoneNumber: phone,
    email: email,
    isFavorite: false,
  }

  friends.value.push(newFriend)

  console.log(friends)
}
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit
    <a
      href="https://vuejs.org/"
      target="_blank"
      rel="noopener"
      >vuejs.org</a
    >
    to read the documentation
  </p>
  <AddFriend @addContact="addFriend"></AddFriend>
  <Friend
    v-for="friend in friends"
    :key="friend.id"
    :fullName="friend.fullName"
    :phoneNumber="friend.phoneNumber"
    :email="friend.email"
    :isFavorite="friend.isFavorite"
    @toggleFriendFavorite="toggle(friend.id)"
  ></Friend>
</template>

<style scoped></style>
