import React from "react";
import "./App.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

// Get the Publishable Key from the environment


const clerk_pub_key = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
const clerk_api_key = process.env.REACT_APP_CLERK_FRONTEND_API;


function App() {
  return (
    // Wrap your entire app with ClerkProvider
    // Don't forget to pass the frontendApi prop
    <ClerkProvider frontendApi={clerk_api_key} publishableKey={clerk_pub_key}>
      <SignedIn>
        <Hello />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

function Hello() {
  return <div>Hello from Clerk</div>;
}

export default App;