import { defineStore } from "pinia";

export const useProfileStore = defineStore("profiles", {
  state: () => ({
    profile: null,
  }),

  actions: {
    // GET PROFILE BY ID
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
    // CREATE PROFILE
    async createProfile() {
      const { data, error } = await supabase.from("profiles").insert([
        {
          username: username,
          avatar_url: avatar_url,
          website: website,
        },
      ]);
    },
    // EDIT PROFILE
    async editProfile() {
      let { data: profiles, error } = await supabase
        .from("profiles")
        .select("updated_at");
      if (error) throw error;
      if (profiles) {
        this.profiles = profiles;
        console.log(this.profiles);
      }
    },
  },
});
