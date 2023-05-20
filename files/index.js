const fs = require('fs/promises');
const path = require('path');
// console.log(__dirname);

const usersPath = path.join(__dirname, '..', 'db', 'users.json');
// console.log('usersPath:', usersPath);

class FileOperations {
  constructor(path) {
    this.path = path;
  }

  async read() {
    try {
      return await fs.readFile(this.path, 'utf-8');
    } catch (error) {
      return error.message;
    }
  }

  async create(data) {
    try {
      await fs.writeFile(this.path, JSON.stringify(data, null, 2));
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

  async update(data) {
    try {
      const users = await this.read();
      const usersArr = JSON.parse(users); // object
      usersArr.push(data);

      await this.create(usersArr);
    } catch (error) {
      return error.message;
    }
  }

  async remove() {
    try {
      return await fs.unlink(this.path);
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

  // замість console.log():
  async display() {
    const users = await this.read();
    console.log('FileOperations >> display >> users:', users);
  }
}

const file = new FileOperations(usersPath);

const data = [{ name: 'Oleg' }, { name: 'Taya' }];
// file.display();
// file.create(data);
file.update({ name: 'Andriy' });
// file.remove();

// tryCatchHandler(file.display);
