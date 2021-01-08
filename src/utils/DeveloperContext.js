import React from "react";

const DeveloperContext = React.createContext({
    search: setSearch,
    title: setTitle,
    url: setUrl
  });

export default DeveloperContext;
