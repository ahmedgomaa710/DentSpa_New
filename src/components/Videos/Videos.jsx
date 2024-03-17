import Title from "../Title/Title";
import styles from "./Videos.module.css"
export default function Videos() {
    return (
        <section className={styles.videos}>
            <Title name="Patients had the same treatment that you are going to do" />
            <div className={styles.main_videos}>
                <iframe width="420" height="345" src="https://youtube.com/shorts/q8sg9Tj5kyk?si=YCm1f-06e1MxLjQh" frameborder="0" allow='autoplay' ></iframe>
            </div>
        </section>
    )

}