const homePageQuery = `
  *[_type == "page" && pageType == "home"]{
    pageType,
    name,
    sections[]{
      ...,
      image {
        asset->{
          ...,
          metadata
        }
      }
    }
  }
`;

export default homePageQuery;
