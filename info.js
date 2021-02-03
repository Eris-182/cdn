 /*==  Check Info == */
    if (contentMessage.indexOf(`${prefix}info`) == 0) {
      var content = contentMessage.slice(prefix.length + 5,contentMessage.length);
      let data = await api.getUserInfo(senderID);
      if (!content) {
        let name = data[senderID].name;
        let gender = data[senderID].gender;
        let vanity = data[senderID].vanity;
        let sex = data[senderID].gender == 2 ? "Nam" : data[senderID].gender == 1 ? "Nữ" : "Trần Đức Bo";
        let birthday = data[senderID].isBirthday;
        let profileUrl = data[senderID].profileUrl;
        api.sendMessage(
          "Tên: " + name +
          "\nID: " + `${senderID}` +
          "\nTên người dùng: " + vanity +
          "\nGiới tính: " + sex +
          "\nURL Cá nhân: " + profileUrl,
          threadID, messageID
        );
      } else {
        let mentions = Object.keys(event.mentions);
        let data = await api.getUserInfo(mentions);
        let name = data[mentions].name;
        let vanity = data[mentions].vanity;
        let sex = data[mentions].gender == 2 ? "Nam" : data[mentions].gender == 1 ? "Nữ" : "Trần Đức Bo";
        let birthday = data[mentions].isBirthday;
        let profileUrl = data[mentions].profileUrl;
        for (var i = 0; i < Object.keys(event.mentions).length; i++)
          api.sendMessage(
            "Tên: " + name +
            "\nID: " + `${Object.keys(event.mentions)[i]}` +
            "\nTên người dùng: " + vanity +
            "\nGiới tính: " + sex +
            "\nURL Cá nhân: " + profileUrl,
            threadID, messageID
          );
      }
    }
