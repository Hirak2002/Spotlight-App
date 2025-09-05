import 'dotenv/config';

export default {
  expo: {
    name: "Spotlight-App",
    slug: "Spotlight-App",
    scheme: "myapp",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    scheme: "spotlight",  // ✅ Required for linking
    extra: {
      clerkPublishableKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
    },
  },
};
