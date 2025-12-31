import { createApp } from 'vue'
import App from './App.vue'
import AddFriend from './components/AddFriend.vue'
import Friend from './components/Friend.vue'

const app = createApp(App)

app.component('Friend', Friend)
app.component('AddFriend', AddFriend)

app.mount('#app')
