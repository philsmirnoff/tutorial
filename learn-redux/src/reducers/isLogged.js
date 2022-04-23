const loggedReducer = (state = false, action) => {
  switch(action.type) {
    case 'LOGIN':
      return true;
  }
}
