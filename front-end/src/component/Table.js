import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';


const styles = (theme) => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    // backgroundColor: "rgb(22,25,45)", 
    color: "white"
  },
  table: {
    // temporary right-to-left patch, waiting for
    // https://github.com/bvaughn/react-virtualized/issues/454
    '& .ReactVirtualized__Table__headerRow': {
      flip: false,
      paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined,
    },
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: 'initial',
  },
});

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48,
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns, classes } = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: 'inherit',
            }}
            headerHeight={headerHeight}
            className={classes.table}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={(headerProps) =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number.isRequired,
    }),
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

// ---

const sample = [
  ['Frozen yoghurt', 159, 6.0, 24, 4.0],
  ['Ice cream sandwich', 237, 9.0, 37, 4.3],
  ['Eclair', 262, 16.0, 24, 6.0],
  ['Cupcake', 305, 3.7, 67, 4.3],
  ['Gingerbread', 356, 16.0, 49, 3.9],
];

function createData(id, dessert, calories, fat, carbs, protein) {
  return { id, dessert, calories, fat, carbs, protein };
}

const rows = [];

for (let i = 0; i < 200; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createData(i, ...randomSelection));
}





export default function ReactVirtualizedTable() {
  const [ global , setGlobal] = React.useState([])
  useEffect(() => {
    fetchAPI ()
  },[])

  const fetchAPI = () => {
    fetch ("https://covid-1pp.herokuapp.com/api/global")
    .then(res => res.json())
    .then ((result)  =>  {
        setGlobal (result.Countries);
  })
  }

  // const tempArray = [] 
  // for (let i = 0; i < global.length; i += 1) {
  //       tempArray[i] = global[i]
  //       // const first =  `<div><img src="https://www.countryflags.io/${global[i].code}/flat/64.png"></img> </div>`
  //       // // const second = `/flat/64.png"></img>`
  //       // tempArray[i].code =   `<div>  dangerouslySetInnerHTML={<img src="https://www.countryflags.io/${global[i].code}/flat/64.png"></img>} </div>`
  //       // console.log (first)
  // }

  return (
      <Paper style={{ height: 600, width: '70%',
             borderRadius: "1.2em", 
             position: "relative",  
             boxShadow: '0  19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
             marginLeft: "15%", 
             marginRight: "15%", 
             marginTop: "15%", 
             backgroundColor: "#1c223b"
              
      }}>
      <VirtualizedTable
        rowCount={global.length}
        rowGetter={({ index }) => global[index]}
        columns={[
          {
            width: 300,
            label: <h2 style={{color: "gray"}}> {'Country'} </h2>,
            dataKey: 'country',
          },
          {
            width: 300,
            label: <h2 style={{color: "gray"}}> {'Country Code'} </h2>, 
            dataKey: 'code',
            numeric: true,
          },
          {
            width: 300,
            label: <h2 style={{color: "green"}}> {'New Cases Daily'} </h2>,
            dataKey: 'newCases',
            numeric: true,
          },
          {
            width: 300,
            label: <h2 style={{color: "red"}}> {'Total Confirmed'} </h2>,
            dataKey: 'totalCases',
            numeric: true,
          },
          {
            width: 300,
            label: <h2 style={{color: "red"}}> {'Total Death'} </h2>,
            dataKey: 'totalDeath',
            numeric: true,
          },
        ]}
      />
    </Paper>
  );
}

