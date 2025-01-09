import styles from "./styles.module.css";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...restProps } = props;
  console.log("Loading lib-a Button");
  return <button className={`${className} ${styles.button}`} {...restProps} />;
}