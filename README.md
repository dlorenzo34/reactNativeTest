
# Getting Started
 
## Introduction: 

First of all you will need to have latest version of node installed in your machine, the you will need to run in the root of the app the following command
```bash
npm install
```
This will install all node_modules that the app need to work

You will need the latest version of JavaSDK (atm is in version 13) 
You need to set the JAVA_HOME environment variable to point to your Java installation directory.

Once you have those two steps done, you can run in your cmd the following command to build your .apk for Android users:

```bash
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
cd android
./gradlew assembleRelease
```

The apk will be generated in reactNativeTest\android\app\build\outputs\apk\release and will be called app-release.apk

To build APK in iOS:

You need a iOS machine or a VM of it:

Open XCode and run: 

```bash
react-native run-ios
```
This command will start the iOS simulator, and your app will run in the simulator for testing and development.

## Tech notes:

As backend / database for the APP I have used Firebase

You will find all the configuration inside FirebaseConfig.ts

Also I have used jest to test components and functions

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
