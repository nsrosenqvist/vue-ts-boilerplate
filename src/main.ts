// Vue
import PrimeVue from 'primevue/config';
import Tailwind from 'primevue/passthrough/tailwind';
import router from '~/router';
import { createApp } from 'vue';
import App from '~/App.vue';

// Styles
import './styles.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Create and mount app
const app = createApp(App);
app.config.globalProperties.window = window;
app.use(router);
app.use(PrimeVue, { unstyled: true, pt: Tailwind });
app.mount('#app');
