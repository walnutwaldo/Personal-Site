import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC8nwcOzsMP-bhx5PR8a-GB5vWgM0ZfIKk",
  authDomain: "walden-yan-personal-site.firebaseapp.com",
  projectId: "walden-yan-personal-site",
  storageBucket: "walden-yan-personal-site.appspot.com",
  messagingSenderId: "488055580844",
  appId: "1:488055580844:web:6bb30e78b0e1ef4a3ad709",
  measurementId: "G-M74VC9HY62"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

// Returns a promise
function getStorageUrl(filePath) {
	const pathReference = ref(storage, filePath);
	return getDownloadURL(pathReference);
}

export default getStorageUrl;