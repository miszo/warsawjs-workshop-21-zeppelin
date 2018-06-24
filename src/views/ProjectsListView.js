import React from 'react';
import ProjectsList from '../components/ProjectsList';
import Layout from '../components/Layout';

const ProjectsListView = ({ match }) => (
  <Layout
    // sidebar={<SidebarTags id={match.params.projectId} />}
    sidebar={<div>Sidebar</div>}
    content={<ProjectsList id={match.params.projectId} />}
  />
);

export default ProjectsListView;


