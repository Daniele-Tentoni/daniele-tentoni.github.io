/**
 * @author Daniele Tentoni
 * @date 28/10/2022
 */
import { defineStore } from "pinia";

/**
 * Store Dark Theme preference of the user.
 */
export const useThemeStore = defineStore("theme", () => {
  /**
   * Store if site prefer dark or light theme.
   */
  const theme = ref(true);

  /**
   * Set the theme value to true if dark theme is wanted, false otherwise.
   * @param {boolean | string} value Name of theme or boolean value defining if the theme is dark or not.
   */
  function setTheme(value) {
    if (typeof value === "boolean") {
      theme.value = value;
    } else if (typeof value === "string") {
      theme.value = value === "dark";
    } else {
      console.warning(
        "Updating theme with unhandled value %@(%@)",
        value,
        typeof value
      );
    }
  }

  /**
   * Gets or sets the dark theme.
   */
  const isDark = computed({
    get() {
      return theme;
    },
    set(newValue) {
      setTheme(newValue);
    },
  });

  return { theme, setTheme, isDark };
});
