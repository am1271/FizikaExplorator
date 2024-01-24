export function Home() {
  return (
    <div className="home-container">
      <main>
        <div className="container mt-5">
          <div className="row">
            {/* Lijeva strana - Tekst dobrodošlice i gumb */}
            <div className="col-md-6">
              <h1>Dobrodošli!</h1>
              <br />
              <p>
                FizikaExplorator pravi je raj za sve osnovnoškolce i
                srednjoškolce željne novih znanja iz fizike. Ukoliko si siguran
                u svoje znanje možeš preskočiti dio s lekcijama i odmah krenuti
                na rješavanje kvizova, a ako negdje zapneš ili ti nije jasno
                zašto tvoje rješenje nije točno, pogledaj stranicu Pomoć.
                Sretno!
              </p>
              <br />
              <button
                className="btn btn-primary"
                onClick={() => (window.location.href = "lessons")}
              >
                Kreni s učenjem
              </button>
            </div>

            {/* Desna strana - Slika */}
            <div className="col-md-6">
              <br />
              <img
                src="../public/imgs/homepage.jpg"
                alt="Slika dobrodošlice"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
