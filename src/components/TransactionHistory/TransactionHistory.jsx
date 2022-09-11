import React from 'react'
import css from './transactionHistory.module.css'
import PropTypes from "prop-types"


export default function TransactionHistory({items}) {
    return (
      <table className={css.transactionHistory}>
        <thead>
        <tr>
     <th>type</th>
       <th>amount</th>
      <th>currency</th>
        </tr>
        </thead> 
        <tbody>
        {items.map(item => (

      <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr> 
        ))} 
         </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,

}