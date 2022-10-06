import { Pagination } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});
// const useStyles = makeStyles(() => ({
//   ul: {
//     "& .MuiPaginationItem-root": {
//       color: "#0CA136",
//     },
//   },
// }));

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  //   const classes = useStyles();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={numOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
          itemsCountPerPage={4}
          hideNextButton
          hidePrevButton
          color="primary"
          //   classes={{ ul: classes.ul }}
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;