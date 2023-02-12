import { IPlace } from "types/place";
import Place from "models/place";
import * as SQLite from "expo-sqlite";
import { SQLError } from "expo-sqlite";

const database = SQLite.openDatabase("places.db");

export const init = () => {
  const promise = new Promise<void>((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        imageUri TEXT NOT NULL,
        address TEXT NOT NULL,
        lat REAL NOT NULL,
        lng REAL NOT NULL
      )`,
        [],
        () => {
          resolve();
        },
        (_, error): boolean | any => {
          reject(error);
        }
      );
    });
  });

  return promise;
};

export const insertPlace = (place: IPlace) => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
        [
          place.title,
          place.imageUri,
          place.address,
          place.location.lat,
          place.location.lng,
        ],
        (_, result) => {
          resolve(result);
        },
        (_, error: SQLError): boolean | any => {
          reject(error.message);
        }
      );
    });
  });

  return promise;
};

export const fetchPlaces = () => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM places",
        [],
        (_, result) => {
          const places = [];

          for (const db of result.rows._array) {
            const placeItem: IPlace = {
              id: db.id,
              title: db.title,
              imageUri: db.imageUri,
              address: db.address,
              location: {
                lat: db.lat,
                lng: db.lng,
              },
            };
            places.push(new Place(placeItem));
          }
          resolve(places);
        },
        (_, error: SQLError): boolean | any => {
          reject(error);
        }
      );
    });
  });

  return promise;
};

export const fetchPlaceDetails = (id: number) => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM places WHERE id = ?",
        [id],
        (_, result) => {
          const place = result.rows._array[0];
          const placeItem: IPlace = {
            id: place.id,
            title: place.title,
            imageUri: place.imageUri,
            address: place.address,
            location: {
              lat: place.lat,
              lng: place.lng,
            },
          };
          resolve(new Place(placeItem));
        },
        (_, error: SQLError): boolean | any => {
          reject(error.message);
        }
      );
    });
  });

  return promise;
};
