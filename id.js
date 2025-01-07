document.addEventListener('DOMContentLoaded', function () {
    const loadData = () => {
        // Odczytanie danych z localStorage
        const data = JSON.parse(localStorage.getItem('userData'));

        // Jeśli dane są dostępne, ustawiamy wartości w odpowiednich elementach
        if (data) {
            setElementText('userName', data.name);
            setElementText('userSurname', data.surname);
            setElementText('userDob', data.dob);
            setElementText('userPesel', data.pesel);
            setElementText('userAdres', data.adres);
            setElementText('userPostcode', data.postcode);
            setElementText('userdata_zameldowania', data.data_zameldowania);
            setElementText('userlast_update', data.last_update);
            setElementText('userSeria', data.series);
            setElementText('userData_waznosci', data.expire_date);
            setElementText('userData_wydania', data.data_wydania);
            setElementText('userOrgan', data.organ_wydajacy);
            setElementText('userPlec', data.plec);
            setElementText('userLocation', data.birth_location);
            setElementText('userDadSurname', data.dad_surname);
            setElementText('userMomSurname', data.mom_surname);
            setElementText('userSeria2', data.series);
            setElementText('userData_waznosci2', data.expire_date);
            setElementText('userData_wydania2', data.data_wydania);
            setElementText('usermom_name', data.mom_name);
            setElementText('userdad_name', data.dad_name);
            setElementText('userRodowe', data.surname);
            setElementImage('userPhoto', data.photo);
        } else {
            console.error("Brak danych użytkownika w localStorage.");
        }
    };

    // Załaduj dane przy uruchomieniu aplikacji
    loadData();
});

// Funkcja pomocnicza do ustawiania tekstu w elementach
const setElementText = (id, text) => {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
};

// Funkcja pomocnicza do ustawiania obrazu w elementach
const setElementImage = (id, src) => {
    const element = document.getElementById(id);
    if (element && element.tagName === 'IMG') {
        element.src = src;
    }
};
