const homePageQuery = `
  *[_type == "page" && pageType == "home"]{
    pageType,
    name,
    sections[]{...}
  }
`;

export default homePageQuery;
