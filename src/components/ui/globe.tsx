'use client';

import React from 'react';
import Globe, { GlobeProps } from 'react-globe.gl';

// This is a wrapper component to ensure Globe.gl is only rendered on the client.
const GlobeClient = (props: GlobeProps) => {
  return <Globe {...props} />;
};

export default GlobeClient;
