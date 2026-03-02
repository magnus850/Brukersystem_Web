Guide for lokalt oppsett av prosjektet (tilpasset Mac):
OBS: Du må ha python og npm installert fra før av
Åpne terminalen
Kjør disse kommandoene etter hverandre:
mkdir ikke_mitt_prosjekt && cd ikke_mitt_prosjekt
git clone https://github.com/magnus850/Brukersystem_Web $$ cd Brukersystem_Web
python3 -m venv venv
source venv/bin/activate
pip3 install flask flask-cors mariadb python-dotenv

Åpne et nytt terminalvindu, logg inn på mariadb og kjør disse kommandoene:
create database brukerdb;
use brukerdb;
CREATE TABLE brukere (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    bruker VARCHAR(15) NOT NULL,
    passord VARCHAR(24) NOT NULL,
    tillatelse VARCHAR(20) NOT NULL DEFAULT 'bruker'
);
insert into brukere (bruker, passord, tillatelse) values ('admin123','passord123', 'admin');

touch .env
nano .env
lim inn dette og fyll inn med egen brukerlegitimasjon for mariadb: 
DB_BRUKER=brukernavn
DB_PASSORD=passord
DB_HOST=localhost
DB=database
Trykk control X, y, Enter
