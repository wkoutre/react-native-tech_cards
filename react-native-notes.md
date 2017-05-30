# React Native Notes for OSX

## SETUP

The official React Native documentation for "Getting Started" is pretty much what you need, but these notes have more detail.

### Dependencies

* XCode: packages code and the React Native library into installable app/run it on the iOS simulator -- NOTE: have the latest version, no exceptions
* HomeBrew: installing node
* Node/NPM: just just as usual, to run JavaScript outside of the browser and handle dependency management
* watchman: watches files on the HDD and waits for them to change; automatically processes changes to the code base and updates whichever app we're working on
* React Native (RN) CLI: How we'll generate new RN projects AND run them in either the iOS or Android simulator

### Commands

```brew install node```
```brew install watchman```
```npm i -g react-native-cli```

### Generate Project

```react-native init albums```
* albums is the name of the first app to be worked on

### Setting up the Simulator
```react-native run-ios```
* builds project
* launches iOS simulator
* shows project
* if simulator launches, but nothing comes up, drag the simulated Springboard and run the app manually

### Install ESLint (optional but, as we know, important)

* Swallow your perfectionist pride! Use a linter
* Setup a bit of a hassle

##### install eslint globally
```npm i -g eslint```

##### install Package Control

##### Install a config with npm
```npm i -D eslint-config-rallycoding```

##### add 'linter' to sublime
##### add 'eslint' to Sublime
* install packages: SublimeLinter, SublimeLinter-contrib-eslint
* Sublime Text > Tools > SublimeLinter > Lint Mode > Background
##### add config file to project
* in root directory: ```touch .eslintrc```
* MUST use double-quotes inside the JSON object
 
## WALKTHROUGH
* As a general rule, it's rare to have to deal with the contents of ios/android/node_modules folders 
* If we want to make a very low-level modification to the project, then we may have to make a calculated change to the above folders' contents

### OUR FOCUS
* index.android.js and index.ios.js
* depending on the device, the respective simulator will build the files in the corresponding folders
* There's one catch: In this course, we'll be putting ALL the files inside the index files. This may not be the case in the context of another file.

#### From here on out, refer to the comments in the index.[platform].js file


## REACT VS. REACT NATIVE

* REACT: View layer / library that knows how components should behave and how they should work together
* RN: Portal to the mobile screen
* As usual, use functional components UNLESS the Component needs a) State or b) Lifecycle hooks (generally speaking)
 
## TAGS

* <Text> : Like a <span>
* <View> : Like a <div> ... the utility tag, filling so many roles with its versatility
* <Image> : Like an <img> ; requires {{ source: [uri] }} prop; must explicitly declare dimensions to visually see it render
* <ScrollView> : like <View> but with scrolling!
* <TouchableHighlight>, <TouchableOpacity>, <TouchableWithoutFeedback>, <TouchableNativeFeedback> ;)
* <TextInput> : primitive...
* ActivityIndicator : just what it sounds like... props: size={large/small}
* <ListView> : solves the issue of rendering for the sake of performance; ONLY renders the items that are visible... listens for scroll events and keeps track of items that are in/out/moving in/moving out of view -- it replaces only the DATA inside previously-rendered components
* 

## BUTTONS
* TouchableHighlight: option for button to turn a different color when the user is tapping it
* TouchableOpacity: option for button to change opacity when the user is tapping it... dims it
* read the rest on the react-native docs
* for something like a Button, we want to make it reusable. This just means using props instead of any hard coding of actions, links, text, etc...

### TOUCHABLES
* onPress: function to handle onPress

## STYLING

* Everything in RN gets positioned at the top-left of its container
* Can be tricky, but flexbox is the key
* It's mostly the same flexbox as on the Web, but with a few key differences
* It's a good idea to break Components down as much as possible to contain all the styling

#### FLEXBOX

* justify-content: vertical positioning
* align-items: horizontal positioning
* flexDirection: defaults to column in React Native (>.<)

#### COLORING
* shadowColor
* shadowOffset: what tells the element the dimensions of the shadow... width - left/right, height - top/bottom (negative number, positive number... respectively)
* shadowOpacity
* elevation
* position

### IMAGES
* set fixed height
* set flex
* set null width -- we're INTENTIONALLY doing this to make the image fit the width of the container

### SCROLLING
* by default: no scrolling
* 1) Identify expected scrollable Components
* 2) import 'scroll-view' and wrap content with it
* 3) MUST add style prop of "flex: 1" to root of App ... "Please expand this Component to fill the entire content area of the device"

### ANMATION
* LayoutAnimation from 'react-native'
* Calling LayoutAnimation at ANY POINT IN TIME before Component is updated, all of them will be automatically animated for us in any way possible (CLARIFICATION: For anything props that changes)

## APIs, AJAX, PROMISES, etc.
* install axios: ```npm i -S axios```

## REDIRECTING / INTERFACING w/ OTHER APPS
* Section: APIS > Linking on RN docs
* Linking Library details how to interface with other apps on the device (Email client, Browser, Uber, etc.)

### LINKING Library
* openURL(url): url is a plain text url

## Authentication

### Firebase
* 

## TextInput
* Kind of a pain in RN
* No set height and width -- no styling in general!
* Pulling input from a <TextInput> is the same as in React... state or refs
* as in HTML, just listing a prop without assign it a value in JSX makes it 'true'

#### Props
* onChangeText -- callback function taking value as a param, returning THE VALUE... so no '.target.value'; it just works
* autoCorrect={true/false}
* placeholder
* secureTextEntry

## REDUX
* ```npm i -S redux react-redux```
* Action: object dispatching a type to the reducer to tell it how to produce the data it's responsible for
* Reducer: has its own state to contribute to the...
* State: ALL the data of our App
* Store: has a reference to all reducers and their states
* Just like everything else, have a main reducer file to setup app's store structure, importing all other reducers from their respective files

#### Provider
* Works together with the store, making it available to all of its children. Aka, the <Provider> MUST be the root element being rendered by App (or whatever the root Component is2)

#### Connect
* Higher-order functions... immediately invoked, called with the Component that's being connected

#### Lists
* Only render what's visible on the screen, and a few that are below it to account for user scrolling
* Don't practice upfront rendering! It's (clearly) terrible for performance
* React Native includes <ListView> with plenty of useful methods. Check out the Facebook documentation.

### HELPERS
* It's best practice to move helper logic out of Components
* Instead, have a prop from the mapStateToProps function...
* When the Components become more complex, this provides tons of clarity and saves times and headaches when writing more features
