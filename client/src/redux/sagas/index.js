import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../api";
function* fetchSaga(action) {
  const posts = yield call(api.fetchPosts);
  yield put(actions.getPosts.getPostsSuccess(posts.data));
  console.log("check fetch Saga", posts);
}
export default function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchSaga);
}
