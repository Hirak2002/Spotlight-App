import 'dotenv/config';

export default {
  expo: {
    name: "Spotlight-App",
    slug: "Spotlight-App",
    scheme: "spotlight",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    extra: {
      clerkPublishableKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
    },
    plugins: [
      [
        "expo-router",
        {
          origin: "https://spotlight-app.com",
        },
      ],
    ],
  },
};
