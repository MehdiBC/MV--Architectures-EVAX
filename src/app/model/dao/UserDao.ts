class UserDao {
  private static users: User[];

  private constructor() {
    UserDao.users = [];
  }

  public static getUserByNumInscription(numInscription: string): User | undefined {
    return UserDao.users.find((user)=>user.numInscription==numInscription);
  }
}
