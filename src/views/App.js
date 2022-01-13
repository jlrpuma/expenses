import './App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getExpenses } from '../application/selectors/expenses';
import { getLoading } from '../application/selectors/loading'
import { pageLoaded } from '../application/actions/loading';
import { putExpense } from '../application/actions/expenses';
import { Grid, List, makeStyles, ListItem, Card, CardContent, Typography, CardHeader, TextField } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import NumberFormat from 'react-number-format';

const modifiedExpenses = (expenses) => {
  let clonedExpenses = [...expenses]
  clonedExpenses.push({ id: 2, name: 'energia', anything: 0 })
  return clonedExpenses
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    minWidth: '100%'
  },
  cardContent: {
    display: 'inline-grid'
  },
  list: {
    maxHeight: 500,
    overflow: 'auto'
  }
}));

export default () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const expenses = useSelector(getExpenses)
  const loading = useSelector(getLoading);

  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(pageLoaded)
  }, [dispatch])

  useEffect(() => {
    console.log(search)
  }, [search]) 

  const filter = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1> Expenses </h1>
        </Grid>
        <Grid item xs={3}>
          <h3> Some options</h3>
        </Grid>
        <Grid item xs={8}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
          >
            <TextField label="Search" variant="outlined" type="search" value={search} onChange={filter}/>
            {loading ?
            (<>
              <Skeleton height={100} width={'100%'} />
              <Skeleton animation={false} height={100} width={'100%'} />
              <Skeleton animation="wave" height={100} width={'100%'} />
            </>) :
            (
              <List className={classes.list}>
                {expenses.map(expense => (
                  <ListItem key={expense.id}>
                    <Card className={classes.card}>
                      <CardHeader title={expense.name}
                        action={
                          <>
                            <Typography>
                              {expense.date}
                            </Typography>
                            <Typography color='textSecondary'>
                              <NumberFormat
                                value={expense.cost}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                                renderText={formatedValue => formatedValue}
                              />
                            </Typography>
                          </>
                        }>
                      </CardHeader>
                      <CardContent className={classes.cardContent}>
                        <Typography variant='body1'>
                          <strong>Descripcion:</strong> {expense.description}
                        </Typography>
                        <Typography variant='body1'>
                          <strong>Categoria:</strong> {expense.category}
                        </Typography>
                      </CardContent>
                    </Card>
                  </ListItem>
                ))}
              </List>
            )
          }
          </Grid>
        </Grid>
      </Grid>
      {/* <button onClick={() => dispatch(putExpense(modifiedExpenses(expenses)))}>add Expense</button> */}
    </div>
  );
}
