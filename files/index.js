const fs = require('fs/promises');
const path = require('path');

const usersPath = path.join(__dirname, '..', 'db', 'users.json');

class FileOperations {
  constructor(path) {
    this.path = path;
  }

  read = async () => {
    return await fs.readFile(this.path, 'utf-8');
  };

  create = async data => {
    await fs.writeFile(this.path, JSON.stringify(data, null, 2));
  };

  update = async data => {
    const users = await tryCatchHandler(file.read());
    const usersArr = JSON.parse(users);
    usersArr.push(data);
    await this.create(usersArr);
  };

  remove = async () => {
    return await fs.unlink(this.path);
  };

  // замість console.log():
  display = async () => {
    const users = await this.read();
    console.log('FileOperations >> display >> users:', users);
    return users;
  };
}

// ^ Use constructor instead different functions
const file = new FileOperations(usersPath);
const data = [{ name: 'Oleg' }, { name: 'Taya' }];

// ^ Function for use try...catch:
async function tryCatchHandler(callback) {
  try {
    const result = await callback;
    return result;
  } catch (error) {
    console.log('tryCatchHandler >> error:', error);
  }
}

// * with tryCatchHandler function without bind() - use arrow-functions instead usual
// tryCatchHandler(file.display());
// tryCatchHandler(file.create(data));
tryCatchHandler(file.update({ name: 'Sergiy' }));
// tryCatchHandler(file.remove());

// tryCatchHandler(file.display);
