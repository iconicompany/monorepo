export default class UserView {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async process(request) {
    return this.userRepository.find(request.id);
  }

  async schema(request) {
    return {};
  }
}
