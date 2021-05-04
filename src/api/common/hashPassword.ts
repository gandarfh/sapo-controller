import bcrypt from 'bcrypt'

class Crypto {
  public static encrypt(password: string) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt)

    return hash
  }
  public static decrypt(password: string, hash: string) {
    const decrypted = bcrypt.compareSync(password, hash)
    return decrypted
  }

}

export default Crypto
