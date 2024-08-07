import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const firebaseConfig = {
    apiKey: "yourApiKey",
    authDomain: "your AuthDomain",
    projectId: "yourProjectId",
    storageBucket: "yourStorageBucket",
    messagingSenderId: "yourMessagingSenderId",
    appId: "yourAppId",
    measurementId: "yourMeasurementId"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON data sent in the request body
app.use(express.json());

// Route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './website/data/index.html'));
});

app.get('/index-2.html', (req, res) => {
    res.sendFile(path.join(__dirname, './website/data/index-2.html'));
});

app.get('/doctors.html', (req, res) => {
    res.sendFile(path.join(__dirname, './website/data/doctors.html'));
});

app.get('/departments.html', (req, res) => {
    res.sendFile(path.join(__dirname, './website/data/departments.html'));
});

app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, './website/data/about.html'));
});

// app.post('/contact', (req, res) => {
//     const { name, phone, email, message } = req.body;
  
//     // Validate phone number
//     const phoneRegex = /^\d{10}$/;
//     if (!phoneRegex.test(phone)) {
//       return res.status(400).json({ message: 'Invalid phone number. Please enter a 10-digit phone number.' });
//     }
  
//     const contactData = { name, phone, email, message };
  
//     const contactsRef = collection(db, 'contacts');
//     addDoc(contactsRef, contactData)
//      .then((docRef) => {
//         res.json({ message: 'Contact data saved successfully!' });
//       })
//      .catch((error) => {
//         console.error(error);
//         res.status(500).json({ message: 'Error saving contact data' });
//       });
//   });





//   app.post('/post-layout-one', (req, res) => {
//     const { name, email, message } = req.body;
  
//     const contactData = { name, email, message };
  
//     const contactsRef = collection(db, 'reply');
//     addDoc(contactsRef, contactData)
//      .then((docRef) => {
//         res.json({ message: 'Contact data saved successfully!' });
//       })
//      .catch((error) => {
//         console.error(error);
//         res.status(500).json({ message: 'Error saving contact data' });
//       });
//   });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
