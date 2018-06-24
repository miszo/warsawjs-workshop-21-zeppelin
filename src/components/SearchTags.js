import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const SearchTags = ({ tags }) => (
  <Dropdown placeholder="Tagi" options={tags}/>
);

SearchTags.defaultProps = {
  tags: []
};

export default SearchTags;
