
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
- [Xcode](https://developer.apple.com/xcode/) (for iOS development, Mac only)
- [Android Studio](https://developer.android.com/studio) (for Android development)

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
npm start
# or
yarn start
# or
expo start
```

This will open the Expo developer tools in your browser where you can choose to run the app on:

- iOS simulator (Mac only): Press `i`
- Android emulator: Press `a`
- Web browser: Press `w`
- Physical device: Scan the QR code with the Expo Go app ([iOS](https://apps.apple.com/app/expo-go/id982107779) / [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))

### Building for Production

#### For iOS (requires a Mac):

```bash
expo build:ios
```

#### For Android:

```bash
expo build:android
```

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
│   ├── lib/             # Shared utilities and types
│   │   ├── supabase.ts  # Supabase client configuration
│   │   └── types.ts     # TypeScript type definitions
│   └── pages/           # Screen components
│       └── Index.tsx    # Main photo grid screen
└── tsconfig.json        # TypeScript configuration
```

## Technologies Used

- [React Native](https://reactnative.dev/) - Mobile application framework
- [Expo](https://expo.dev/) - React Native toolchain
- [TypeScript](https://www.typescriptlang.org/) - Static typing
- [Supabase](https://supabase.io/) - Backend-as-a-Service for storage
- [React Native AsyncStorage](https://react-native-async-storage.github.io/async-storage/) - Data storage solution

## Common Issues

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

## Contributing

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Supabase Documentation](https://supabase.io/docs)
