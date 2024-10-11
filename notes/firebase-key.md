
[Src](https://stackoverflow.com/questions/50399170/what-bearer-token-should-i-be-using-for-firebase-cloud-messaging-testing) 

- Got to Google OAuth Playground: https://developers.google.com/oauthplayground
- In the "Input your own scopes" for FCM use this url: https://www.googleapis.com/auth/datastore
- Tap Authorize API.
- Pick correct user for authorisation and allow access.
- In the Step 2: Exchange authorization code for tokens tap Exchange authorisation code for tokens.
- Access token is your Bearer.

____ THIS KEY IS NOT FOR PRODUCTION ___
