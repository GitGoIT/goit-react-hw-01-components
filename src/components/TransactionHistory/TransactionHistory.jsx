import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    console.log(items);
    return <table className={css.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    {items.map(item => <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>)}
  </tbody>
</table>
};

TransactionHistory.propTypes = {
    currency: PropTypes.string,
    amount: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
};