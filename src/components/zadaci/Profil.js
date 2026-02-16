//import Korisnik from './data/korisnik.json';

// Funkcija za prikaz korisnika
const Profil = () => {

    // Ovo je Javascript objekt
    const KorisnikObjekt = {
        "ime" : "Tomislav", // string
        "prezime" : "Šuk", // string
        "godine" : 35, // number
        "vozacka" : true, // boolean
        "vjestine" : [ // array / niz
            "HTML", 
            "CSS", 
            "JavaScript", 
            "React"
        ],
        "adresa" : { // objekt
            "ulica" : "Sortina 1D",
            "grad" : "Zagreb",
            "pbroj" : 10000,
            "drzava" : {
                "naziv" : "Hrvatska",
                "oznaka" : "HR",
                "valuta" : "EUR"  
            }
        }
    }
    // Ovo je JSON format, tekstualni oblik, string
    const KorisnikJSON = '{ "ime" : "Tomislav", "prezime" : "Šuk", "godine" : 35, "vozacka" : true, "vjestine" : [ "HTML", "CSS", "JavaScript", "React" ], "adresa" : { "ulica" : "Sortina 1D", "grad" : "Zagreb", "pbroj" : 10000 } }';
    // Pomoću JSON.parse() ga pretvaramo u Javascript objekt
    const Korisnik = JSON.parse(KorisnikJSON);



    // Ova komponenta vraća informacije o korisniku
    return(
        <div className="container">

            <h1>Profil korisnika</h1>
            <p>Ime: {Korisnik.ime}</p>
            <p>Prezime: {Korisnik.prezime}</p>
            <p>Godine: {Korisnik.godine}</p>

            <div>
                Vještine:
                <ul>
                    
                    {
                        // Map koristimo za prolazak kroz niz (i ispisivanje vrijednosti, u ovom slučaju)
                        Korisnik.vjestine.map(
                            (vjestina, index) => (
                                <li>{index+1}. {vjestina}</li>
                            )
                        )      
                    }


                </ul>
            </div>

            <p>Ulicaa: {Korisnik.adresa.ulica}</p>
            <p>Grad: {Korisnik.adresa.grad}</p>
            <p>Poštanski broj: {Korisnik.adresa.pbroj}</p>


        </div>
    )

};

export default Profil;