import styles from './card.module.css'
import Image from 'next/image';

export default function Card() {
    return (
        <div className={styles.card}> 
            <div className={styles.cardimg}>
                <Image src={'/img/event.jpeg'}
                alt='Product Picture'
                fill={true}
                objectFit='cover'
                />
            </div>
            <div className = {styles.cardtext} > 
                <h2>graduation party</h2>
                <h4> A restaurant decorated with a beautiful atmosphere on the day of the graduation ceremony.</h4> </div>

        </div>
    );
}