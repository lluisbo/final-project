import { defineStore } from "pinia";
import { supabase } from "../supabase";


export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    /*** GET USER ***/
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
      console.log(this.user)
    },
    /*** SIGNUP ***/
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
    /*** SIGNOUT ***/
    async signOut() {
      const { error } = await supabase.auth.signOut();
      if(error) throw error;
      console.log(error)
    },
    /*** PASSWORD RECOVERY ***/
    async recoveryPassword() {
      let { data, error } = await supabase.auth.api.resetPasswordForEmail(email)
    },
    persist: {
      enabled: true,
      strategies: [
        {
          key: "user",
          storage: localStorage,
        },
      ],
    },
  },
});
