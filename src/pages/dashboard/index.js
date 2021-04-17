import React from 'react';
import { useSelector } from 'react-redux';

import { Grid, Box, Typography } from '@material-ui/core';

export default function Dashboard() {
  const entradasRedux = useSelector((state) => state.entradas);

  return (
    <Grid item xs={12}>
      <h1>Entradas</h1>

      {entradasRedux.map((item) => (
        <Box p={1}>
          <Typography variant="h6">
            {item.description}
            {' '}
            <br />
            Valor:
            {' '}
            {item.value}
          </Typography>
        </Box>
      ))}
    </Grid>
  );
}
