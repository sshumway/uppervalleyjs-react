import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyC0MFq5nmgs1rSOnQyWyb-iPLcxjzHQ8qA",
  authDomain: "uppervalleyjs-react-demo-app.firebaseapp.com",
  databaseURL: "https://uppervalleyjs-react-demo-app.firebaseio.com",
  projectId: "uppervalleyjs-react-demo-app",
  storageBucket: "",
  messagingSenderId: "106446678676"
};

var fire = firebase.initializeApp(config);

export default fire;
