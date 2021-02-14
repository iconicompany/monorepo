export default class UserRepository {
  find(id) {
    return {
      id,
      name: id
    };
  }
}
