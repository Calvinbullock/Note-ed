import { collection, doc, setDoc } from "firebase/firestore"; 
import { db } from "../config/firebase"

const q = query(citiesRef, where('country', 'in', ['USA', 'Japan']));
