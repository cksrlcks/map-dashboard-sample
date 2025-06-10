import type { ChartData } from "../type";
import styles from "./ChartItem.module.css";

type ChartItemProps = {
  item: ChartData;
};

export default function ChartItem({
  item: { min, max, step, standard, value, label },
}: ChartItemProps) {
  const rangeMap = step
    ? Array.from({ length: step })
        .fill(0)
        .map((_, index) => {
          if (index === 0) return min;
          if (index === step - 1) return max;
          return (min + (index * (max - min)) / (step - 1)).toFixed(2);
        })
    : [min, max];

  const percentage = ((value - min) / (max - min)) * 100;
  const isOverStandard = standard ? value > standard : false;

  return (
    <div className={styles.chartItem} data-alert={isOverStandard}>
      <div className={styles.chartInner}>
        <div className={styles.container}>
          <div className={styles.bar} style={{ width: `${percentage}%` }}>
            <span
              className={styles.barLabel}
              data-dir={percentage > 50 ? "left" : "right"}
            >
              {value}
            </span>
          </div>
          {standard && (
            <div
              className={styles.standard}
              style={{ left: `${((standard - min) / (max - min)) * 100}%` }}
            ></div>
          )}
        </div>
        <div className={styles.gaugeContainer}>
          {rangeMap.map((range, index) => (
            <div key={index} className={styles.gauge}>
              <span className={styles.gaugeLabel}>{range}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
