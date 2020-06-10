import { styled, connect, Global } from "frontity";
import React, { useRef } from "react";
import { CloseIcon } from "../icons";
import ScreenReaderText from "../styles/screen-reader";
import useFocusTrap from "../hooks/use-trap-focus";
import useFocusEffect from "../hooks/use-focus-effect";
import Button from "../styles/button";

const SearchModal = ({ state, actions, libraries }) => {
  // Improvement: Discuss with David about making a custom hook to grab query params
  const parse = libraries.source.parse(state.router.link);
  const searchQuery = parse.query["s"];

  const { isSearchModalOpen } = state.theme;
  const { closeSearchModal } = actions.theme;
  const { primary } = state.theme.colors;

  // Keep a reference to the input so we can grab it's value on form submission
  const inputRef = useRef();
  const containerRef = useRef();

  useFocusEffect(inputRef, isSearchModalOpen);
  useFocusTrap(containerRef, isSearchModalOpen);

  // Format the query to remove trailing spaces and replace space with "+"
  const formatQuery = query =>
    query
      .trim()
      .replace(" ", "+")
      .toLowerCase();

  const handleSubmit = event => {
    // Prevent page navigation
    event.preventDefault();

    // Get the input's value
    const searchString = inputRef.current.value;

    // If the typed search string is not empty
    // Better to trim write spaces as well
    if (searchString.trim().length > 0) {
      // Let's go search for blogs that match the search string
      actions.router.set(`/?s=${formatQuery(searchString)}`);

      // Scroll the page to the top
      window.scrollTo(0, 0);

      // Close the search modal
      closeSearchModal();
    }
  };

  return (
    <ModalOverlay
      role="presentation"
      data-open={isSearchModalOpen}
      onClick={closeSearchModal}
    >
      {isSearchModalOpen && (
        // Block scroll when modal is open
        <Global styles={{ body: { overflowY: "hidden" } }} />
      )}
      <ModalInner
        role="dialog"
        aria-modal="true"
        onClick={event => {
          // prevent clicks within the content from propagating to the ModalOverlay
          event.stopPropagation();
        }}
      >
        <SectionInner ref={containerRef}>
          <SearchForm
            role="search"
            aria-label="Search for:"
            onSubmit={handleSubmit}
          >
            <SearchInput
              ref={inputRef}
              type="search"
              defaultValue={searchQuery || ""}
              placeholder="Search ..."
              name="search"
            />
            <SearchButton bg={primary}>Search</SearchButton>
          </SearchForm>

          <CloseButton onClick={closeSearchModal}>
            <ScreenReaderText>Close search</ScreenReaderText>
            <CloseIcon />
          </CloseButton>
        </SectionInner>
      </ModalInner>
    </ModalOverlay>
  );
};

export default connect(SearchModal);

const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.2);
  display: none;
  opacity: 0;
  position: fixed;
  bottom: 0;
  left: -9999rem;
  top: 0;
  transition: opacity 0.2s linear, left 0s 0.2s linear;
  width: 100%;
  z-index: 999;

  &[data-open="true"] {
    display: block;
    opacity: 1;
    left: 0;
  }
`;

const ModalInner = styled.div`
  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.08);
  transform: translateY(0);
  background: #fff;
  transition: transform 0.25s ease-in-out, box-shadow 0.1s 0.25s linear;
  cursor: default;
`;

const SectionInner = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 120rem;
  width: calc(100% - 4rem);
  display: flex;
  justify-content: space-between;
  max-width: 168rem;

  @media (min-width: 700px) {
    width: calc(100% - 8rem);
  }
`;

const SearchForm = styled.form`
  margin: 0;
  position: relative;
  width: 100%;
  align-items: stretch;
  display: flex;
  flex-wrap: nowrap;

  @media (min-width: 700px) {
    position: relative;
    width: 100%;
  }
`;

const SearchInput = styled.input`
  background: none;
  border: none;
  border-radius: 0;
  color: inherit;
  display: block;
  color: #333333;
  font-size: 2rem;
  letter-spacing: -0.0277em;
  height: 8.4rem;
  margin: 0 0 0 -2rem;
  max-width: calc(100% + 2rem);
  padding: 0 0 0 2rem;
  width: calc(100% + 2rem);
  appearance: none;

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }

  @media (min-width: 700px) {
    border: none;
    font-size: 3.2rem;
    height: 7rem;
  }

  &:focus {
    outline: none;
    outline-offset: -4px;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  box-shadow: none;
  border-radius: 0;
  font-size: inherit;
  font-weight: 400;
  letter-spacing: inherit;
  padding: 0;
  text-transform: none;

  color: #000000;
  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  margin-right: -2.5rem;
  padding: 0 2.5rem;

  &:hover {
    svg {
      transform: scale(1.3);
    }
  }

  svg {
    height: 1.5rem;
    transition: transform 0.15s ease-in-out;
    width: 1.5rem;

    @media (min-width: 700px) {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
`;

const SearchButton = styled(Button)`
  position: absolute;
  right: -9999rem;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 0 0.8rem 0.8rem;
  border-color: #dcd7ca;

  &:focus {
    right: 0;
  }
`;
