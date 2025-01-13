import mysql from 'mysql2/promise';// voor het maken van een MySQL-verbinding//
import dotenv from 'dotenv'; // voor het lezen van .env bestanden//

dotenv.config();// voor het het laden van de omgevingsvariabelen uit het .env//

const pool = mysql.createPool({ //  
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default pool; // hierdoor kan deze module worden geïmporteerd en gebruikt in andere modules//
