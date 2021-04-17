import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';

export default function Header() {
  const entradasRedux = useSelector((state) => state.entradas);

  const total = useMemo(() => {
    const result = 0;
    if (entradasRedux.length) {
      const totalEntradas = entradasRedux.reduce((init, next) => {
        const temp = init + parseInt(next.value, 10);
        return temp;
      }, 0);

      return totalEntradas;
    }

    return result;
  }, [entradasRedux]);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Entradas
          </Typography>
          <Button color="inherit">
            Total de entradas
            {' '}
            {total}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
