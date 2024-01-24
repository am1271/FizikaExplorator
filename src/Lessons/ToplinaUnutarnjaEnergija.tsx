import "./OsnoveGibanja.css";
import { useNavigate } from "react-router-dom";
function ToplinaUnutarnjaEnergija() {
  const navigate = useNavigate();

  const handleNextLesson = () => {
    const currentLessonId = "2";
    const nextLessonId = String(Number(currentLessonId) + 1);

    navigate(`/lessons/${nextLessonId}`);
  };
  return (
    <div>
      <h1 className="h1">Toplina i unutarnja energija</h1>
      <div>
        <section className="lesson">
          <h4>Tijela i tvari</h4>
          <p>
            <strong>Tijela</strong> su sve stvari koje zauzimaju neki prostor.{" "}
            <strong>Tvar</strong> je sve ono od čega su tijela građena.
          </p>
        </section>

        <section className="lesson">
          <h4>Unutarnja energija</h4>
          <p>
            <strong>Unutarnja energija</strong> je zbroj kinetičkih i
            potencijalnih energija svih čestica tijela.
          </p>
        </section>

        <section className="lesson">
          <h4>Temperatura</h4>
          <p>
            <strong>Temperatura</strong> je mjera za stupanj zagrijanosti
            tijela, a ovisi o kinetičkoj energiji čestica tijela.
            <br />
            <strong>Oznaka: T Mjerna jedinica: kelvin, K. </strong> <br />
            <strong>Oznaka: t Mjerna jedinica: Celzijev stupanj, °C. </strong>
          </p>
        </section>

        <section className="lesson">
          <h4>Celzijeva ljestvica</h4>
          <p>
            <strong>Celzijeva ljestvica</strong> ima dvije osnovne točke:
            ledište (0°C) i vrelište vode (100°C).
            <br />
            <br />
          </p>
        </section>

        <section className="lesson">
          <h4>Kelvinova ljestvica</h4>
          <p>
            <strong>Kelvinova ljestvica</strong> polazi od apsolutne nule,
            najniže temperature koja može postojati u prirodi, iznosi -273.15°C,
            a zapisuje se kao 0 K.
          </p>
        </section>

        <section className="lesson">
          <h4>Toplina</h4>
          <p>
            <strong>Toplina</strong> je dio unutarnje energije koji se prenosi s
            toplijeg na hladnije tijelo dok se njihove temperature ne izjednače.{" "}
            <br />
            <strong>Oznaka: Q</strong> <br />
            <strong>Mjerna jedinica: džul, J.</strong>
          </p>
        </section>

        <section className="lesson">
          <h4>Specifični toplinski kapacitet</h4>
          <p>
            <strong>Specifični toplinski kapacitet</strong> je toplina koju može
            primiti ili predati tijelo mase 1 kg da mu se temperatura povisi za
            1 stupanj.
            <br /> <strong>Oznaka: c</strong> <br />
            <strong>
              Mjerna jedinica: džul po kilogramu i kelvinu, J/kg K.
            </strong>
            <br />
            Voda ima veliki toplinski kapacitet od 4200 J/kg K. To znači da 1
            kilogramu vode treba dovesti toplinu od 4200 J da joj se temperatura
            povisi za 1 stupanj (1 K).
          </p>
        </section>
      </div>
      <div className="next-lesson">
        <button className="btn btn-outline-primary" onClick={handleNextLesson}>
          Sljedeća lekcija
        </button>
      </div>
    </div>
  );
}

export default ToplinaUnutarnjaEnergija;
