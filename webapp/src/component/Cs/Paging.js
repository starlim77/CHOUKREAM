
import Pagination from "react-js-pagination";
import "./Paging.css"

const Paging = ({ page, count, setPage }) => {
  return (
    <div>
           
                     
                
                    <Pagination 
                    activePage={page}
                    itemsCountPerPage={10}
                    totalItemsCount={count}
                    pageRangeDisplayed={10}
                    prevPageText={"<"}
                    nextPageText={">"}
                    onChange={setPage}
                   />
              
              
     
   
      
    </div>
     );
   };
     
    export default Paging;
    