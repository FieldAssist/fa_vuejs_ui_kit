import { createApp } from "vue";
import Dev from "./serve.vue";
import faUiKit from "@/entry.esm";
import "../src/assets/css/main.css";

// Create app with proper type casting
const app = createApp(Dev as any);
app.use(faUiKit);
app.mount("#app");
