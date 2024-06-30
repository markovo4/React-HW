import styles from './numInput.module.scss';

const NumInput = () => {
    return (
        <div className={styles.wrapper}>
            <input
                className={styles.numInput}
                placeholder={'Choose amount'}
                type={"number"}
                min={0}
            />
            <button
                className={styles.submitButton}
            >Add to Cart
            </button>
        </div>

    )
}

export default NumInput;