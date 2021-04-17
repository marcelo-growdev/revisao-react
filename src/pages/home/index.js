import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Grid, Box, TextField, Button,
} from '@material-ui/core';

import { setEntradas } from '../../store/modules/entradas/actions';

export default function Home() {
  const dispatch = useDispatch();
  const entradasRedux = useSelector((state) => state.entradas);
  const saidasRedux = useSelector((state) => state.saidas);

  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('Renderizou o componente.');
  }, []);

  useEffect(() => {
    console.log('Alterou o valor do meu value: ', value);
  }, [value]);

  const handleChangeInput = (e) => {
    if (e.target.name === 'description') {
      setDescription(e.target.value);
    } else {
      setValue(e.target.value);
    }
  };

  const handleSubmit = () => {
    dispatch(setEntradas({ description, value }));
    setValue('');
    setDescription('');
  };

  return (
    <Grid item xs={12}>
      <h1>Home</h1>
      <Box p={1}>
        <TextField onChange={handleChangeInput} name="description" value={description} fullWidth label="Descrição" variant="outlined" />
      </Box>
      <Box p={1}>
        <TextField onChange={handleChangeInput} name="value" value={value} type="number" fullWidth label="R$ valor" variant="outlined" />
      </Box>

      <Box p={1}>
        <Button variant="contained" onClick={handleSubmit} color="secondary">
          cadastrar
        </Button>
      </Box>
    </Grid>
  );
}
