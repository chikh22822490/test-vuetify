import "vuetify/styles";
import { createVuetify, ThemeDefinition } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { mdiAccount, mdiHome } from "@mdi/js";
import "@mdi/font/css/materialdesignicons.css";

export default createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases: {
      ...aliases,
      account: mdiAccount,
      home: mdiHome,
    },
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme: {
        dark: false,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          primary: "#6200EE",
          "primary-darken-1": "#3700B3",
          secondary: "#03DAC6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
    },
  },
});
