const profile = {
  username: "Jacob",
  playTime: 300,

  getInfo() {
    return `${username} has ${playTime} active hours!`
  }

  changeUsername(newName) {
    for (const name of profile) {
      if (this.username !== newName) {
        this.username = newName;
      }
    }
  }
  
  updatePlayTime(hours)
};






console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

