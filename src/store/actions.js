export const setIsAuthenticated = ({ commit }, data) => {
  commit("setIsAuthenticated", data);
};

export const setUser = ({ commit }, data) => {
  commit("setUser", data);
};

export const setIsLoading = ({ commit }, data) => {
  commit("setIsLoading", data);
};

export const setProfile = ({ commit }, data) => {
  commit("setProfile", data);
};

export const clearCurrentState = ({ commit }, data) => {
  commit("setIsAuthenticated", false);
  commit("setUser", null);
  commit("setProfile", null);
};

export const setProfiles = ({ commit }, data) => {
  commit("setProfiles", data);
};
