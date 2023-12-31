import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { withTranslation } from 'react-i18next'
import { Container, Box, Typography, Button } from '@mui/material'
import Header from '../components/Headers/Header'
import { SERVER_URL } from '../config/constants'
import { getRestaurantProfile } from '../apollo'
import useGlobalStyles from '../utils/globalStyles'
import useStyles from '../components/styles'
const RESTAURANT = gql`
  ${getRestaurantProfile}
`
const Payment = () => {
  const restaurantId = localStorage.getItem('restaurantId')

  const { data, error: errorQuery, loading: loadingQuery } = useQuery(
    RESTAURANT,
    {
      variables: { id: restaurantId }
    }
  )
  const submitPaystackDetails = () => {
    fetch(SERVER_URL + '/Paystack/account', {
      method: 'POST',
      body: JSON.stringify({ restaurantId }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        window.location = data.url
      })
      .catch(error => {
        console.log('error', error)
      })
  }
  const globalClasses = useGlobalStyles()
  const classes = useStyles()
  return (
    <>
      <Header />
      <Container className={globalClasses.flex}>
        <Box container className={classes.container}>
          <Box className={classes.flexRow}>
            <Box item className={classes.heading2}>
              <Typography variant="h6" className={classes.textWhite}>
                Delivery Rate
              </Typography>
            </Box>
          </Box>

          <Box className={classes.form}>
            {loadingQuery && <span>Loading...</span>}
            {errorQuery && <span>{errorQuery.message}</span>}
            {data && data.restaurant.PaystackDetailsSubmitted && (
              <Typography>Paystack Details Attached</Typography>
            )}
            <Box mt={3} mb={3}>
              <Button
                className={globalClasses.button}
                disabled={loadingQuery}
                onClick={submitPaystackDetails}>
                {data && data.restaurant.PaystackDetailsSubmitted
                  ? 'Edit Paystack details'
                  : 'Submit Paystack Details'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}
export default withTranslation()(Payment)
