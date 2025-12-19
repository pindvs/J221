# projekt PixelShelf - system udostępniania zdjęć

PixelShelf to prosta aplikacja webowa, która pozwala użytkownikom wysyłać zdjęcia i nimi zarządzać. 
Całość jest zbudowana w Node.js z bazą danych MongoDB.

------------------------------------------------------------

FUNKCJE APLIKACJI

- dodawanie zdj
- tagowanie zdjęć
- zarządzanie zdjęciami – możesz edytować tagi albo całkowicie usuwać zdjęcia
- system sesji – sesje pamiętają zalogowanego użytkownika

------------------------------------------------------------

INSTALACJA I URUCHOMIENIE

1. pobieranie zależności
wejdź do folderu z projektem w terminalu i wpisz:
npm install
To zainstaluje wszystkie potrzebne moduły: express, mongodb, multer itd.

2. przygotowanie folderu na zdjęcia
stwórz w głównym katalogu folder 'uploads', bo tam trafiają przesyłane pliki

3. konfiguracja bazy danych
aplikacja domyślnie łączy się z MongoDB pod adresem:
mongodb://localhost:27017
upewnij się, że Twoja lokalna baza działa przed startem serwera

4. uruchomienie projektu
wpisz w konsoli:
npm start
Serwer powinien wystartować i działać pod adresem:
http://localhost:3000

------------------------------------------------------------

UŻYTE TECHNOLOGIE

- backend: Node.js + Express
- baza danych: MongoDB
- widoki: EJS
- obsługa plików: Multer

------------------------------------------------------------

UWAGI

Jeśli wystąpi problem z połączeniem do bazy, sprawdź czy URI w pliku data/connection.js jest poprawny dla Twojej instalacji MongoDB.