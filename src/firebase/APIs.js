import { doc, setDoc, onSnapshot, query, collection } from "firebase/firestore";
import { db } from "./config";

export const addDocument = async (collection, data) => {
	console.log("addDocument", collection, data);
	await setDoc(doc(db, collection, data.id), data);
};

//const q = query(collection(db, "cities"), where("state", "==", "CA"));
// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//     const cities = [];
//     querySnapshot.forEach((doc) => {
//         cities.push(doc.data().name);
//     });
//     console.log("Current cities in CA: ", cities.join(", "));
//   });
export const getDocuments = async (collection1, setter) => {
	const q = query(collection(db, collection1));

	const snapshot = onSnapshot(q, (querySnapshot) => {
		const documents = [];
		querySnapshot.forEach((doc) => {
			documents.push(doc.data());
		});
		console.log("Current documents: ", documents);
		setter(documents);
	});
};
