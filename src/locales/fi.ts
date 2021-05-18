import ILocale from '../locale';

const locale: ILocale = {
    address: 'Osoite',
    maintenanceMessages: {
        disabled: `Olen disabloinut huoltotilan ja pollaan palvelinta jälleen!`,
        enabled: `Olen aktivoinut huoltotilan enkä enää pollaa palvelinta!`,
    },
    map: 'Kartta',
    mission: 'Tehtävä',
    noMap: 'Ei karttaa valittuna',
    noPermissions: `sinulla ei ole lupaa tehdä tätä!`,
    noPlayers: 'Ei pelaajia',
    pingMessage: 'pelaajan raja on täyttynyt, hyppää palvelimelle!',
    playerCount: 'Pelaajamäärä',
    playerList: 'Pelaajalista',
    presence: {
        botFailure: 'bottikatkos',
        error: 'palvelinta korjataan',
        maintenance: 'huoltoa tapahtuu',
        ok: 'Zeus paikalla',
    },
    queryTime: 'Query-aika',
    serverDownForMaintenance: 'Huoltokatkos',
    serverDownForMaintenanceDescription: 'Palvelin on alhaalla huollon vuoksi. Tarkista uudelleen myöhemmin!',
    serverDownMessages: {
        pingMessage: ', palvelin ei vastaa. Todennäköisesti se on tarkoituksella, mutta pingaampahan nyt ihan vaan ärsyttääkseni!',
        pleaseFixServer: ', korjaa palvelin!',
        serverDownAlternative: 'Palvelin on maissa!',
    },
    serverOffline: 'Palvelin on offline!',
    statuses: {
        offline: 'Offline',
        online: 'Online',
        status: 'Status',
    },
    tooManyPlayers: 'Liian monta pelaajaa listattavaksi!',
};

export default locale;
