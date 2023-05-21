import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <div className={css.container}>
      <section className={css.statistics}>
        {title && <h2 className="title">{title}</h2>}

        <ul className={css.stat_list}>
          {stats.map(infoBlock => (
            <li className={css.item} key={infoBlock.id}>
              <span className={css.label}>{infoBlock.label}</span>
              <span className={css.percentage}>{infoBlock.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
