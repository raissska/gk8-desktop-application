import { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { AppContext } from "../App";
import { Body } from "../components/TableBody";
import { Header } from "../components/TableHeader";
import { IAppContext } from "../models";


export default function Table() {

  const { transactions,nextPage,hasMore } = useContext(AppContext) as IAppContext

  return (


    <div className="table-wrapper">
      <InfiniteScroll
        dataLength={transactions?.length || 0}
        next={nextPage}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        <Header />
        <Body />
      </InfiniteScroll>
    </div>

  )
}