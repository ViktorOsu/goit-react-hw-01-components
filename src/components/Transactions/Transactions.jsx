import PropTypes from 'prop-types';
import {
  TransTable,
  TableHeader,
  TableRow,
  TableData,
} from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  console.log(items);

  return (
    <TransTable>
      <thead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TableRow key={item.id}>
            <TableData>{item.type}</TableData>
            <TableData>{item.amount}</TableData>
            <TableData>{item.currency}</TableData>
          </TableRow>
        ))}
      </tbody>
    </TransTable>
  );
};

TransactionHistory.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
