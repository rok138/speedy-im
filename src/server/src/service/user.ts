import db from '../lib/db';

export interface UserData {
  id: number;
  name: string;
  mobile: number;
  password: string;
  avatar: string;
  status: number;
}

class User {
  private table = 'user';

  createUser(info: { mobile: number; password: string;}) {
    return db.table(this.table)
      .add(info)
      .then((data: UserData) => [null, data])
      .catch((err: any) => [err, null]);
  }

  getUserInfoByMobile(mobile: number) {
    return db.table(this.table)
      .where({
        mobile,
      })
      .find()
      .then((data: UserData) => [null, data])
      .catch((err: any) => [err, null]);
  }

  getUserInfoById(id: number) {
    return db.table(this.table)
      .where({
        id,
      })
      .find()
      .then((data: UserData) => [null, data])
      .catch((err: any) => [err, null]);
  }

  getUserInfoByPassword(mobile: number, password: string) {
    return db.table(this.table)
      .where({
        mobile,
        password,
      })
      .find()
      .then((data: UserData) => [null, data])
      .catch((err: any) => [err, null]);
  }
}

export default new User();
