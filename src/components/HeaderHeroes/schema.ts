import * as Yup from 'yup';

export const schema = Yup.object().shape({
  searchHero: Yup
    .string()
    .required('Search cannot be empty')
    .test('search-match', "Search can't be repeat.", function(value) {
      return this.parent.originalSearch !== value;
    }),
  originalSearch: Yup
    .string()
}); 
 