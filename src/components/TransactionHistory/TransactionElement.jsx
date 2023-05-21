import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionElement = ({ type, amount, currency }) => {
  return (
    <>
      <tr>
        <td className={css.section}>{type}</td>
        <td className={css.section}>{amount}</td>
        <td className={css.section}>{currency}</td>
      </tr>
    </>
  );
};

TransactionElement.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
