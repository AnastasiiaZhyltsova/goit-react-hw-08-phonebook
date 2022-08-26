const getUserName = state => state.auth.user.name;
const getIsLoggedIn = state => state.auth.isLoggedIn;


const authSelectors = {
  getIsLoggedIn,
  getUserName,
}

export default authSelectors;