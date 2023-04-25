import PropTypes from 'prop-types';
import {
  StatisticsCard,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  // console.log(stats);

  return (
    <StatisticsCard>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} prop={label}>
            <StatisticsLabel>{label.slice(1)}</StatisticsLabel>
            <StatisticsPercentage>{percentage}%</StatisticsPercentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      lable: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string,
    })
  ),
};
