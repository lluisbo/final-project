import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),
  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },
    async signUp(email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) {
        this.user = user;
        console.log(this.user);
      }
    },
    /*** SIGNIN ***/
    async signIn(email, password) {
      const { user, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) {
        this.user = user;
        console.log(this.user);
      }
    },
  },
  /*** SIGNOUT ***/
  async signOut() {
    const { user, error } = await supabase.auth.signOut();
    if (user) {
      console.log("c ya soon!");
    }
    if (error) throw error;
    if (user) {
      this.user = user;
      console.log(this.user);
    }
  },
  /* THINGS TO DO */
  /*** EDITPROFILE ***/
  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
      },
    ],
  },
});
