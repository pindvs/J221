# PixelShelf

PixelShelf to prosta aplikacja webowa, która pozwala użytkownikom wysyłać zdjęcia i nimi zarządzać. 
Całość jest zbudowana w Node.js z bazą danych MongoDB.

------------------------------------------------------------

FUNKCJE APLIKACJI

- dodawanie zdjęć
- tagowanie zdjęć
- zarządzanie zdjęciami – można edytować tagi i usuwać zdjęcia
- system sesji

------------------------------------------------------------

INSTALACJA I URUCHOMIENIE

1. pobieranie zależności
wejdź do folderu z projektem i wpisz w terminalu:
npm install

3. stwórz w głównym katalogu folder 'uploads', gdzie będą się pojawiać przesłane pliki

4. konfiguracja bazy danych
aplikacja domyślnie łączy się pod adresem:
mongodb://localhost:27017
lokalna baza powinna być uruchomiona przed startem aplikacji

5. uruchomienie projektu:
npm start
Serwer powinien wystartować i działać pod adresem http://localhost:3000

------------------------------------------------------------

UŻYTE TECHNOLOGIE

- backend: Node.js + Express
- baza danych: MongoDB
- widoki: EJS
- obsługa plików: Multer
