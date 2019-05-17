import axiosGitHubGraphQL from '../Api/AUTH/gitAuth';
import { ADD_STAR, REMOVE_STAR } from '../Helpers/gitstar';

const addStarToRepository = repositoryId => {
  return axiosGitHubGraphQL.post('', {
    query: ADD_STAR,
    variables: { repositoryId },
  });
};

const resolveAddStarMutation = mutationResult => state => {
  const {
    viewerHasStarred,
  } = mutationResult.data.data.addStar.starrable;

  const { totalCount } = state.organization.repository.stargazers;

  return {
    ...state,
    organization: {
      ...state.organization,
      repository: {
        ...state.organization.repository,
        viewerHasStarred,
        stargazers: {
          totalCount: totalCount + 1,
        },
      },
    },
  };
};

const removeStarFromRepository = repositoryId => {
  return axiosGitHubGraphQL.post('', {
    query: REMOVE_STAR,
    variables: { repositoryId },
  });
};

const resolveRemoveStarMutation = mutationResult => state => {
  const {
    viewerHasStarred,
  } = mutationResult.data.data.removeStar.starrable;

  const { totalCount } = state.organization.repository.stargazers;

  return {
    ...state,
    organization: {
      ...state.organization,
      repository: {
        ...state.organization.repository,
        viewerHasStarred,
        stargazers: {
          totalCount: totalCount - 1,
        },
      },
    },
  };
};

export {
  addStarToRepository,
  resolveAddStarMutation,
  removeStarFromRepository,
  resolveRemoveStarMutation,
}

