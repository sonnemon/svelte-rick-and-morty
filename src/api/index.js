import { request } from 'graphql-request';
const API_RM = 'https://rickandmortyapi.com/graphql/';

export const getCharacter = async (variables) => {
	const response = await request(
		API_RM,
		`
    query getCharacter(
      $characterId: ID
      $page: Int
    ){
      characters(page: $page) {
        info {
          count
        }
        results {
          id
          name
          status
          species
          type
          gender
          origin{
            name
          }
          image
          created
        }
      }
      character(id: $characterId) {
        id
        name
        status
        species
        type
        gender
        origin{
          name
        }
        image
        created
      }
    }
  `,
		variables
	);
	return response;
};

export const getSimilarCharacter = async (variables) => {
	let response;
	try {
		response = await request(
			API_RM,
			`
      query getSimilarCharacter(
        $filter: String
      ){
        characters(
          filter: { name: $filter }
        ) {
          info {
            count
          }
          results {
            id
            name
            status
            species
            type
            gender
            origin{
              name
            }
            image
            created
          }
        }
      }
    `,
			variables
		);
	} catch (error) {
		return [];
	}

	return response;
};
