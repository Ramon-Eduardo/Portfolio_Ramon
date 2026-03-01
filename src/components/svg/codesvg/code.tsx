import styles from "./style.module.scss";

const Code = () => (
    <svg className={styles.codeIcon}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        // className="lucide lucide-code-xml-icon lucide-code-xml"
        viewBox="0 0 24 24"
    >
        <path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"></path>
    </svg>
);

export default Code;