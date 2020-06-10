import { connect, Global, Head, styled } from "frontity";
import React from "react";
import Footer from "./footer";
import globalStyles from "./styles/global-styles";
import Header from "./header";
import Archive from "./archive";
import Pagination from "./archive/archive-pagination";
import Loading from "./loading";
import Page404 from "./page-404";
import Post from "./post";
import SearchResults from "./search/search-results";
import SkipLink from "./styles/skip-link";
import MetaTitle from "./page-meta-title";



/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */


const Theme = ({ state, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const parse = libraries.source.parse(state.router.link);
  // Check if the url is a search type
  const isSearch = Boolean(parse.query["s"]);

  return (
    <>
      {/* Add some global styles for the whole site, like body or a's. 
        Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles(state.theme.colors, state.theme.fontSets)} />

      {/* Add some metatags to the <head> of the HTML. */}
      <MetaTitle />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Accessibility: Provides ability to skip to main content */}
      <SkipLink as="a" href="#main">
        Skip to main content
      </SkipLink>

      <div style={{ minHeight: "calc(100vh - 190px)" }}>
        {/* Add the header of the site. */}
        <Header />
        {/* Add the main section. It renders a different component depending
        on the type of URL we are in. */}

        <Main id="main" >
          {(data.isFetching && <Loading />) ||
            (isSearch && <SearchResults />) ||
            (data.isArchive && <Archive />) ||
            (data.isPostType && <Post />) ||
            (data.is404 && <Page404 />)}
            
        </Main>
      </div>
      <div style={{ minHeight: "96px", padding:"0% 10%", maxWidth:"1600px", margin:"45px auto"}}><Pagination /></div>

      <Footer />
    </>
  );
};

export default connect(Theme);


const Main = styled.main`
display: grid;
grid-template-columns: repeat( auto-fit, minmax(45%, 1fr) );
grid-auto-rows: auto;
grid-gap: 3rem;
margin: auto;
padding: 2% 5%;
max-width: 1600px;

@media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
}

`;

const HomeBanner = styled.div`
display: none;
@media (min-width: 1000px) {
  display: block; 
  background: #ffffff;
  position: relative;
  overflow: hidden;
  z-index: 2;
  height: 100%;
  vertical-align: text-bottom;
  font-size: 46px;
}
@media (max-width: 999px) {
  display: block; 
  background: #ffffff;
  position: relative;
  overflow: hidden;
  z-index: 2;
  height: 320px;
  font-size: 46px;
}
`;
