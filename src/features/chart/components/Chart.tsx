import useCharts from "../hooks/useCharts";
import ChartItem from "./ChartItem";
import styles from "./Chart.module.css";

export default function Chart() {
  const { data } = useCharts();

  return (
    <div className={styles.chart}>
      {data?.map((item) => (
        <ChartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
