import useCharts from "../hooks/useCharts";
import ChartItem from "./ChartItem";
import styles from "./Chart.module.css";

export default function Chart() {
  const { data, isFirstFetching } = useCharts();

  return (
    <div className={styles.chart}>
      {isFirstFetching && (
        <div className={styles.loading}>차트 데이터를 가져오는 중입니다.</div>
      )}
      {data?.map((item) => (
        <ChartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
