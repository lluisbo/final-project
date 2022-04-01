import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { useUserStore } from "./user";

export const useProfileStore = defineStore("profiles", {
  state: () => ({
    profiles: null,
  }),
  actions: {
    async fetchProfile() {
      const res = await useUserStore().fetchUser();
      const id = res.id;
      console.log(id);
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select()
          .match({ id: id });
        if (error) throw error;
        this.profiles = data;
        console.log(data);
        return this.profiles;
      } catch (error) {
        console.log(error);
      }
    },
    async updateProfile(username, website, avatar) {
      const res = await useUserStore().fetchUser();
      const id = res.id;
      try {
        const { data, error } = await supabase
          .from("profiles")
          .update([
            {
              username: username,
              website: website,
              avatar_url: avatar,
            },
          ])
          .match({ id: id });
        if (error) throw error;
        this.profiles = data;
        return this.profile;
      } catch (error) {
        console.log(error);
      }
    },
  },
  // async uploadFile(id, avatar) {

  //   try {
  //       const { data, error } = await supabase
  //           .storage
  //           .from('avatars')
  //           .upload('public/' + id + '.png', avatar, {
  //               cacheControl: '3600',
  //               upsert: false
  //           })
  //       if (error) throw error;
  //       this.profiles.data;
  //       return this.profiles;
  //   } catch (error) {
  //       console.log(error);
  //       return { error: error }
  //   }
  // }
});
