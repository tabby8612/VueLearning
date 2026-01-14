import { createApp } from 'vue';

import App from './App.vue';
import GlobalLogger from './mixins/logger';

const app = createApp(App);

app.mixin(GlobalLogger);
app.mount('#app');
