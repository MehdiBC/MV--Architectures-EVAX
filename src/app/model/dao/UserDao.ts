import {User} from "../entity/User";
import {Vaccine} from "../entity/Vaccine";

export class UserDao {
  private static users: User[] = [
    new User('158568996', 'mehdi', 'ben chikha', '14428339', '23/10/1999', [
      new Vaccine('senofarm', '17/06/2021'),
      new Vaccine('senofarm', '10/10/2021'),
    ])
  ];

  public static getUserByNumInscription(numInscription: string): User | undefined {
    return UserDao.users.find((user)=>user.numInscription==numInscription);
  }
}
