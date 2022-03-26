import { defineStore } from "pinia";

export const useProfileStore = defineStore("profiles", {
  state: () => ({
    profile: null,
  }),

  actions: {
    async fetchProfiles() {
      const { data: profiles, error } = await supabase()
        .from("profiles")
        .select("id");
      this.profiles = profiles;
      if (error) throw error;
      if (profiles) {
        this.profiles = profiles;
        console.log(this.profiles);
      }
    },
    /*** SIGNUP ***/
    async signUp(username, website, avatar_url) {
      const { profiles, error } = await supabase({
        username: username,
        website: website,
        avatar: avatar_url,
      });
      if (error) throw error;
      if (profiles) {
        this.profiles = profiles;
        console.log(this.profiles);
      }
    },
  },
});
