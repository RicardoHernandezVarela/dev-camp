const headerQuery = `
  *[_type == "header"]{
    logoText,
    logo {
        asset->{
            ...,
            metadata
        }
    }
  }
`;

export default headerQuery;
