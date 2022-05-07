import {
	doc,
	setDoc,
	onSnapshot,
	query,
	collection,
	deleteDoc,
} from "firebase/firestore";
import { db } from "./config";

export const addDocument = async (collection, data) => {
	await setDoc(doc(db, collection, data.id), data);
};

export const getDocuments = async (collection1, setter) => {
	const q = query(collection(db, collection1));

	// eslint-disable-next-line no-unused-vars
	const snapshot = onSnapshot(q, (querySnapshot) => {
		const documents = [];
		querySnapshot.forEach((doc) => {
			documents.push(doc.data());
		});
		console.log("Current documents: ", documents);
		setter(documents);
	});
};

export const deleteDocument = async (collection, id) => {
	await deleteDoc(doc(db, collection, id));
};
