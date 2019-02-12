# demo-sso-mobile
An example mobile application in React Native that showcases the app-to-app interaction flows between the Smartwallet and another mobile app. In order for this demo app to function as intended, please ensure that you have the SmartWallet app on your phone and an identity created with Name and Email credentials filled out.

Install
----------------------------------------

To begin, we need to clone this repository and install all dependencies:

``` bash
  # clone the repository and navigate to the new folder
  git clone https://github.com/jolocom/demo-sso-mobile.git; cd ./demo-sso-mobile

  # install all dependencies
  yarn install
  # or
  npm install
```
```bash
  # for Android devices, install a debug/dev build on device
  react-native run-android
```
In another terminal window, run the development server:

```bash
  # for Android devices
  yarn android
```

General Set Up
----------------------------------------

The demo-sso-mobile app is a simple UI implementation. No seed / key handling is done in the app itself but all signing actions are directed to a deployed service which takes care of key management and respective signing operations. 

The service which takes care of the signing operations is a version of the [demo-sso](https://github.com/jolocom/demo-sso).

The Jolocom SmartWallet app can be addressed by the following format:

```bash
  'jolocomwallet://consent/<encodedInteractionToken>'
```

The encoded interaction token can be generated using the jolocom-lib. Note that in this demo app we have implemented the interaction flow of sharing credentials (Authentication section) and the flow of issuing a credential to a user (Issue Credential section). 


Implemented Interactions
---------------------------------------

Three interaction types are implemented on this demo app.

1) Authentiaction via a credential request / credential response interaction 

2) Issue of a signed credential

3) Ethereum payment interaction




Authentication - Credential Request / Credential Response
----------------------------------------

Tapping on the button to continue with Jolocom will ping an endpoint on the Jolocom Demo SSO which sends a CredentialRequest to your device. This CredentialRequest will be consumed via deeplinking app to app communication between the Demo SSO Mobile application and the SmartWallet. The corresponding CredentialReponse generated by the SmartWallet will be receivable and consumable by the Demo SSO Mobile application.


Issue of Credential
----------------------------------------

You can issue a credential to the logged in user. You can trigger the process by clicking the 'Receive Credential' button. This will ping an endpoint on the Jolocom Demo SSO which sends a CredentialOfferRequest to your device and triggers the credential receiving flow on the SmartWallet app.


Payment with Ethereum
----------------------------------------

You can initiate a payment flow by clicking the 'Buy a t-shirt' button. This will ping an endpoint on the Jolocom Demo SSO which sends a PaymentRequest to the demo-sso-mobile app which in turn triggers a payment consent flow on the SmartWallet. Note that the assembly, signing, and sending of the ethereum transaction happens on the Jolocom SmartWallet side. 
