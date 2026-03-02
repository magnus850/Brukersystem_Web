Guide for lokalt oppsett av prosjektet (tilpasset Mac):
OBS: Du må ha python, node.js og mariadb konfigurert og installert fra før av
Åpne terminalen
Kjør disse kommandoene etter hverandre:
mkdir ikke_mitt_prosjekt && cd ikke_mitt_prosjekt
git clone https://github.com/magnus850/Brukersystem_Web && cd Brukersystem_Web
python3 -m venv venv
source venv/bin/activate
pip3 install flask flask-cors mariadb python-dotenv

Åpne et nytt terminalvindu, logg inn på mariadb og kjør disse kommandoene:

mariadb -u brukernavn -p
hvis du får error er det mest sannsynlig fordi mariadb ikke kjører, skriv: "brew services start mariadb" og prøv på nytt
create database brukerdb;
use brukerdb;
CREATE TABLE brukere (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    bruker VARCHAR(15) NOT NULL,
    passord VARCHAR(24) NOT NULL,
    tillatelse VARCHAR(20) NOT NULL DEFAULT 'bruker'
);
insert into brukere (bruker, passord, tillatelse) values ('admin123','passord123', 'admin');

touch .env && nano .env
lim inn dette og fyll inn med egen brukerlegitimasjon for mariadb: 
DB_BRUKER=brukernavn
DB_PASSORD=passord
DB_HOST=localhost
DB=brukerdb
Trykk control X, y, Enter

npm install svelte

kjør backend: 
pass på at venv er aktivert, hvis det ikke er det aktiver det: source venv/bin/activate
python3 backend/app.py

kjør frontend:
åpne et nytt terminalvindu, naviger til prosjektet og kjør:
npm run dev

gå til http://localhost:5173/ og prøv å logg inn med admin123 og passord123
