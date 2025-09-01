import { ChilderPtops } from "@/layout/Layout"
import styles from "./main_container.module.css"

export function MainContainer(
  {
    children,
  }: ChilderPtops
) {
  return (
    <main className={styles.global_main_container}>
      {children}
    </main>
  )
}