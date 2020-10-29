import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <div>
      <ul>
        {resources.map(resource => {
          return (
            <li key={resource.id}>{resource.title}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default ResourceList;