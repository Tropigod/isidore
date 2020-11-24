import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function createData(name, champs1, champs2, champs3, champs4,champs5) {
  return { name, champs1, champs2, champs3, champs4,champs5 };
}

const rows = [
  createData('ex1', <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkJCRYWFhgWFhYoIh0hMCooMigwKysoKigoMCstMCowKSgqKh8oKCgdKCgoHh0dHR0dHR0dKB0dHR0dHx0dHR0BCAYGEA8QDQ8QDxUVDxUPFRUVFRUVFRUVDxUVFRUVFRUVDRUVGBUVFRUVFRUVIBUXGR0dHSkVFS4mJR0xGCkdHf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xAA/EAACAQIDBAYJAgQFBQEAAAAAAQIDEQQhMQUSQVFhgZGh0fAGIjJCUnGxweETFCMzU/EVQ2JygiREkrLCB//EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAuEQACAQMCBQMDBAMBAAAAAAAAAgEDBBESMRMUIUFRBTJSYXKhQmKBkRXh8CL/2gAMAwEAAhEDEQA/ANRVCaMzPUieMz7E+VLqY7iivGZYjNCKgrVq0ISjGUknLJdL+/5JHSOa27JPFYRcnfvR1tyEfMtBsyRELPkoumDuMuOIt0sjBR3BWLriA4ABVaBcSdxAaAZBYcNjEgDcQ7GABXEMK4AITGuK4gGaGHuIAGSE0EK4wInEBxLNgHEWkCs0Ayw0RtEYGRCHcQWMBBoiuA60VrJInULSW7iKP7yHxx7V4iK1wGiTSTDTIUGi9RnpLKkTKZUTJEyshg57ayU8XhovNZPvOuUjjsbK+No9CX3OsUjCju/3HRV9qfaTqQSkQXG3jUyLG+LeIN4ZyAeSZtAtIqyxMFrJIiljoLO9+p+AtUD0yW3TI3ArPHcovu8SP97JtpR06fBBrgNMltxAZTqYmdm7xVuj8gylN+/9F9hcQNJcbHRkyXrK8nb5+FgJTpL2pLrfiyOKVwzWlJLV2IniIfEvPyMuGJpR3ndLz0Ce1KSdt6/UTx48lcCfixo/uYcM+p+Av3PKMn56WjJhtSCWj89YD2xHhEnmV+Q+XbwWsXtOUHCKp5ydteHVcuOrP4V2/g5PH4/flTlu23c/ORdltmfCKI5qMz1NWtZwuIN9VZ/6V2+KBhVnKKbklfPTxZz72tU5Lz1kH+JVEklLTLQOcX6i5NvodO4yfvvu8CCrF29uXBcuPQjm5bRqfH9PAgltCb1qd5DXqlLZt9Dq3QXOXa/EjeGjyv56Wcm8fLjV7/yQSxi41O/8ktfL4K5NvJ1dbDwS9larh0oLdguCRxjxUeMgHiofERz8eCuTnydr+rH4kI4n95D4hB/kIHyMnqCiSpFR4pe7Fvh5vn3ESx0mr7qXf4HfxYPO4Umnuh7hz72iretVt8vxmVv8SppZ3k/PFslrpYNFt2BxVSP76DvdJa9vL5nQvGwvZJvz02OEq4z+P+pFJW+liapt3NveiuHnU5ovIXV9x1Pay2nHxOyljpZWjrlr9kvuDPEzs/WS6vFs4Grty/vyfnqKc9rJ+7Jkt6ko19Pk9BeJVlvVe/wsVf3lJX3pX7/qcC9qS4Rt3kT2jUejS89Jk3qUGq+nfU757SgpJpdHIiqbUumlHU4F4uo9Zfb6ETqTesn2mbepMaLYKd7U2tPgorz8ytLa7X+ZFX+Rw7j0isjOb9ils1g6+e2U9avnqRXlteD1nJ9pzOQSaM5umkrllg3XtWHJvz8yCe04v3TI3h97oJau3yL4cGo9qvhDz2ET2nNu+6jP3ht4XFnyPRBfe0qnQvPzIntCp8RTciWjQlN5ZIWtpHpiC7QrzlvOUr2Kjrz+JlyGHlBSu73MjefMp5mIXIkiMsWHUm/efaA78yK/SK/SZZKwSOIt0jv0iv0jyMk3Rt0C/SNkTkA7CsANceADECMGB5Omnt2WilJooz2o3pEyXdaqxdobNxFS25QnJPlF/ZWNZuHkyigsDvH1Hxt56SGWJm9ZPz8jeo+h2Ol/27S6Wl3N37jUpf8A59in7UoR62/ord4LTduzBlYOYb/g55/3M660SO2w3o9v13hJT0y3kuWfHsN6p6C0KcJzc5txTfDVdXQbNaNPWCOMsHl84yjrGxHvmu470kmetbA2VQeGpzlRhd3z3VnZtctbEUrPVO5T1cQeHpt6FmGEqy9mnJ/8X9kfQ0cHBezFLz0DvDrgzpX0uO7/AIMZvZ+J4JT2HipaUJ9lvrYuU/RXGS/ybfNpfc9u/bdJHKi0ar6YndmM2vW+KnkMfQzFPXdXzfgi1H0IrcasV2/g9QcBt00X02mZNeueax9B5ca6/wDH8lhehUPerPst9Wz0BwAdM0Wwp+CGu38nDr0No8as32eBKvRHDLVyfX4I6+VFkbpMrk0+KktdP5OXXovhl7rfW/ElXo9hl/lX62/udA6T5Ecqb5D5dY/Qv9Ecdvkx5/t3A04ShGFOKTzvx7+BmUo2Oi29H+LH5fcxHGx51wsQzYPRotMquQqFpVIJq6bSO5WzKH9GHYvA4nCRf6kHZ2TR3yqX0Z0WeMdTmvc5jBD/AIfR/pR7F4DrA01pTj2LwJd8W+deIOTVICw0F7kexeAX6UfhXYEpDbxWIFmSKVKPwkbpL4Sw5ETmTgWSB01yAcVyJZSIJSDBeQbLkIDeELA8nnuHxFrJ2a6T3nYmNhOhTVKUWlFLdT9l205q3SfOkZNGjhsRZpp2a6jx7W4x0k9erSzsfSiqPjENTjxR5Tsz0snFKNaV/wDV48/mjsKW13JJxkmmegkQ2xyzWldzC2W4y2tWb09b6Hc7UpQ/b1mpaQk+4802Tif+vqy57/1Ow2njr0KytrFruM4pTMZiTTmFjpMHjtKP8RHuGwMJJ4Sk+av3s8Spr1z3r0ex9KOFoxk7NRsc8OyxlYydCIje4OeHkuBWcWjp4Yui/fXnqIq0KUk7SQ19TmPcjDawVvbJzm8x07mvS2W5Ri73uk/mx1sab5I2X1KnPc539PaPj/ZkKlF6ysA8NH4jSq7LnHPKxUnhppXehol2rbOTNo0R7CnKhyZC4MnhO9+htdj/AAPc3VznamU2ranNYj0ooQk45t6ebLXoOh2rU3KFSS4RfnvPGdmpyxVF86kF17yMLi6ldMQXStYnVMnoU/SilH2oyXzUl/8AI0fSzCvWdupv7I9Sr7Rpw/mVIx+bS+rMivt7CZ/xVPoS3vomTzLdzGJWdl/P+jyjam0aFaalCrFJLjl9jMuvclCT/wBy+7R6PjvSLDyhU3cPOVk8/wBPR243WVuk8ToYWc0t2Deufngnn1nJcv8Aznwd1lOfpjyb9XEVo5SVn814gU9oVIO8svPRkS0qjUIqtTu0qivbW8PU64zV5Nv2X6vS9SWHlZ7trfpXXrest3+Jq8rTtu58d6JnwY3hjr5mdpU0sNtt3SeZ1OGrQmrxeZwGPwEKb/UoS36T7Yvk+Nvhl/x9rWTB7QcWmmXSu2RsN1Uxr2S1IyvRj0NxRG7FXCbQjUSUnZ+e8tSpnq06sNGYPIq0pScSRtkTYcoshcWVkgjkQsmcSJxDJUEdhD7oidQzy2wlF8A7D7p88e4WqGJayka+Gx8qb3qc0r6x4Pq4PpRgNtZPgO5rRq5tTrzBm1OJOu2bjYRrSqTlup36m/kbmL2xTnCcY1Iu6tb+5wOIlaKIcNP1kb860TpMGtYn/wBG1B2lc9G2Zio/pQSeiseZQl6xSqy9aRS3Wjrgb0tUYPcY1uTCq1nuyz4M8QhjJx9mcl1/ku0tuYiKaVVtPK39yv8AIrO6mfAaNmPaKGOnCMN2bSt3W/BfW0qrX8zI8epekmIaUbRaWV7dWt+RsUNsVox9ZRz7il0N10/gpneO/wCT0t7TndJyv5+RCsdKcYuSvx82PN623a8M1Sv3/TMyn6UYleqmlbLTxJnhrPt/Ba16kx7j1PC1k03ur2pf+z6S06kfhXnrPG16Q4lKyn06cX+Rn6QYn+oJrhf3BGr9v/fwejekEl+1q2yy+54lGrZ5ZZ3N+ttetOLjKbaeVugxlSSlvJ56+boxrV4aVwXSXGrJ3fo7t6UNyLwtOTTvvWUZPX2na719roR6HivSqUY2hh1JrO2/bsvGzXDh/tPEaW0asFaMrdS8sJ7WruSlv5rPT85pl8VJjrnUZcJs/p0nXYz0jmqWLj+h/MjKTd/Y3rQ5es05L4d44/AbSk4qF9OHUl329bqLMsdiJ05xbi4zVnlnrfK7yd0jAnhpxyv5vfnzMrh8zmDe2TG0HWQxSzb+QVSMakJRiopuzvbkrJX1StyOQjiJLJmthsT0ma1ZOhliQXUnSluvJ/b7ojl7W8ks8/Nskb8ZwqR3Zq6+ngR0tmxg7xldee0Wiew+J5Fh248LXOmwmMUovelZrIxYU0iria9KnaVSF75X8teUdVq2mTiu11wdU8TD4l2kMsXD449pyb2nhP6fd+SJY/C3bdPJ/Tt5nVN1HyU4+Vn4sdW8ZD449pE8XD449pzv7zCP3fPaD+5wnw/XxK5qPkocr9GOh/dQ+OPaMcnUq0bvdjl1iDmftK5WDCGuOI8Q9EVxmxxwAu4n2SnSdpIuYj2SmoN6I1rT1ITY1abe9qU5y9Zk9DDz6iwoQhn7TfUr/VmkpLQIr08O5Z6Lz2Fyhhot7sVvPnovyTQoSnZydl2d3A0qdOMVZKyNKVvBLMFQoRja7u/PAsyit27d75dRDmFNeqkdWxmRUcXuS3JacC1VoU56rMza9JTj0oiwuI92TtbIjOOkhKd4JKuy17sjLq4OceFzoHFiceZD0VkatMHLNNa5AtnSTw6fIz6uz+XntMGt57Fq5lNgORZqYWS8+UU5xlHVWMWWYKNbD5wS5kM8K37weG9mJYUTdUiYXIK8xsYs6Eoq+o0KhexHsso4aN7xfzMqqadjVKudy9SxDNjDYhmIoW1LlJ8hJkpjeburoyNqwvTfRn56rlqlVJK0VOLjzyNdWYM9ODiBBuNm09VkC0c5Q1xg93K9xmrAA1xC3XyEABWHSEk3oTQw7eoKsyIhJYUZPgaFHC9Fiw5Qiss2arR7yQzkEaTescukkjGEL8SGdZy0JaGGcndm289CRb055LQuUcMo5vUnhBR0JEaqnknUJRuyZPpBuFE0EE5BSfC4y1QUnxGIjhrZ6GfiaO67l7esxppOJDrmB9yHCYn3ZM0HEwalNwdmaGExdvVk8iVbtInXvBcsM0TNAdRRCsRSgnqV5YOL0di5Yawi9RkzwclorlealotTdt0gygnqrk6B6jnFQmk95akLkoPKNjonh7ezKxWq4dv2o3XngQ9LoNWMtq+aGhVsWHTUckVay4nNpmJOnOYyXoVkyz+pkYUJmlQnfIeQgy8bFKbdsnn56yrvG9jsNeO9bNZ9Rz91wJYQn8xCUQnF8SQBEFboEGANaFB/JE29COmbKU8RvARTZ1ZiNjHHknq4hvpAjBy1JKVG5p0aSQ1SWFM4IaWHXEurIFy5Do2VcbEiRKgMh7oYBolyIkkFkUAcWJxyGghOwARTQat2gSaGUgACtFOLXHUzFlka846MpYmFrSXHIyqwNSzhMVb1Zac+RqNHMpmhhMVa0ZacH54DRyHp94NVxAbDZE2iiFBYFx3IFyEahIVgVLoEp80Ahp009VcwcRScJWej088zoN7oZBWjvxcd3X6kVUhoNEfBzrjYOnUsBNNNp8CKUrZnGbm0sSt2zOWmkpPd0Dq128uBATM5AtU6uVrZkm8n7SKSZdp0pSV4u41mZJkARJuT+EQ9JOosQikW6dK+uQ9OnYuROpEMWYOEbIJyAchrmoiRBkaCGASY6WYAaAZIhmMmIoA1oMxkshXAYzBsPcFkiJIvKwD5PQCKs9Qp5i3gc4jYy5+rJrP8Dp3L1Sk5LLJozk3pyMdijWwmMS9WWn0NRx4o5c0cFjd31ZPLz3Fq/aTN07waLiAyeb5EDiXgSsIQInIChnlxI3Wik3fTM5ralWUqji3kvAyjnqXWJxg0WlkuzxW9dy1d35+hUnNsAY5mnJsOMIRIDonoVN2XQQCQK2AN/wBfpHMVYiSyTEbcWDLhydIrIO5DcNM7DAMJAoIBhXCuBcQASJhpkSCuPUMkuOmRtj3HqAkuC2M2A2DAHcFjXGbEATYRHewSYAEnnYqYqj7yLDJk7oh1BZMZMdh1qe7LXJkZBZo4TGbtoyeXM1pO+ZzDLuGxm7aMtPPcaK/khk7mo0AyVgNFCg5zbVLOM1pp1mCd1WpRlFxkrpnJYzBSpvPNPj50ZyXCdcm9J+xREOMc5oIQhAA4hhAA4hCADp0EiJMkTPSOMkTHTI0wkABjoByCQDJLjbwwNwAPeHTIwkAyRyGuRqWQ9wAK4zGGbEATHuR3HTHqAluCpWYyYzAA69PfVusxlKzs9UamrWZDisOvaXWZMVBVTEJd4zYDLuFxjjaMtPPcarkc20XcJi931ZaDR/JLKazK2IpKcZR5/UtWXUwGi2USscLODTaas0AbW16FpKa0eXX/AG+hinA6YnB0q2YEIQiRiEIQAIQhAB0iDEI9LscYaHQhCASJEIQxtuJjIQhAOOhCCABjogmIQDExmIQAMMhCJ7gOghCKCQVqWJaMQiGCDHXsjLiIRJcjMd6CESM2cL7MSdiEbJsZGXtP+VLq+py4hHLc7m9LYYQhGBoIQhAA4hCGB//Z" alt="tonimage"></img>, 3.7, 67, 4.3,4),
  createData('ex2', 'test', 25.0, 51, 4.9),
  createData('ex3', 'test2', 16.0, 24, 6.0),
  createData('ex4', 159, 6.0, 24, 4.0),
  createData('ex5', 356, 16.0, 49, 3.9),
  createData('ex6', 408, 3.2, 87, 6.5),
  createData('ex7', 237, 9.0, 37, 4.3),
  createData('ex8', 375, 0.0, 94, 0.0),
  createData('ex9', 518, 26.0, 65, 7.0),
  createData('ex10', 392, 0.2, 98, 0.0),
  createData('ex11', 318, 0, 81, 2.0),
  createData('ex12', 360, 19.0, 9, 37.0),
  createData('ex13', 437, 18.0, 63, 4.0),
  createData('ex14', 437, 18.0, 63, 4.0,5),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'id' },
  { id: 'champs1', numeric: true, disablePadding: false, label: 'champs1' },
  { id: 'champs2', numeric: true, disablePadding: false, label: 'champs2' },
  { id: 'champs3', numeric: true, disablePadding: false, label: 'champs3' },
  { id: 'champs4', numeric: true, disablePadding: false, label: 'champs4' },
  { id: 'champs5', numeric: true, disablePadding: false, label: 'champs5' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all ids' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          tableau porte
        </Typography>
      )}

    
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('champs1');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.champs1}</TableCell>
                      <TableCell align="right">{row.champs2}</TableCell>
                      <TableCell align="right">{row.champs3}</TableCell>
                      <TableCell align="right">{row.champs4}</TableCell>
                      <TableCell align="right">{row.champs5}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={1} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}
