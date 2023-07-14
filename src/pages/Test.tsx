import { useEffect, useState } from "react";
import CenterBox from "components/ui/layout/CenterBox";

const Test = () => {
  const [totalBeers, setTotalBeers] = useState(25);
  const [currentBeers, setCurrentBeers] = useState(25);
  const [deletedBeers, setDeletedBeers] = useState(0);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);

  const handleGoForward = async () => {
    setOffset((prev) => prev + 5);
  };

  const handleGoBackward = async () => {
    setOffset((prev) => prev - 5);
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    const numToDelete = parseInt(e.target[0].value);
    setDeletedBeers((prev) => prev + numToDelete);
    setCurrentBeers((prev) => prev - numToDelete);
  };

  useEffect(() => {
    if ((currentBeers / 15) * page < 1 || offset + 5 > currentBeers) {
      setPage((prev) => prev + 1);
      setCurrentBeers((prev) => prev + 25);
      setTotalBeers((prev) => prev + 25);
    }
  }, [offset, currentBeers]);

  return (
    <CenterBox flexDirection={"column"}>
      <h1>Number Total Beers : {totalBeers}</h1>
      <h1>Number Current Beers : {currentBeers}</h1>
      <h1>Deleted Beers : {deletedBeers}</h1>
      <h1>Page : {page}</h1>
      <h1>Offset : {offset}</h1>
      <button onClick={handleGoForward}>Go Forward</button>
      <button onClick={handleGoBackward}>Go Backward</button>
      <form onSubmit={handleOnSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </CenterBox>
  );
};

export default Test;
