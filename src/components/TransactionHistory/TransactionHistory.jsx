import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    // console.log(items);
    return <table className={css.transactionHistory}>
  <thead >
    <tr className={css.headRow}>
      <th className={css.headTitle}>Type</th>
      <th className={css.headTitle}>Amount</th>
      <th className={css.headTitle}>Currency</th>
    </tr>
  </thead>
  <tbody>
    {items.map(item => <tr key={item.id} className={css.bodyRow}>
      <td className={css.bodyValue}>{item.type}</td>
      <td className={css.bodyValue}>{item.amount}</td>
      <td className={css.bodyValue}>{item.currency}</td>
    </tr>)}
  </tbody>
</table>
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
    currency: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
})
  ).isRequired,
};