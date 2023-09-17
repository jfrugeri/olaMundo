import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Juan Frugeri, aluno de
          front-end da Alura. Aqui compartilho vários conhecimentos, espero que
          aprenda algo novo.
        </p>
      </div>
      <div className={styles.imagens}>
        <img src={circuloColorido} alt="Perfil" className={styles.circuloColorido} aria-hidden={true} />
        <img src={minhaFoto} alt="Foto do Juan" className={styles.minhaFoto} />
      </div>
    </div>
  );
}
