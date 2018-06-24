import React from 'react'
import { Card, Image } from "semantic-ui-react";

const ProjectItem = ({ project }) => (
  <Card>
    <Image src={`http://via.placeholder.com/260x175?text=${project.id}`}/>
    <Card.Content>
      <Card.Header>
        {project.title}
      </Card.Header>
      <Card.Meta>
        {project.tags
          .map((item, index) => <span key={index}>{item}</span>)}
      </Card.Meta>
      <Card.Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Assumenda commodi dolores dolorum earum eum ex, hic in incidunt mollitia,
        nulla pariatur placeat provident quaerat, reiciendis repellat tempora ut velit voluptate!
      </Card.Description>
    </Card.Content>
  </Card>
);

ProjectItem.defaultProps = {
  project: {}
};

export default ProjectItem;

