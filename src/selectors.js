import { createSelectors } from 'reselect';
import { uniqBy } from 'lodash';

export const getProject = (state, props) => state.projects.data
  .find(project => project.id === parseInt(props.id, 10));

export const getProjectPoints = (state, props) => {
  const project = getProject(state, props);
  const { comments = [] } = project;
  const points = comments.map(({ x, y }) => ({ x, y }));
  const uniqPoints = uniqBy(points, ({ x, y }) => `${x}-${y}`);
  return uniqPoints;
};
