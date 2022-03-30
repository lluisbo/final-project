import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { useUserStore } from "./user";

export const useProfileStore = defineStore("profiles", {
  state: () => ({
    profiles: null,
  }),
  actions: {
    async fetchProfile() {
      const id= useUserStore().user.id;
      try {
        const { data: profiles, error } = await supabase
          .from("profiles")
          .select("*")
          .match({ id: id });
        if (error) throw error;
        this.profiles = profiles;
        console.log(profiles);
        return this.profiles;
      } catch (error) {
        console.log(error);
      }
    },
    // async createProfile(email, id) {
    //     console.log(email, id)
    //     try {
    //         const { data, error } = await supabase
    //             .from("profiles")
    //             .insert([
    //                 {
    //                     id: id,
    //                     username: email.split('@')[0],
    //                     website: 'www.website.com'
    //                 }
    //             ])
    //         if (error) throw error;
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // },
    async updateProfile(username, website, avatar) {
        const id= useUserStore().user.id;
        console.log(id)
      try {
        const { data: profile, error } = await supabase
          .from("profiles")
          .update([
            { 
              id: id,
              username: username,
              website: website,
              avatar_url: avatar
            },
          ])
          .match({ id: id });
        if (error) throw error;
        this.profile = profile;
        return this.profile;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
