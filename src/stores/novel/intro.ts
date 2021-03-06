import { types, Instance } from 'mobx-state-tree'
import {
  TimestampsState,
  CommonState,
  CommonActions,
} from '../common'


export const Rating = types.model({
  source: 0,
  count: 0,
  ownSource: types.maybe(types.optional(types.number, 0)),
})

export const Type = types.model({
  id: types.identifierNumber,
  name: ``,
  ...TimestampsState,
})

export const UserInfo = types.model({
  id: types.identifierNumber,
  mobile: ``,
  username: ``,
  avatar: types.maybeNull(types.string),
  email: types.maybeNull(types.string),
  gender: types.maybeNull(types.number),
  age: types.maybeNull(types.number),
  birthday: types.maybeNull(types.string),
  isAdmin: false,
  ...TimestampsState,
})

export const Chapters = types.model({
  id: types.identifierNumber,
})

export const Novel = types.model({
  id: -1,
  title: ``,
  authorId: -1,
  typeId: -1,
  cover: ``,
  info: types.maybeNull(types.string),
  announcement: types.maybeNull(types.string),
  clickNum: 0,
  likeNum: 0,
  collectionsNum: 0,
  wordsNum: 0,
  chapters: types.optional(types.array(Chapters), [{
    id: -1,
  }]),
  rating: types.maybe(Rating),
  author: types.maybeNull(UserInfo),
  type: types.maybeNull(Type),
  ...TimestampsState,
})

export const Intro = types
  .model(`Intro`, {
    ...CommonState(),
    rating: 0,
    novel: types.maybeNull(Novel),
  })
  .actions(self => ({
    ...CommonActions(self),

    setRating(rating: number) {
      self.rating = rating
    },
    setNovel(novel: Instance<typeof Novel>) {
      self.novel = novel
    },
  }))

