const fs = require('fs/promises');
const path = require('path');

const usersPath = path.join(__dirname, '..', 'db', 'users.json');

class FileOperations {
  constructor(path) {
    this.path = path;
  }

  async read() {
    return await fs.readFile(this.path, 'utf-8');
  }

  async create(data) {
    await fs.writeFile(this.path, JSON.stringify(data, null, 2));
  }

  async update(data) {
    const users = await tryCatchHandler(file.read.bind(file));
    const usersArr = JSON.parse(users);
    usersArr.push(data);
    await this.create(usersArr);
  }

  async remove() {
    return await fs.unlink(this.path);
  }

  // замість console.log():
  async display() {
    const users = await this.read();
    console.log('FileOperations >> display >> users:', users);
    return users;
  }
}

const file = new FileOperations(usersPath);
const data = [{ name: 'Oleg' }, { name: 'Taya' }];

// ^ Function for use try...catch:
async function tryCatchHandler(callback) {
  try {
    const result = await callback(data);
    return result;
  } catch (error) {
    console.log('tryCatchHandler >> error:', error);
  }
}

// * with tryCatchHandler function
// tryCatchHandler(file.display.bind(file));
// tryCatchHandler(file.create.bind(file, data));
tryCatchHandler(file.update.bind(file, { name: 'Sergiy' }));
// tryCatchHandler(file.remove.bind(file));

// tryCatchHandler(file.display);
