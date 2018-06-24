import React from 'react';
import { connect } from 'react-redux';
import { Card, Header, Segment } from "semantic-ui-react";

import ProjectItem from './ProjectItem';

const ProjectsList = ({ projects }) => (
  <div>
    <Segment clearing vertical basic>
      <Header floated="left" as="h1">
        Dostępne projekty w aplikacji:
      </Header>
    </Segment>
    <Card.Group itemsPerRow={3}>
      {projects
        .map(item => <ProjectItem project={item}></ProjectItem>)}
    </Card.Group>
  </div>
);

ProjectsList.defaultProps = {
  projects: [],
  tags: []
};

const mapStateToProps = (state, ownProps) => ({
  projects: state.projects.data
});

export default connect(mapStateToProps)(ProjectsList);
