import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc } from "firebase/firestore";


// Function to retrieve all items from a user
export async function getItems(userId) {
    try {
        const itemCollectionRef = collection(db, 'user', userId, 'items');
        const itemsQuery = query(itemCollectionRef);
        const querySnapshot = await getDocs(itemsQuery);

        const items = [];
        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                data: doc.data()
            });
        });
        return items;
    } catch (error) {
        console.log(error);
    }
}

// Function to add a new item to a users list 
export async function addItem(userId, item){
    try {
        
    } catch (error) {
        console.log(error);
    }
}