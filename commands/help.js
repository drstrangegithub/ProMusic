const { MessageEmbed } = require("discord.js");
const { support_server } = require("../config.json");
const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "help",
  aliases: ["h"],
  description: i18n.__("help.description"),
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setAuthor(`${message.client.user.username}`, `${message.client.user.displayAvatarURL({ format: "png" })}`)
      .setTitle(i18n.__mf("help.embedTitle", { botname: message.client.user.username }))
      .setThumbnail(message.client.user.displayAvatarURL({ format: "png" }))
      .setDescription(i18n.__("help.embedDescription"))
      .setColor("RANDOM")
      .setFooter(`Requested by ${message.author.username}`);

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `\`\`\`${message.client.prefix}${cmd.name}\`\`\``,
        `${cmd.description} | Aliases: (${cmd.aliases ? `${cmd.aliases}` : ""})`,
        true
      );
    });
    helpEmbed.addField(`**Links!**`, `**[Support Server](${support_server || "https://discord.gg/HMEKZdEExZ"}) • [Invite](https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&permissions=70282305&scope=bot)**`)

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};