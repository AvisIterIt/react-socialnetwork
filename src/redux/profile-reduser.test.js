import profileReduser, { addPostActionCreator } from "./profile-reduser";

test("length of posts should be incremented", () => {
  // 1.test data
  let action = addPostActionCreator("it-camacutra.com");
  let state = {
    posts: [
      { id: 1, message: "Hi,how are you?", likesCount: 12 },
      { id: 2, message: "Hi,how are you?", likesCount: 10 },
      { id: 3, message: "Hi,how are you?", likesCount: 8 },
      { id: 4, message: "Hi,how are you?", likesCount: 6 },
    ],
  };
  // 2. action
  let newState = profileReduser(state, action);

  // 3.expectation
  expect(newState.posts.length).toBe(5);
});
