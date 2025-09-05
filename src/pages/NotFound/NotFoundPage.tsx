import { PageTransition } from "@components";
import style from "./style.module.scss";

export const NotFoundPage = () => (
  <PageTransition>
    <main className={`${style.wrapper} container`}>
      <h1 className={style.title}>Такая страница не найдена.</h1>
    </main>
  </PageTransition>
);
