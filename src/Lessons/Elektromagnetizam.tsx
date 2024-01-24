import "./OsnoveGibanja.css";

import { useNavigate } from "react-router-dom";
function Elektromagnetizam() {
  const navigate = useNavigate();

  const handleNextLesson = () => {
    const currentLessonId = "3";
    const nextLessonId = String(Number(currentLessonId) + 1);

    navigate(`/lessons/${nextLessonId}`);
  };
  return (
    <div>
      <h1 className="h1">Električna struja</h1>
      <div>
        <section className="lesson">
          <h4>Električni naboj</h4>
          <p>
            <strong>Električni naboj</strong> je svojstvo tijela da može
            privlačiti i odbijati druga tijela. U prirodi postoje pozitivni i
            negativni električni naboji između kojih djeluju privlačne i odbojne
            sile.
          </p>
        </section>

        <section className="lesson">
          <h4>Električna sila</h4>
          <p>
            <strong>Električna sila</strong> je privlačna ili odbojna sila
            između nabitih tijela
          </p>
        </section>

        <section className="lesson">
          <h4>Električno polje</h4>
          <p>
            <strong>Električno polje</strong> je prostor oko električnog naboja
            u kojem se osjeća djelovanje električne sile. Električna sila može
            djelovati na daljinu, bez dodira, pomoću električnog polja.
            <br />
          </p>
        </section>

        <section className="lesson">
          <h4>Električna struja</h4>
          <p>
            <strong>Električna struja</strong> je usmjereno gibanje električnih
            naboja u smjeru vanjskog električnog polja. Struja pozitivnih naboja
            giba se u smjeru negativnog pola, a struja negativnih naboja u
            smjeru pozitivnog pola izvora. <br />
            <strong>
              Oznaka: I <br /> Mjerna jedinica: amper, A
            </strong>{" "}
            <br />
            Električna struja se računa kao naboj koji protječe kroz presjek
            vodiča u jedinici vremena. <br />
            <div className="formula">
              <strong>I = Q / t </strong>
            </div>
            <br />
          </p>
        </section>

        <section className="lesson">
          <h4>Elektični napon</h4>
          <p>
            <strong>Električni napon</strong> se definira kao rad koji obavi
            izvor za pomak jediničnog naboja <br />
            <div className="formula">
              <strong>U = W / Q </strong>
            </div>
            <br />
            <strong>
              Oznaka: U <br /> Mjerna jedinica: volt, V
            </strong>{" "}
            <br /> <strong>Električni napon</strong> postoji između bilo koje
            dvije točke u kojima su različite električne potencijalne energije:
            između polova baterije, između priključaka utičnice, između dva
            naeletrizirana oblaka itd.
          </p>
        </section>

        <section className="lesson">
          <h4>Električni strujni krug</h4>
          <p>
            <strong>Električni strujni krug</strong> je uređaj kojim se
            električna energija prenosi preko spojnih vodiča iz izvora do
            trošila. Osnovni elementi strujnog kruga su: električni izvor,
            trošilo, spojni vodovi i sklopka.
          </p>
        </section>

        <section className="lesson">
          <h4>Magnetsko polje</h4>
          <p>
            <strong>Magnetsko polje</strong> je prostor oko magneta u kojem
            djeluju magnetske sile. Magnetski polovi se zovu sjever (N) i jug
            (S), jer se slobodno obješena magnetska igla (kompas) postavlja u
            smjeru geografskih polova sjever i jug, tj. u smjeru magnetskog
            polja Zemlje. Magnetska sila djeluje privlačno između raznoimenih
            polova (sjever i jug) ili odbojno između istoimenih magnetskih
            polova (sjever i sjever, jug i jug). Magnet djeluje uvijek privlačno
            na predmete od željeza i još nekih metala (kod ostalih tvari
            magnetsko polje je vrlo slabo)
          </p>
        </section>

        <section className="lesson">
          <h4>Elektromagnet</h4>
          <p>
            <strong>Elektromagnet</strong> se sastoji od zavojnice od vodiča
            namotanog oko željezne jezgre koji postaje magnet samo dok kroz
            njega teče električna struja.
          </p>
        </section>

        <section className="lesson">
          <h4>Mjerenje električne struje</h4>
          <p>
            Električnu struju mjerimo ampermetrom koji spajamo u strujni krug
            <strong> serijski</strong> s trošilom čiju struju mjerimo.
            <strong>Ampermetar</strong> spajamo serijski s trošilom jer kroz
            njega tada teče ista struja kao i kroz trošilo. Ampermetar nikada ne
            smijemo spajati izravno na izvor bez trošila, jer predstavlja kratak
            spoj, pa može poteći prejaka struja koja može oštetiti uređaj ili
            izazvati drugu štetu.
          </p>
        </section>

        <section className="lesson">
          <h4>Mjerenje električnog napona</h4>
          <p>
            Električni napon mjerimo voltmetrom koji{" "}
            <strong>spajamo paralelno</strong> s trošilo s izvorom ili trošilom
            čiji napon mjerimo. Kod paralelnog spoja napon je isti i na
            voltmetru i na uređaju čiji napon mjerimo.
            <strong>Voltmetar</strong> smijemo izravno spojiti na izvor jer ima
            veliki električni otpor. Voltmetar je zapravo ampermetar velikog
            otpora koji koristi pravilo proporcionalnosti napona i struje.
          </p>
        </section>

        <section className="lesson">
          <h4>Električni otpor</h4>
          <p>
            <strong>Električni otpor</strong> je svojstvo vodiča da se opire
            protjecanju električne struje.{" "}
            <strong>
              {" "}
              <br /> Oznaka: R <br /> Mjerna jedinica: om, Ω
            </strong>
          </p>
        </section>

        <section className="lesson">
          <h4>Ohmov zakon</h4>
          <p>
            <strong>Ohmov zakon</strong> je osnovni zakon strujnog kruga koji
            povezuje tri osnovne veličine: napon struju i otpor. Struja koja
            teče kroz strujni krug proporcionalna je naponu, a obrnuto
            proporcionalna otporu strujnog kruga. <br />{" "}
            <div className="formula">
              <strong> I = U / R </strong>
            </div>{" "}
            <br />
          </p>
        </section>

        <section className="lesson">
          <h4>Izvor električne struje</h4>
          <p>
            <strong>Izvor električne struje</strong> pretvara druge oblike
            energije (kemijsku energiju, toplinu, svjetlost, kinetičku energiju
            vjetra i vode, energiju valova) u električnu energiju. Svi
            električni izvori rade tako da međusobno razdvajaju električne
            naboje. Kada zatvorimo strujni kruga, tada iz izvora poteče
            električna struja koja obavi neki rad na trošilu i vraća se u izvor.
            Struja iz izvora teče sve dok postoji neravnoteža između električnih
            naboja na polovima izvora. Primjeri: kemijski izvori (baterije,
            akumulatori), generatori, solarne ploče itd.
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

export default Elektromagnetizam;
