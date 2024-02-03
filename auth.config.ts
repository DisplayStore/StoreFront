import GitHub from "@auth/core/providers/github";

export default {
  providers: [
    // @ts-ignore
    GitHub({
      clientId: "test" || import.meta.env.GITHUB_ID,
      clientSecret: "test" || import.meta.env.GITHUB_SECRET,
    }),
  ],
  trustHost: true,
};
