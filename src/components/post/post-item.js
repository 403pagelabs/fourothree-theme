import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "./featured-media";
import PostMeta from "./post-meta";
import PostCategories from "./post-categories";
import PostTags from "./post-tags";


/**
 * Article Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const PostItem = ({
  state,
  item,
  libraries,
  showExcerpt,
  showMedia = true
}) => {
  // Get all categories
  const allCategories = state.source.category;
  /**
   * The item's categories is an array of each category id
   * So, we'll look up the details of each category in allCategories
   */
  const categories =
    item.categories && item.categories.map(catId => allCategories[catId]);

  // Get all tags
  const allTags = state.source.tag;
  /**
   * The item's categories is an array of each tag id
   * So, we'll look up the details of each tag in allTags
   */
  const tags = item.tags && item.tags.map(tagId => allTags[tagId]);

  const content = showExcerpt ? item.excerpt : item.content;
  const { Component: Html2React } = libraries.html2react;
  
  return (<PostLink link={item.link}>
    <Post>
      <PostHeader>
        <SectionContainer>

          {/* If the post has categories, render the categories */}
          {/*item.categories && <PostCategories categories={categories} /> */}

          {/* The clickable heading for the post */}
          
            <PostTitle
              className="heading-size-1"
              dangerouslySetInnerHTML={{ __html: item.title.rendered }}
            />
          

          {/* The post's metadata like author, publish date, and comments */}
     
        </SectionContainer>
       
      </PostHeader>
      
      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
      {/* state.theme.featuredMedia.showOnArchive && showMedia && (
        <FeaturedMedia id={item.featured_media} />
      )*/}

      {/* If the post has an excerpt (short summary text), we render it */}
      {content && (
        <PostInner size="thin">
          {/* TODO: Change this to HTML2React */}
          {/* dangerouslySetInnerHTML={{ __html: content.rendered }} */}
          
          <EntryContent>
          <Html2React html={content.rendered} />
          </EntryContent>
          {/* If the post has tags, render it */}
          {/* item.tags && <PostTags tags={tags} /> */}
          
        </PostInner>  
        
      )   }
  
    </Post></PostLink>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(PostItem);

// All styles :)

export const Post = styled.article`
transition: all 0.15s ease;
background-color: #fff;
-webkit-box-shadow: none;
box-shadow: none;
border-radius: 6px;
border: 5px solid white;
-webkit-box-shadow: none;
box-shadow: none;


  :hover{
    border-radius: 6px;
    z-index: 0;
    -webkit-box-shadow: 0px 10px 30px 0px rgba(20,3,67,.09);
box-shadow: 0px 10px 30px 0px rgba(20,3,67,.09);

    
  }

  &:first-of-type {
  }

  @media (min-width: 700px) {
    &:first-of-type {
    }
  }
`;

export const PostHeader = styled.header`
  text-align: center;
  padding: 40px 1px;
  background: -webkit-linear-gradient(to right, #ee076e, #f81f01); 
  background: linear-gradient(to right, #ee076e, #f81f01); 
  border-radius: 6px 6px 0 0;
    :hover {
    }
  
`;

// Header sizes bases on style.css
const maxWidths = {
  thin: "58rem",
  small: "80rem",
  medium: "100rem"
};

const getMaxWidth = props => maxWidths[props.size] || maxWidths["medium"];

export const SectionContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 4rem);
  min-height: 10px;
  max-width: 80%;
  @media (min-width: 700px) {
    width: calc(100% - 8rem);
    
  }
`;

export const PostTitle = styled.h1`
  margin: 0;
  display: inline;
  @media (min-width: 700px) {
    font-size: 2.5rem !important;
  }
`;

const PostLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  display: inline-block;
  min-width: 100%;
  top: -35px;

  &:hover {
  }
`;

export const PostInner = styled(SectionContainer)`
  padding-top: 2rem;
  @media (min-width: 700px) {
    padding-top: 2rem;
  }
`;

export const EntryContent = styled.div`
  line-height: 1.5;
  max-width: unset;
  letter-spacing: normal;
  font-size: 1em;
  padding: 15px;
  color: #333;

  @media (min-width: 700px) {
    
  }

  > *:first-of-type {
    margin-top: 0;
  }

  figure {
    margin: 2em 0;
    max-width: 100%;
  }

  blockquote {
    background-color: #fff;
    -webkit-box-shadow: 0px 10px 30px 0px rgba(20,3,67,.08);
    box-shadow: 0px 10px 30px 0px rgba(20,3,67,.08);
    border-radius: 6px;
    padding: 28px 40px 22px !important;
    position: relative;
    overflow: hidden;
    border-left: 6px solid #6877da;
    z-index: 0;
    margin: 40px 0 45px;
    line-height: 1em;
  }

  pre {
    white-space: pre-wrap;
    background-color: #F8F8F8;
    padding: 25px;
  }
`;
