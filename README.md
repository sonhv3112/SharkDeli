# SHARKDELI #

This README would normally document whatever steps are necessary to get your application up and running.

## Install dependencies 

* Node, JDK
* Android development environment

## Install  

```bash
cd SHARKDELI 
npm install
```

## Run ##

You should follow below steps. 

### Step 0: Preparing the Android device 

#### 1. Physical device 

Enable Debugging over USB on your device, then plug in your device via USB.  
Note: Make sure your device is properly connecting to ADB by running `adb devices`

#### 2. Virtual device

Use Android Studio to open `./{Your project}/android`, then run virtual device.

### Step 1: Start Metro 

```bash 
npx react-native start 
```

### Step 2: Start SHARKDELI

```bash 
npx react-native run-android
```