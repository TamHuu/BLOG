import { takeLatest, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../api";
function* fetchSaga(action) {
  const posts = yield call(api.fetchPosts);
  console.log("postss", posts);
}
export default function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchSaga);
}
