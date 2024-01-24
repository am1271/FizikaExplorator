import "./OsnoveGibanja.css";
import { useNavigate } from "react-router-dom";
function OsnoveGibanja() {
  const navigate = useNavigate();

  const handleNextLesson = () => {
    const currentLessonId = "1";
    const nextLessonId = String(Number(currentLessonId) + 1);

    navigate(`/lessons/${nextLessonId}`);
  };
  return (
    <div>
      <h1 className="h1">Osnove gibanja</h1>
      <div>
        <section className="lesson">
          <h4>Gibanje i Mirovanje</h4>
          <p>
            Gibanje je promjena položaja tijela u prostoru s vremenom.
            Mirovanje, s druge strane, označava odsustvo gibanja.
          </p>
        </section>

        <section className="lesson">
          <h4>Vremenski interval</h4>
          <p>
            Vremenski interval koji se računa kao razlika konačnog i početnog
            vremena. Δt = vremenski interval t2= konačno vrijeme t1= početno
            vrijeme
          </p>
          <div className="formula">
            <strong> Δt = t2 - t1 </strong>
          </div>
        </section>

        <section className="lesson">
          <h4>Prijeđeni put</h4>
          <p>
            Prijeđeni put je ukupna udaljenost koju tijelo prijeđe za vrijeme
            gibanja. <br />
            <strong>
              Oznaka: s <br /> Mjerna jedinica: metar (m)
            </strong>
            <br />
          </p>
          <div className="formula">
            <strong>s = v * t</strong>
          </div>
        </section>

        <section className="lesson">
          <h4>Brzina</h4>
          <p>
            Brzina (v) je omjer prijeđenog puta i vremena koje je potrebno za
            prijeđeni put.
            <br />{" "}
            <strong>
              Oznaka: v <br /> Mjerna jedinica: m/s
            </strong>
            <br />
          </p>
          <div className="formula">
            <strong>v = s / t</strong>
          </div>
        </section>

        <section className="lesson">
          <h4>Jednoliko pravocrtno gibanje</h4>
          <p>
            Tijelo se kreće ravnomjerno po pravoj liniji, bez promjene brzine.
            <strong>v = konstanta</strong>
          </p>
        </section>

        <section className="lesson">
          <h4>Jednoliko ubrzano gibanje</h4>
          <p>
            Jednoliko ubrzano gibanje je gibanje tijela koje mijenja brzinu s
            konstantnim ubrzanjem. <strong>a = konstanta </strong>
          </p>
        </section>

        <section className="lesson">
          <h4>Nejednoliko gibanje</h4>
          <p>Nejednoliko gibanje je gibanje tijela promjenjivom brzinom.</p>
        </section>

        <section className="lesson">
          <h4>Akceleracija </h4>
          <p>
            Akceleracija ili ubrzanje predstavlja promjenu brzine tijela u
            određenom vremenskom intervalu.
            <br />
            <strong>
              Oznaka: a <br /> Mjerna jedinica: m/s^2
            </strong>
            <br />
          </p>
          <div className="formula">
            <strong>a = Δv / Δt </strong>
          </div>
        </section>

        <section className="lesson">
          <h4>Tromost tijela</h4>
          <p>
            Tromost tijela ili inercija je svojstvo tijela da očuva svoje stanje
            gibanja (mirovanje ili konstantno gibanje) ako na njega ne djeluju
            vanjske sile.
          </p>
        </section>

        <section className="lesson">
          <h4>Temeljni zakon gibanja</h4>
          <p>
            Djelovanje vanjske sile (okoline) na tijelo mase (m) prepoznajemo po
            ubrzanju (a) koje tijelo dobiva. Osnovne veličine koje određuju
            gibanje: sila (F), masa (m) i ubrzanje (a). Temeljni zakon gibanja
            (Newton) kaže da stalna sila uzrokuje stalnu akceleraciju tijela,
            F=ma. Sila koja ubrzava tijelo proporcionalna je masi tijela i
            akceleraciji koju mu daje. Definicija sile od 1N: 1 N je ona sila
            koja tijelu mase 1 kg daje ubrzanje od 1 m/s^2
            <br />
          </p>
          <div className="formula">
            <strong>F = m * a</strong>
          </div>
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

export default OsnoveGibanja;
