/**
 * Gets or sets if navigation has to be visible or not.
 *
 * By default it's not visible: `() => false`.
 *
 * @returns True if Navbar has to be visible, false otherwise.
 */
export const useNavBar = () => useState("navbar", () => false);
