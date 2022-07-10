import { useSelector, useDispatch } from "react-redux";
import { kurang, tambah } from "./BooksSlice";

const BooksView = () => {
  const dispatch = useDispatch();

  // Mengambil dari store
  const totalBooksRedux = useSelector((state) => state.book.totalBooks);

  console.log("total", totalBooksRedux);

  return (
    <div>
      <h1>BooksView</h1>
      <h1>Total Books: {totalBooksRedux}</h1>

      <button onClick={() => dispatch(kurang())}>kurang</button>
      <button onClick={() => dispatch(tambah())}>tambah</button>
    </div>
  );
};

export default BooksView;
