import React, { useContext } from 'react'
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide
} from '@material-ui/core'
import {
  Delete,
  MoneyOff
} from '@material-ui/icons'

import { ExpenseTrackerContext } from '../../../context/context'
import useStyles from './styles'


// const transactions = [
  //   {
  //     id: 1,
  //     type: 'Income',
  //     category: 'Salary',
  //     amount: 50,
  //     date: 'Thu Jan 07 2021'
  //   },
  //   {
  //     id: 2,
  //     type: 'Expense',
  //     category: 'Pets',
  //     amount: 50,
  //     date: 'Fri Jan 08 2021'
  //   },
  //   {
  //     id: 3,
  //     type: 'Income',
  //     category: 'Business',
  //     amount: 150,
  //     date: 'Sat Jan 09 2021'
  //   },
  // ]

const List = () => {
  const classes = useStyles()
  const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext)
  
  return (
    <MUIList dense={false} className={classes.list}>
      {
        transactions.map(t => (
          <Slide direction='down' in mountOnEnter unmountOnExit key={t.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={t.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                  <MoneyOff />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={t.category} secondary={`$${t.amount} - ${t.date}`} />
              <ListItemSecondaryAction>
                <IconButton
                  edge='end'
                  aria-label='delete'
                  onClick={() => deleteTransaction(t.id)}
                >
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        ))
      }
    </MUIList>
  )
}

export default List