const handleGoogleSignIn = async () => {
  try {
    const { createdSessionId, setActive } = await startSSOFlow({
      strategy: "oauth_google",
    });

    if (setActive && createdSessionId) {
      await setActive({ session: createdSessionId });
      router.replace("/(tabs)"); // ✅ only here
    }
  } catch (error) {
    console.error("OAuth error:", error);
  }
};
