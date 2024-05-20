export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
  } catch (error) {}
};

export const login = (req, res) => {
  console.log('Login');
};
export const logut = (req, res) => {
  console.log('Logout');
};
