import React from 'react';
import { withTranslation } from 'react-i18next';
import { useQuery, gql } from '@apollo/client';
import { Grid, CircularProgress } from '@mui/material';
import Header from '../components/Headers/Header';
import axios from 'axios';
import EmailConfiguration from '../components/Configuration/Email/Email';
import DeliveryRateConfiguration from '../components/Configuration/DeliveryRate/DeliveryRate';
import PaypalConfiguration from '../components/Configuration/Paypal/Paypal';
import PaystackConfiguration from '../components/Configuration/Paystack/Paystack';
import CurrencyConfiguration from '../components/Configuration/Currency/Currency';
import { ReactComponent as ConfigIcon } from '../assets/svg/svg/Configuration.svg';

const GET_CONFIGURATION = gql`
  query GetConfiguration {
    configuration {
      emailName
      email
      password
      enableEmail
      publishableKey
      secretKey
      clientId
      clientSecret
      sandbox
      currency
      currencySymbol
      deliveryRate
    }
  }
`;

const Configuration = () => {
  const { data, loading, error } = useQuery(GET_CONFIGURATION);

  if (loading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} lg={7}>
          <EmailConfiguration
            emailName={data.configuration.emailName}
            email={data.configuration.email}
            password={data.configuration.password}
            enabled={data.configuration.enableEmail}
          />
        </Grid>
        <Grid item lg={5} sx={{ display: { xs: 'none', lg: 'block' } }}>
          <ConfigIcon />
        </Grid>
        <Grid item xs={12} md={12} lg={5}>
          <PaystackConfiguration
            publishableKey={data.configuration.publishableKey}
            secretKey={data.configuration.secretKey}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={5}>
          <PaypalConfiguration
            clientId={data.configuration.clientId}
            clientSecret={data.configuration.clientSecret}
            sandbox={data.configuration.sandbox}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={5}>
          <CurrencyConfiguration
            currencyCode={data.configuration.currency}
            currencySymbol={data.configuration.currencySymbol}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={5}>
          <DeliveryRateConfiguration
            deliveryRate={data.configuration.deliveryRate}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default withTranslation()(Configuration);
