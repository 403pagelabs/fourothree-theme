import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";

/**
 * Pagination Component
 *
 * It's used to allow the user to paginate between a list of posts.
 *
 * The `state`, `actions`, `libraries` props are provided by the global context,
 * when we wrap this component in `connect(...)`
 */
const Pagination = ({ state, actions, libraries }) => {
  // Get the total posts to be displayed based for the current link
  const { totalPages } = state.source.get(state.router.link);
  const { path, page, query } = libraries.source.parse(state.router.link);

  // Check if we can go to next page within the pagination
  const isThereNextPage = page < totalPages;

  // Check if we can go to previous page within the pagination
  const isTherePreviousPage = page > 1;

  // Get the link for the next page
  const nextPageLink = libraries.source.stringify({
    path,
    page: page + 1,
    query
  });

  // Get the link for the previous page
  const prevPageLink = libraries.source.stringify({
    path,
    page: page - 1,
    query
  });

  // Pre-fetch the the next page if it hasn't been fetched yet.
  useEffect(() => {
    if (isThereNextPage) actions.source.fetch(nextPageLink);
  }, []);

  return (
    <div className="pagi">
      {/* If there's a next page, render this link */}
      {/* If there's a previous page, render this link */}
      {isThereNextPage && (
        <Link link={nextPageLink}>
          <Text>→</Text>
        </Link>
      )}
      {isTherePreviousPage && (
        <Link link={prevPageLink}>
          <Text>←</Text>
        </Link>
      )}

    </div>
  );
};

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect(Pagination);

const pagi = styled.div`
display: grid;
grid-template-columns: repeat( auto-fit,minmax(45%,1fr) );
grid-auto-rows: auto;
grid-gap: 5rem;
`

const Text = styled.div`
display: inline-block;
border-radius: 1px;
background: -webkit-linear-gradient(to right, #ee076e, #f81f01); 
background: linear-gradient(to right, #ee076e, #f81f01); 
border: none;
color: #FFFFFF;
text-align: center;
font-size: 28px;
float: right;
padding: 20px;
width: 42%;
-webkit-transition: all 0.5s;
transition: all 0.5s;
cursor: pointer;
margin: 4%;
max-width: 1600px;
border-radius: 4px;

`;

const pagibuttonprev = styled.div`
  float: left;
  background-color: #000000;
`;

const pagibuttonnext = styled.div`
float: right;

`;