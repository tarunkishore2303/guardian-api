import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyC4uT7laGD4gJPz5tAtfBKNBGswhGb2kOk",
	authDomain: "guardian-fcce1.firebaseapp.com",
	databaseURL: "https://guardian-fcce1-default-rtdb.firebaseio.com",
	projectId: "guardian-fcce1",
	storageBucket: "guardian-fcce1.appspot.com",
	messagingSenderId: "153581711593",
	appId: "1:153581711593:web:b76fdeea681c7b7b7ac078",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const newLocation = () => {
	const minMax = {
		lat: [-90, 90],
		lng: [-180, 180],
	};
	let power = Math.pow(10, 7);
	let lati =
		Math.floor(
			Math.random() * (minMax.lat[1] - minMax.lat[0] + 1) + minMax.lat[0]
		) / 7;
	let longi =
		Math.floor(
			Math.random() * (minMax.lng[1] - minMax.lng[0] + 1) + minMax.lng[0]
		) / 7;
	set(ref(db, "/location/"), {
		latitude: Math.floor(lati * power) / power,
		longitude: Math.floor(longi * power) / power,
	});
};

setInterval(newLocation, 5000);
