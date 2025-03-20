
# Photo Browser Mobile App

A React Native application for browsing photos stored in Supabase storage buckets. Built with Expo and TypeScript.

## Features

- Browse photos stored in Supabase storage
- View photo details
- Responsive grid layout
- Error handling and loading states
- Cross-platform (iOS and Android)

## Prerequisites

Before you begin, ensure you have the following installed on your development machine:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later) or [Yarn](https://yarnpkg.com/) (v1.22.x or later)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) (`npm install -g expo-cli`)
- [Expo Go](https://expo.dev/client) app installed on your iOS or Android device for testing

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-directory>
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Configure Supabase credentials:

Open `src/lib/supabase.ts` and replace the placeholder values with your actual Supabase project URL and anonymous key:

```typescript
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';
```

4. Set up Supabase storage:
   
   - Create a storage bucket named 'photos' in your Supabase project
   - Configure public access to the bucket as needed for your app

## Running the App

### Development Mode

Start the development server with:

```bash
npx expo start
```

This will display a QR code in your terminal that you can scan with the Expo Go app on your iOS or Android device.

Alternatively, you can run the app in a simulator/emulator:

- iOS simulator (Mac only): Press `i` in the terminal
- Android emulator: Press `a` in the terminal

### Running on Physical Devices

1. Make sure your device is on the same WiFi network as your development machine
2. Install the Expo Go app on your device
3. Scan the QR code with your device's camera (iOS) or the Expo Go app (Android)

## Project Structure

```
photo-browser/
├── App.tsx              # Main application entry point
├── app.json             # Expo configuration
├── assets/              # Images, fonts, and other static assets
├── babel.config.js      # Babel configuration
├── src/                 # Source code
│   ├── components/      # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Loading.tsx
│   │   ├── PhotoGrid.tsx
│   │   └── PhotoThumbnail.tsx
│   ├── hooks/           # Custom React hooks
│   │   └── usePhotos.ts # Hook for fetching photos
│   └── lib/             # Shared utilities and types
│       ├── supabase.ts  # Supabase client configuration
│       └── types.ts     # TypeScript type definitions
```

## Troubleshooting

### Network Errors

If you encounter network-related errors when fetching photos:

1. Check that your Supabase URL and anonymous key are correct
2. Ensure your device/emulator has internet connectivity
3. Verify that the storage bucket exists and has the correct permissions

### Build Errors

If you encounter build errors:

1. Make sure all dependencies are installed correctly
2. Clear the npm cache: `npm cache clean --force`
3. Clear the Expo cache: `expo r -c`
4. Make sure you have the latest Expo SDK installed

## Expo Specific Commands

- Start with clear cache: `npx expo start -c`
- Build for Android: `eas build -p android`
- Build for iOS: `eas build -p ios`
- Update dependencies: `npx expo install`

## Dependencies

- React Native
- Expo
- Supabase JS Client
- React Native AsyncStorage
- Expo Image
