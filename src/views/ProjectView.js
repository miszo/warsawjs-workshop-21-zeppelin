import React from 'react';

import Layout from '../components/Layout';
import ProjectComments from '../components/ProjectComments';

const ProjectView = ({ match }) => (
  <Layout
    sidebar={<div>Sidebar</div>}
    content={
      <ProjectComments id={match.params.projectId}/>
    }/>
);

export default ProjectView;
